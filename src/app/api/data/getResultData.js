import { subjectMapping } from "./subjectMapping";
// temps.map((temp) => {
//     temp.map((x) => {
//         const [key, value] = [x[0], x.slice(1).join(' ')];
//         subjectMapping[key] = value;
//     })
// })
const getSGCG = (inputString) => {

    const decimalPattern = /\b\d+\.\d+\b/g;
    const decimalMatches = inputString.match(decimalPattern);
    const [SG, CG] = decimalMatches;
    return ({ SGPA: SG, CGPA: CG })
}


// const getByMISThreeDigits = (n) => {
//     const details = db[n].split(" ").slice(1, 5).join(" ");
//     const score = getSGCG(db[n])
    
//     const subjectWise = Object.fromEntries(db[n].split(" ").filter(x => x.slice(0, x.length - 4) in subjectMapping).map((x) => [x.substring(0, x.length - 4), x.substring(x.length - 3, x.length - 1)]).map((x) => [subjectMapping[x[0]], x.slice(1).join("")]));
//     return ({ details, score, subjectWise })
// }
const pointer = (string) => {
    const grade = {
        "A": 5,
        "B": 4,
        "C": 3,
        "D": 2,
        "E": 1,
        "F": 0,
    }
    if(string == "PP")return "Pass";
    if(string == "NR")return "Not Registered";
    return string.split("").reduce((t, x) => t + grade[x], 0);
}
// const getByMIS = () => {
//     let string = (db.filter((x, i) => {
//         const found = x.split(" ")[1] == n
//         return found
//     })[0])

//     const details = string.split(" ").slice(1, 5).join(" ");
//     const score = getSGCG(string)
   
//     const subjectWise = Object.fromEntries(string.split(" ").filter(x => x.slice(0, x.length - 4) in subjectMapping).map((x) => [x.substring(0, x.length - 4), x.substring(x.length - 3, x.length - 1)]).map((x) => [subjectMapping[x[0]], pointer(x.slice(1).join("")) + " : " + (x.slice(1).join(""))]));
//     return ({ details, score, subjectWise })
// }

const getResultByString= (resultString) => {
    try{
    console.log(resultString)
    const getNameLastIndex = resultString.match(/[0-9]/).index - 1;
    const details = resultString.slice(0, getNameLastIndex);
    console.log(details)
    const score = getSGCG(resultString)
    console.log(score)
    const decimalPattern = /\b\d+\.\d+\b/;
    const decimalMatches = res.match(decimalPattern);
    const creditLastIndex = decimalMatches.index;
    const creditString = resultString.slice(getNameLastIndex+1, creditLastIndex)
    const [creditsRegistered, creditsEarned,creditsEarnedTotal, creditPointsTotal] = creditString
    console.log(creditString)
    const subjectWise = Object.fromEntries(resultString.split(" ").filter(x => x.slice(0, x.length - 4) in subjectMapping).map((x) => [x.substring(0, x.length - 4), x.substring(x.length - 3, x.length - 1)]).map((x) => [subjectMapping[x[0]], pointer(x.slice(1).join("")) + " : " + (x.slice(1).join(""))]));
    console.log("??")
    console.log(subjectWise)
    return ({ details, score, subjectWise,credit:{creditsRegistered, creditsEarned,creditsEarnedTotal, creditPointsTotal} })
}catch(e){
    console.log(e)
}}

export{getSGCG, pointer,  getResultByString};
