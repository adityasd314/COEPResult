const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config({ path: "../../.env" });

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('2023242');
    const results = database.collection('secondyears');

    // Define the regex pattern to match '10' at the 4th and 5th positions from the end
    const match = async (e)=>{
    const regex = new RegExp(`.{15}${e}.{3}$`);

    // Aggregation pipeline to convert _id to string and match with regex
    const pipeline = [
      {
        $project: {
          _idStr: { $toString: "$_id" },
          resultString: 1
        }
      },
      {
        $match: {
          _idStr: { $regex: regex }
        }
      }
    ];

    // Execute the aggregation pipeline to find matching documents
    const matchingDocs = await results.aggregate(pipeline).toArray();
    
    // console.log("Matching documents:", matchingDocs);
    // console.log("Matching documents:", matchingDocs.length);
    return [e, matchingDocs.length];
}
    const departments = ["01", "03","05","07","09","13","10","11", "14"]
    const r = Object.fromEntries(await Promise.all(departments.map((x)=>match(x))))
    console.log({r});
  } catch (e) {
    console.error(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
