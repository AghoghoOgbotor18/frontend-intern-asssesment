"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, User, Menu, X } from "lucide-react";
import Image from "next/image";

const navlinks = [
    { label: "About", hasDropdown: true, active: true },
    { label: "what we do", hasDropdown: true },
    { label: "Jobs", hasDropdown: true, gap: "gap-2.5" },
    { label: "Projects" },
    { label: "TG Academy" },
    { label: "Strategic Partnership" },
    { label: "Pricing" },
    { label: "Book a Consultation" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="container mx-auto w-full max-w-[1440px] bg-background">
            {/* first block */}
            <div className="flex h-[104px] items-center justify-between border-b border-surface px-16 py-6">
                <Link href="/" className="shrink-0">
                    <span className="block h-16 w-[165.71px] text-xl font-bold text-primary">
                        <Image src="/images/tobams-logo.png" alt="Tobams Group logo" width={166} height={64} className="h-16 w-auto" />
                    </span>
                </Link>

                <div className="hidden items-center gap-6 lg:flex">
                    <button className="flex h-12 items-center gap-3 rounded border border-primary bg-primary px-4 py-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface">
                            <User className="h-5 w-5 text-primary" />
                        </span>
                        <span className="flex items-center gap-1 text-white">
                            <span className="text-lg font-semibold leading-[1.5]">Account</span>
                            <ChevronDown className="h-5 w-5" />
                        </span>
                    </button>

                    <button className="flex h-12 items-center gap-2.5 rounded bg-accent px-5 py-[10.5px] text-white">
                        <span className="flex items-center gap-2 text-lg font-semibold leading-[1.5]">
                            Take Assessments
                            <ArrowRight className="h-[18px] w-[18px]" />
                        </span>
                    </button>
                </div>

                {/* mobile menu */}
                <button type="button" onClick={() => setMenuOpen((prev) => !prev)} className="lg:hidden bg-[#151515] rounded-md text-white p-2">
                    {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
            </div>

            {/* next block contains nav links, desktop only because Figma doesn't give us a mobile frame for this so the collapsed version below is my own decision */}
            <nav className="lg:flex justify-center hidden px-16 py-5 ">
                <div className="flex items-center gap-8">
                    {navlinks.map((link) =>
                        link.active ? (
                            <a
                                key={link.label}
                                href="#"
                                className="flex items-center border-b border-primary pb-[2px] text-lg font-semibold leading-[1.5] text-primary"
                            >
                                {link.label}
                                {link.hasDropdown && <ChevronDown className="h-5 w-5" />}
                            </a>
                        ) : (
                            <a
                                key={link.label}
                                href="#"
                                className={`flex items-center text-lg leading-[1.5] text-[#151515] hover:text-primary ${link.gap || ""}`}
                            >
                                {link.label}
                                {link.hasDropdown && <ChevronDown className="h-5 w-5" />}
                            </a>
                        )
                    )}
                </div>
            </nav>

            {/* mobile view */}
            {menuOpen && (
                <div className="flex flex-col gap-4 border-t border-surface px-6 py-6 lg:hidden">
                {navlinks.map((link) =>
                    link.active ? (
                        <a
                            key={link.label}
                            href="#"
                            className="flex items-center border-b border-primary pb-[2px] text-lg font-semibold leading-[1.5] text-primary"
                        >
                            {link.label}
                            {link.hasDropdown && <ChevronDown className="h-5 w-5" />}
                        </a>
                    ) : (
                        <a
                            key={link.label}
                            href="#"
                            className={`flex items-center text-lg leading-[1.5] text-[#151515] hover:text-primary ${link.gap || ""}`}
                        >
                            {link.label}
                            {link.hasDropdown && <ChevronDown className="h-5 w-5" />}
                        </a>
                    )
                )}

                <button className="flex items-center justify-center gap-3 rounded border border-primary bg-primary px-4 py-2 text-white">
                    <User className="h-5 w-5" />
                    Account
                </button>
                <button className="flex items-center justify-center gap-2 rounded bg-accent px-5 py-3 text-white">
                    Take Assessments
                </button>
                </div>
            )}
        </header>
    );
}
