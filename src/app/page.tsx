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
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
                COEP RESULT PORTAL that is faster and more reliable than MIS
                Portal
            </h1>
            <main className="flex min-h-screen flex-row items-center justify-evenly">
                <Card className="p-6 m-6">
                    <UserForm data={data} setData={setData} />
                </Card>
                {data.status === "ok" ? (
                    <Card className="p-6 m-6">
                        <TableView data={data} />
                    </Card>
                ) : (
                    ""
                )}
            </main>
        </div>
    );
}

