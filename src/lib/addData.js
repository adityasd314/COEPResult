const { MongoClient , ObjectId} = require("mongodb");
const {secondYearDB, thirdYearDB,  getJSONByDepartmentStrings} = require("./getJSONDataToAdd")
require("dotenv").config({path:"../../.env"});
// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('2023241');
    const results = database.collection('secondyears');
    const dataToInsert = {};

    const MIS = "612203036";
    const hexString = MIS.toString(16).padStart(24, '0');

    console.log(hexString);
    const data = await results.findOne({_id:new ObjectId(hexString)});
    console.log({data})
    // const data = secondYearDB.map(getJSONByDepartmentStrings).flat();
    // console.log({data})
    // const dataToInsert =data.map(([MIS, resultString])=>{
    //     const hexString = MIS.toString(16).padStart(24, '0');
    //     console.log({MIS, resultString})
    //     return ({"_id":new ObjectId(hexString), resultString})
    // });
    // console.log({dataToInsert})

    // const response  = await results.insertMany(dataToInsert);

    // console.log({response});
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);