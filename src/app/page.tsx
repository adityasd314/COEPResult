"use client";
import { UserForm } from "@/components/Form";
import { Card } from "@/components/ui/card";
import { TableView } from "@/components/Table";
import { useState } from "react";
export default function Home() {
    const [data, setData] = useState<{ status: string; result: object }>({
        status: "loading",
        result: {},
    });
    return (
        <div>
            <main className="flex min-h-screen flex-col md:flex-row items-center justify-evenly">
                <Card id="form-card" className="p-12 m-12" style={{ background: "#fff3" }}>
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-4xl my-6 text-left">
                        COEP Result
                    </h1>
                    <UserForm data={data} setData={setData} />
                    <footer className="flex items-center justify-center w-full border-t mt-4 p-4 text-gray-700">
                        Powered to you by &nbsp;
                        <a
                            className="underline"
                            href="https://github.com/AdityaSD314"
                        >
                            AdityaSD314
                        </a>
                    </footer>
                </Card>
                {data.status === "ok" ? (
                    <Card
                        className="p-6 m-6 overflow-auto"
                        style={{ background: "#fff3" }}
                    >
                        <TableView data={data} />
                    </Card>
                ) : (
                    ""
                )}
            </main>
        </div>
    );
}

