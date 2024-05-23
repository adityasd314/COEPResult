const { MongoClient, ObjectId } = require("mongodb");
const { btechYearDB, secondYearDB, courseData, firstYearDB, tempDB, getJSONByDepartmentStrings } = require("./getJSONDataToAdd");
require("dotenv").config({ path: "../../.env" });

// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('2023242');
    const results = database.collection('btechyears');
    
    // const data = secondYearDB.map(getJSONByDepartmentStrings).flat();
    const data = tempDB;
    const bulkOps = data.map(([MIS, resultString]) => {
      const hexString = MIS.toString(16).padStart(24, '0');
      console.log({ MIS, resultString });
      return {
        updateOne: {
          filter: { _id: new ObjectId(hexString) },
          update: { $set: { resultString } },
          upsert: true
        }
      };
    });

    // Perform the bulk write operation
    const response = await results.bulkWrite(bulkOps);

    // Update course data
    const courseDT = require("../app/api/data/courseMap.json");
    const newCourseData = { ...courseData, ...courseDT };
    const fs = require("fs");
    fs.writeFileSync("../app/api/data/courseMap.json", JSON.stringify(newCourseData, null, 2));

    console.log({ response });
  } catch (e) {
    console.error(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
