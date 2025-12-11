
const rawToProcessed = (anyYearDB)=>{
    return anyYearDB.map(x=>{
        let temp = x.split("\n").map(x=>x.trim())
        temp.forEach((x,i,arr)=>{
            const decimalPattern = /\b\d+\.\d+\b/g;
           const decimalMatches = x.match(decimalPattern);
           const isFirstNumber = !isNaN(x.split(" ")[0]);
           const courseNamePattern = /[A-Z]{2}-[0-9]{5}/g
           const isCoursePresent = x.match(courseNamePattern)
           if(!isFirstNumber && (decimalMatches ||isCoursePresent ) ){
               let k = i - 1;
               while(k >= 0 && isNaN(arr[k].split(" ")[0])){
                    k--;
                }
                temp[k] += ` ${temp[i]}`
                
            }
        })
        
        return temp.filter((x) => !isNaN(x.split(" ")[0]))
    }).flat()
}
exports.rawToProcessed = rawToProcessed;
