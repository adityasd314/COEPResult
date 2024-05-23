const {writeNotices} = require('./getRealTimeNotices');
const data = require('./data.json');
export async function POST(req) {
    try {
        console.log({req})
        const body = await req.json();
        const { pages } = body;
        const response = await writeNotices(pages);

        console.log({response})
        
        return Response.json({ status: "ok", result: {...data, ...response} });
    } catch (e) {
        console.error({ e });
        Response.json({ status: "error" });
    }
}
