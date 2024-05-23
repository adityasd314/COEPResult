"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-white/40 p-4 w-screen lg:w-4/5 m-auto lg:left-0 lg:right-0 lg:mt-2 lg:rounded-3xl">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight bg-white/50 px-2 py-1 rounded-xl lg:ml-4">
                    <Link href={"/"}>COEP Result</Link>
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-slate-700 hover:border-white"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={
                    "w-full  lg:flex lg:items-center lg:w-auto" +
                    (navbarOpen ? " block" : " hidden")
                }
            >
                <div className="text-sm lg:flex-grow">
                    <Link
                        href="/notices"
                        className="bg-white/75 rounded-lg px-2 py-1 block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-slate-700 mr-4"
                    >
                        Notices 📝
                    </Link>
                    <Link
                        href="https://github.com/adityasd314/coepresult"
                        className="bg-white/75 rounded-lg px-2 py-1 block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-slate-700 mr-4"
                    >
                        Source Code 💻
                    </Link>
                    <Link
                        href="https://t.me/adityasd314"
                        className="bg-white/75 rounded-lg px-2 py-1 block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-slate-700 mr-4"
                    >
                        Contact 📱
                    </Link>
                    <Link
                        href="https://github.com/adityasd314/coepresult#readme"
                        className="bg-white/75 rounded-lg px-2 py-1 block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-slate-700 mr-4"
                    >
                        About ❓
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
