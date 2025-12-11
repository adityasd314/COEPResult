const fs = require('fs');
const {getPDFInfo} = require("./getPDFInfo");
const Cookie = require("cookie");
const mis = "612203036";
const password = "";
const SEMESTER_PIDS = {
    "1": "4214",
    "2": "4215",
    "3": "4216",
    "4": "4217",
    "5": "4218",
    "6": "4219",
    "7": "4220",
    "8": "4221"
}
// Headers configuration


// Request body



// Fetch the PDF and save it to a file
 function getDataByMIS (callback, requestOptions) {
  fetch("http://portal.coep.org.in:9093/ReportViewer.aspx", requestOptions)
  .then(response => response.blob())
  .then(async blob => {

      blob.arrayBuffer().then(async arrayBuffer => {
          // Save the ArrayBuffer as a PDF file
          console.log(arrayBuffer);
          // convert to readable string
          const t = Buffer.from(arrayBuffer).toString('base64');
          console.log(t);
         const filename = "response.pdf"
          await fs.writeFileSync(filename, Buffer.from(arrayBuffer), (err) => {
            if (err) {
              console.error("Error writing PDF file", err);
            } else {
              console.log("PDF file saved successfully");
            }
          });
          getPDFInfo(filename, callback);
          

        });
  })
  .catch(error => console.error("Error fetching the PDF:", error));
}
module.exports.getDataByMIS = getDataByMIS
fetch("http://portal.coep.org.in:9093/signup/SigninRegister", {
  headers: {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "ASP.NET_SessionId=",
    "Referer": "http://portal.coep.org.in:9093/SignUp",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: `UserName=${mis}&Password=${password}`,
  method: "POST",
}).then(async login => {

const setCookieHeader = login.headers.get("Set-Cookie");
if (setCookieHeader) {
  cookies = Cookie.parse(setCookieHeader);
  AUTH_TOKEN = cookies[".ASPXAUTH"];
} else {
  console.log("No Set-Cookie header found.");
}
console.log(AUTH_TOKEN)
const SESSION_ID = ""
const SEMESTER_PIDS = {
  "1": "4214",
  "2": "4215",
  "3": "4216",
  "4": "4217",
  "5": "4218",
  "6": "4219",
  "7": "4220",
  "8": "4221"
}
const resultDetails = {
  mis: "",
  semester: SEMESTER_PIDS["5"]
  
}
// Headers configuration
const myHeaders = {
  // "Accept": "*/*",
  // "Accept-Encoding": "gzip, deflate",
  // "Accept-Language": "en-US,en;q=0.9",
  // "Cache-Control": "max-age=0",
  // "Connection": "keep-alive",
  "Cookie": `.ASPXAUTH=${AUTH_TOKEN}; ASP.NET_SessionId=${SESSION_ID}`,

  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  // "Host": "portal.coep.org.in",
  // "Origin": "http://portal.coep.org.in",
  // "Referer": "http://portal.coep.org.in/ReExamProcess",
  // "Sec-GPC": "1",
  // "Upgrade-Insecure-Requests": "1",
  // "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36"
};

// Request body
const raw = `__EVENTTARGET=&__EVENTARGUMENT=&__VIEWSTATE=1kUuM4pqqV2NzJ6z2L63szijxAKYg7Ogxe%2BUPgtn5%2Fj%2FyOGQRGHIVvMdxh%2F51%2BRE4TImUCykQn8EdDnD6SO%2BgGWYjtTQzeVAk9GLQl8zLcLuZMK9zAfFnU5Bfzi30ty%2FJAM%2BTc3rRueInTaQrFYph1Gpzhr7IM6jazq%2B6bGxKkHQgPDHVHg85jpA%2B1n7C8%2BqffB7oqxjCi6KQQb4syDGPg70f0EWIbCJhiHQUyputtfAQX88CCvMiP%2B90%2BzbEwoulS0f5nMC%2FbmCUevnAqIZ%2BG5%2BOjGqJ0Pxi%2FK2hpP59%2FsLd7lzgo1tQUaDxwD2IRvkGuulfrXFGAmtT1jm0GjhtKuMvkTnM9JNTQvgET5ONFekDeyBqu0tnwalt2rZpay0gEx6LbrMQ%2FXp%2BELT7sPeAIZSU%2Ft4svXitDcpuMjLJ4c%3D&__EVENTVALIDATION=3y8F9%2BfhSVvDAlGsJhv8exTPUk6vzalSLn%2BYzpiWWtzDNLbt6Bk4OD96gOrsx%2FiHr5SVYlZMV%2Fne3QVXKKOU7M8Bd50qZ4RteqiJvF5ze1Jk%2BQMVcZg5zzhIDa%2FROaD4QrFAYGc2FNHCw8VAZ1m3V7y%2Fx5RM6Nko9nMRmf42c6Abveu2rlq4epicBtmnKwhjGCUJ7paYOvMHRECoaDAFWKnSC9xw8z0XaYdWIxOEknXdXJNYXBW3Myux1IEWxv%2BS&hdnControlValue=%7B%22rptFileName%22%3A%22ProvisionalGradeResultForStudentCOEPTech%22%2C%22paramData%22%3A%7B%22StudentRegCode%22%3A%22${resultDetails.mis}%22%2C%22SemesterPID%22%3A%22${resultDetails.semester}%22%7D%2C%22dataKey%22%3A%22ShowProvisionalGradeSheetReport%22%2C%22reportConfig%22%3A%7B%22width%22%3A950%2C%22height%22%3A100%7D%2C%22datasetName%22%3A%22StudentResult%22%7D&ddlFileType=pdffile&btnDownloadFile=Download+File`;

// Request options
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
getDataByMIS((e) => console.log, requestOptions)

})