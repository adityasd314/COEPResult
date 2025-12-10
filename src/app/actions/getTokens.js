"use server";

export async function getTokens(mis, password) {
    console.log("mis: ", mis);
    console.log("password: ", password);
    let response = await fetch(process.env.SIGNIN_ENDPOINT, {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest",
        },
        cache: "no-store",   
        referrer: "http://portal.coep.org.in/SignUp",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: `UserName=${mis}&Password=${password}`,
        method: "POST",
        mode: "cors",
        credentials: "include",
    });

    // get Set-Cookie header from response
    const token = response.headers.get("Set-Cookie");
    console.log(token);

    if (token === null) {
        return;
    }

    response = await fetch(process.env.PORTAL_ENDPOINT, {
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9",
            "upgrade-insecure-requests": "1",
            cookie: String(token),
        },
        referrer: "http://portal.coep.org.in/SignUp",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "include",
    });
    let session = response.headers.get("Set-Cookie");
    if (session === null) {
        return;
    }

    console.log(session);

    return {
        token: token.split(";")[0].split("=")[1],
        session: session.split(";")[0].split("=")[1],
    };
}
