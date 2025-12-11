const { MongoClient , ObjectId} = require("mongodb");
const {btechYearDB, secondYearDB,courseData, firstYearDB,tempDB,  getJSONByDepartmentStrings} = require("./getJSONDataToAdd")
require("dotenv").config({path:"../../.env"});
// Replace the uri string with your connection string.
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('2024252');
    const results = database.collection('thirdyears');
    // const dataToInsert = {};

    // const MIS = "612203036";
    // const hexString = MIS.toString(16).padStart(24, '0');

    // console.log(hexString);
    // const data = await results.findOne({_id:new ObjectId(hexString)});
    // console.log({data})
    const data = secondYearDB.map(getJSONByDepartmentStrings).flat();
    // const data = secondYearDB;
    const dataToInsert =data.map(([MIS, resultString])=>{
        const hexString = MIS.toString(16).padStart(24, '0');
        console.log({MIS, resultString})
        return ({"_id":new ObjectId(hexString), resultString})
    })
    
    // const regex = new RegExp('.{15}10.{3}$');

    //     // Aggregate documents to match specific pattern in ObjectId
    //     const matchStage = {
    //         $match: {
    //             _id: {
    //                 $regex: regex.toString(),
    //                 $options: 'i' // Case insensitive, though not necessary for hex digits
    //             }
    //         }
    //     };

    //     const pipeline = [
    //         {
    //             $project: {
    //                 _idStr: { $toString: "$_id" }
    //             }
    //         },
    //         {
    //             $match: {
    //                 _idStr: { $regex: regex }
    //             }
    //         }
    //     ];

    //     // Execute the aggregation pipeline to find matching documents
    //     const docsToDelete = await results.aggregate(pipeline).toArray();
    //     const idsToDelete = docsToDelete.map(doc => doc._id);

    //     // Delete documents by their _id
    //     const response = await results.deleteMany({ _id: { $in: idsToDelete } });

    // Delete documents where the ObjectId matches the regex pattern
    // const response = await results.deleteMany({ _id: { $regex: regex } });
    const response  = await results.insertMany(dataToInsert);
    // const response  = await results.insertMany(dataToInsert);
    // update ../app/api/data/courseData.json
    const courseDT = require("../app/api/data/courseMap.json");
    const newCourseData = {...courseData, ...courseDT};
    const fs = require("fs");
    fs.writeFileSync("../app/api/data/courseMap.json", JSON.stringify(newCourseData, null, 2));


    console.log({response});
  }catch(e){
    console.error(e)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);