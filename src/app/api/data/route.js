import clientPromise from "@/lib/mongodb";
import { determineDatabaseCollection } from "./resultUtil";
// import {getResultByString} from "./getResultData"
import { getResultByString } from "./getResultData";

const { ObjectId } = require("mongodb");

export async function POST(req) {
    try {
        const client = await clientPromise;
        const body = await req.json();
        const { yearOfStudy, semester, mis: MIS } = body;
        const { databaseString, collectionString } =
            determineDatabaseCollection(yearOfStudy, semester);
        console.log({ databaseString, collectionString });
        console.log({ MIS, yearOfStudy, semester });
        const database = client.db(databaseString);
        const results = database.collection(collectionString);
        const hexString = "0".repeat(24 - String(MIS).length) + String(MIS);

        console.log(hexString);
        const data = await results.findOne({ _id: new ObjectId(hexString) });
        if (!data) {
           return Response.json({ status: "error", message: "Data not found" });
        }
        console.log(data);
        console.log(data.resultString);
        console.log({ getResultByString });
        const response = getResultByString(data.resultString);
        console.log(">>");
        return Response.json({ status: "ok", result: response });
    } catch (e) {
        console.error({ e });
        Response.json({ status: "error" });
    }
}
