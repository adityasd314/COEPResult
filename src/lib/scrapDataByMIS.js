const fs = require('fs');
const Cookie = require("cookie");
const mis = "612203036"
const password = "";
let AUTH_TOKEN = "" 




// Fetch the PDF and save it to a file
function getDataByMIS(callback,REQUEST_URL, requestOptions ) {
  fetch(REQUEST_URL, requestOptions)
    .then(response => response.text())
    .then(async blob => {
      console.log({ blob })
      fs.writeFileSync("response.html", blob, (err) => {
        if (err) {
          console.error("Error writing HTML file", err);
        } else {
          console.log("HTML file saved successfully");
        }
      }
      );
      return
    })
    .catch(error => console.error("Error fetching the PDF:", error));
}
module.exports.getDataByMIS = getDataByMIS
fetch("http://portal.coep.org.in/signup/SigninRegister", {
  headers: {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "ASP.NET_SessionId=",
    "Referer": "http://portalcoeptech.coep.org.in/SignUp",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  },
  body: `UserName=${mis}&Password=${password}`,
  method: "POST",
}).then(async login => {

const setCookieHeader = login.headers.get("Set-Cookie");
if (setCookieHeader) {
  cookies = Cookie.parse(setCookieHeader);
  if(AUTH_TOKEN == "")
  AUTH_TOKEN = cookies[".ASPXAUTH"];
} else {
  console.log("No Set-Cookie header found.");
}
console.log(AUTH_TOKEN)
const REQUEST_URL = "http://portal.coep.org.in/ReExamProcess/ReExamStudentDetail"
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
  mis: "642303005",
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
const raw = `StudentRegCode=`+resultDetails.mis;

// Request options
const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};
getDataByMIS((e) => console.log, REQUEST_URL, requestOptions)

})