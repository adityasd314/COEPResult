function transformData(inputData) {
    // Helper function to map grades to grade points
    function mapGradeToPoints(grade) {
        const gradePointsMap = {
            "AA": 10,
            "AB": 9,
            "BB": 8,
            "BC": 7,
            "CC": 6,
            "CD": 5,
            "DD": 4,
            "PP": 0,
            "FF": 0
        };
        return gradePointsMap[grade] || 0; // Default to 0 if grade not found
    }

    // Helper function to calculate total credit points
    function calculateTotalCreditPoints(courses) {
        return courses.reduce((sum, course) => {
            const gradePoints = mapGradeToPoints(course.grade);
            return sum + (gradePoints * course.credits);
        }, 0);
    }
    const output = {
        details: inputData.student.name,
        score: {
            SGPA: inputData.student.sgpa.toString(),
            CGPA: inputData.student.cgpa.toString()
        },
        subjectWise: {},
        credit: {
            creditsRegistered: "0",
            creditsEarned: inputData.student.credits_earned.toString(),
            creditsEarnedTotal: "",
            creditPointsTotal: "0"
        }
    };

    // Iterate over courses to populate subjectWise
    inputData.courses.forEach(course => {
        // Generate a string for each course combining required info
        const courseDetails = `${course.name} ${course.credits}`;
        const gradePoints = mapGradeToPoints(course.grade); // Map grade to points dynamically
        const formattedValue = `${gradePoints} : ${course.grade}`;
        output.subjectWise[courseDetails] = formattedValue;
    });

    // Calculate credit-related details dynamically
    const totalCreditsRegistered = inputData.courses.reduce((sum, course) => sum + course.credits, 0);
    output.credit.creditsRegistered = totalCreditsRegistered.toString();
    output.credit.creditPointsTotal = calculateTotalCreditPoints(inputData.courses).toString();

    return output;
}

module.exports.transformData = transformData;