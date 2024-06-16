const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
async function writeNotices(pagesNumber) {
    const NUMBER_OF_PAGES = 5;

    async function getNotices(pagesNumber = NUMBER_OF_PAGES) {
        try {
            const pagesToFetch = new Array(pagesNumber).fill(0).map((_, i) => `https://www.coep.org.in/node?page=${i}`)
            const pagesResponse = await Promise.all(pagesToFetch.map(async (page) => (await fetch(page))));
            const pagesResponseHTML = await Promise.all(pagesResponse.map(async (response) => response.text()));
            const data = pagesResponseHTML.map((responseHTML) => {
                console.log(">>")
                const dom = new JSDOM(responseHTML);
                const document = dom.window.document;
                const tempElement = document.createElement('div');
                tempElement.innerHTML = responseHTML;
                const table = tempElement.querySelectorAll('.views-table');
                return [...table].map(x => [...x.tBodies].map((tbody) => {
                    return [...tbody.rows].map((row) => {

                        const data = row.children[0].firstElementChild
                        const title = row.children[0].textContent.slice(2).trim();
                        const link = data.href;
                        const date = row.children[1].textContent.slice(2).trim();

                        return { date, link, title }
                    }).flat()
                })).flat(2)
            }).flat()
            return data;
        } catch (e){
            console.log({e});
            return ({});
        }
    }
    const data = (await getNotices()) || {};
    console.log({ data })
    return data;
}
module.exports.writeNotices = writeNotices;

if (require.main === module) {
    (async function () {
        {
            const data = await writeNotices();
            const jsonData = JSON.stringify(data, null, 2);

            await fs.promises.writeFile('data.json', jsonData, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    return;
                }
                console.log('Data has been written to data.json');
            });
        }
    })();
} 