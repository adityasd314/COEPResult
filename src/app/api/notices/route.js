const {writeNotices} = require('./getRealTimeNotices');
const data = require('./data.json');
export async function POST(req) {
    try {
        const body = await req.json();
        const { pages } = body;
        const response = await writeNotices(pages);        
        return Response.json({ status: "ok", result: {...data, ...response} });
    } catch (e) {
        console.error({ e });
        Response.json({ status: "error" });
    }
}
