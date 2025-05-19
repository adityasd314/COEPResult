const determineDatabaseCollection = function ( yearOfStudy, semester ) {
    const currentYear = new Date().getFullYear()-1;
    const yearMap = {
        "FY":1,"SY":2,"TY":3,"BY":4
    }
    const yearMapToString = {
        "FY":"first","SY":"second","TY":"third","BY":"btech"
    }
    // const semesterMap = {
    //   "I": 1,
    //   "II": 2,
    //   "III": 3,
    //   "IV": 4,
    //   "V": 5,
    //   "VI": 6,
    //   "VII": 7,
    //   "VIII": 8
    // }
    const baseYear = currentYear - yearMap [yearOfStudy] + 1;
    const databaseYear = (baseYear + Math.floor((semester-1)/2)).toString()
    const nextYearPostFix = Number(databaseYear.slice(2)) + 1;
    const databaseString = databaseYear + nextYearPostFix + (2-semester%2);
    console.log({databaseString})
    const collectionString = yearMapToString[yearOfStudy] + "years";
    
    console.log({databaseString, collectionString})
  return {databaseString, collectionString}
};

export{ determineDatabaseCollection}
