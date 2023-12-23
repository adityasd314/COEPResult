import clientPromise from "@/lib/mongodb";
export async function POST(req: Request) {
    const client = await clientPromise;
    const body = await req.json();
    const { yearOfStudy, semester, mis } = body;
    console.log(yearOfStudy, semester, mis);
    
    return Response.json({ status: "ok" });
}
