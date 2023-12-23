import Image from "next/image";
import { Input } from "@/components/ui/input";
import { UserForm } from "@/components/Form";
import { Card } from "@/components/ui/card";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Card className="p-6">
                <UserForm />
            </Card>
        </main>
    );
}

