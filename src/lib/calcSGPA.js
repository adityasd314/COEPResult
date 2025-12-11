// Function to parse the input data string and extract subject details
function parseDataString(dataString) {
    const subjects = [];

    // Split the data string by lines
    const lines = dataString.split('\n');

    let currentSubject = null;

    for (const line of lines) {
        // Check for a new subject entry
        const subjectMatch = line.match(/\d+\t([\w\s:\-]+)\t([\w]+)\t([\w\-()]+)\t(\d+)\t(\d+)\t([A-Z]+)\t([\d.]+)\t(Pass|Fail)/);
        if (subjectMatch) {
            if (currentSubject) {
                subjects.push(currentSubject);
            }

            currentSubject = {
                title: subjectMatch[1].trim(),
                type: subjectMatch[2].trim(),
                code: subjectMatch[3].trim(),
                credits: parseFloat(subjectMatch[4].trim()),
                gradePoint: parseFloat(subjectMatch[7].trim()),
                status: subjectMatch[8].trim()
            };
        }
    }

    // Push the last subject if present
    if (currentSubject) {
        subjects.push(currentSubject);
    }

    return subjects;
}

// Function to calculate SGPA
function calculateSGPA(dataString) {
    const subjects = parseDataString(dataString);

    let totalGradePoints = 0;
    let totalCredits = 0;
    const dataObject = {"subjectWise":{}}
    for (const subject of subjects) {
        // Exclude honors subjects (check by type or specific title) and those not passed
        
        if (subject.status === 'Pass' && !subject.code.includes('HO')) {
           dataObject["subjectWise"][subject.title] = Object.values(subject);
            totalGradePoints += subject.credits * subject.gradePoint;
            totalCredits += subject.credits;
        }
    }

    // Calculate SGPA
    const sgpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    dataObject["sgpa"] = sgpa;
    return dataObject;
}

