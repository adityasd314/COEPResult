import clientPromise from "@/lib/mongodb";
export async function GET() {
    const client = await clientPromise;
    if (client) {
        return Response.json({ status: "connected to db" });
    }
    return Response.json({ status: "not connected to db" });
}
