module.exports.parseGradeReport = function parseGradeReport(data) {
    const report = {
        university: {
            name: "COEP Technological University",
            address: {
                location: "SHIVAJI NAGAR, PUNE - 411 005 (MH) INDIA",
                phone: "+91-20-25507075",
                website: "http://portal.coep.org.in:9093",
                email: "mishelp@coeptech.ac.in"
            },
            note: "A Unitary Public University of Government of Maharashtra (Formerly College of Engineering Pune (COEP))"
        },
        student: {
            name: "",
            prn: "",
            program: "",
            branch: "",
            academic_year: "",
            semester: "",
            credits_earned: 0,
            sgpa: 0.0,
            cgpa: 0.0
        },
        courses: [],
        report_details: {
            type: "Provisional Grade Report",
            date: "",
        note: "This is a system generated Provisional Grade Report. No signature is required.",
            honors_minor_note: "Respective Credits and Grades are not considered towards total Credits acquired and calculations of SGPA and CGPA."
        }
    };

    data.forEach(line => {
        if (line.startsWith("Student Name")) {
            report.student.name = line.split(":- ")[1];
        } else if (line.startsWith("Student PRN No")) {
            report.student.prn = line.split(":- ")[1];
        } else if (line.startsWith("Programme")) {
            report.student.program = line.split(":- ")[1];
        } else if (line.startsWith("Branch Name")) {
            report.student.branch = line.split(":- ")[1];
        } else if (line.startsWith("Academic Year")) {
            report.student.academic_year = line.split(":- ")[1];
        } else if (line.startsWith("Semester")) {
            report.student.semester = line.split(":- ")[1];
        } else if (line.startsWith("Credit Earned")) {
            report.student.credits_earned = parseInt(line.split(":- ")[1], 10);
        } else if (line.startsWith("SGPA:")) {
            console.log(line, line.split(" ")[1]  );
            report.student.sgpa = Number(line.split(" ")[1]);
        } else if (line.startsWith("CGPA")) {
            report.student.cgpa = parseFloat(line.split(":- ")[1]);
        } else if (line.startsWith("Date")) {
            report.report_details.date = line.split(":-")[1].trim();
        } else if (line.match(/^[A-Z]{2}-\d{5}/)) {
            const [code, ...rest] = line.split(" ");
            const name = rest.slice(0, -2).join(" ");
            const credits = parseInt(rest.slice(-2, -1)[0], 10);
            const grade = rest.slice(-1)[0];
            report.courses.push({ code, name, credits, grade });
        }
    });

    return report;
}
