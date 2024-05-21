
const PDFExtract = require('pdf.js-extract').PDFExtract;
const { readFileSync } = require('fs');
const { parseGradeReport } = require('./parseGradeReport');


module.exports.getPDFInfo =function (filename, callback) {

    const pdfExtract = new PDFExtract();

    const options = {}; /* see below */
    pdfExtract.extract(filename, options, (err, data) => {
        if (err) return console.log(err);
        const t = ((data.pages[0].content));
        const raw = [{ x: 0, y: 0, str: "" }, ...t].reduce((acc, curr, index) => {
            if (!index) return "";
            return acc + curr.str + ((t[index]?.y != curr.y) ? "\n" : "");

        }, "").split("\n")
        const response = parseGradeReport(raw);
        callback(response);
    });
   
}