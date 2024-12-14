"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getTokens } from "@/app/actions/getTokens";
import { getResult } from "@/app/actions/getResult";
import "@/app/result/[mis]/page.css";

export default function Page({ params }: { params: { mis: string } }) {
    const [password, setPassword] = useState<string>("");
    const mis = params.mis;

    const [result, setResult] = useState<string>("");

    if (result == "") {
        return (
            <div className="w-screen flex items-center justify-center p-10">
                <Input
                    style={{ width: "300px" }}
                    type="password"
                    value={password}
                    placeholder="Enter your MIS password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    onClick={() => {
                        getTokens(mis, password).then((res) => {
                            if (res === undefined) {
                                return;
                            }

                            getResult(mis, res.session, res.token).then(
                                (res) => {
                                    setResult(res);
                                }
                            );
                        });
                    }}
                >
                    Submit
                </Button>
            </div>
        );
    }

    if (result === "") {
        return <h1>Loading...</h1>;
    }

    const table = {
        __html: result,
    };
    return <div dangerouslySetInnerHTML={table} className="p-16"></div>;
}
