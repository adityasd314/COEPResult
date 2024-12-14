"use server";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function extractTableFromHTML(htmlString) {
    // Parse the HTML using JSDOM
    const dom = new JSDOM(htmlString);
    const document = dom.window.document;

    // Extract the table element
    const table = document.querySelector("table"); // Assumes there's one table in the response
    if (table) {
        console.log("Table extracted:", table.outerHTML);
        return table.outerHTML;
    } else {
        console.error("No table found in the provided HTML");
        return null;
    }
}

export async function getResult(mis, session, token) {
    const REQUEST_URL = process.env.RESULT_ENDPOINT;

    const myHeaders = {
        Cookie: `.ASPXAUTH=${token}; ASP.NET_SessionId=${session}`,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    };

    const raw = `StudentRegCode=${mis}`;

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    try {
        const response = await fetch(REQUEST_URL, requestOptions);
        const blob = await response.text();
        return extractTableFromHTML(blob);
    } catch (error) {
        console.error("Error fetching the PDF:", error);
        return null;
    }
}
