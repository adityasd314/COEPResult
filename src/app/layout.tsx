import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "COEP Result",
    description:
        "This contains recent result database of COEP Tech university. Soon all the results will be available",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <script
                    async
                    src="https://us.umami.is/script.js"
                    data-website-id="82432fb0-2efd-45dd-88e6-073462df6396"
                ></script>
            </head>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Toaster />
            </body>
        </html>
    );
}
