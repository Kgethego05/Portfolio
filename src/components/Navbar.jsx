import { useState } from "react";
import Button from "./Button";
import cv from "../assets/documents/kgethego_CV.pdf";

function Navbar() {

    const [open, setOpen] = useState(false);

    return (

        <header
            className="
                sticky
                top-0
                z-50
                bg-slate-950/90
                backdrop-blur
                border-b
                border-slate-800
            "
        >

            <nav
                className="
                    flex
                    items-center
                    justify-between
                    px-6
                    py-4
                "
            >

                {/* Logo */}
                <h1
                    className="
                        text-white
                        text-2xl
                        font-bold
                    "
                >
                    Kgethego
                </h1>


                {/* Desktop Links */}
                <div
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-8
                        text-slate-300
                    "
                >

                    <a href="#about" className="hover:text-blue-400">
                        About
                    </a>

                    <a href="#skills" className="hover:text-blue-400">
                        Skills
                    </a>

                    <a href="#projects" className="hover:text-blue-400">
                        Projects
                    </a>

                    <a href="#experience" className="hover:text-blue-400">
                        Experience
                    </a>

                    <a href="#education" className="hover:text-blue-400">
                        Education
                    </a>

                    <a href="#contact" className="hover:text-blue-400">
                        Contact
                    </a>

                </div>


                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="
                        md:hidden
                        text-white
                        text-3xl
                    "
                >
                    ☰
                </button>


            </nav>


            {/* Mobile Menu */}
            {open && (

                <div
                    className="
                        md:hidden
                        flex
                        flex-col
                        gap-5
                        px-6
                        pb-6
                        text-slate-300
                    "
                >

                    <a
                        href="#about"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-400"
                    >
                        About
                    </a>


                    <a
                        href="#skills"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-400"
                    >
                        Skills
                    </a>


                    <a
                        href="#projects"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-400"
                    >
                        Projects
                    </a>


                    <a
                        href="#experience"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-400"
                    >
                        Experience
                    </a>


                    <a
                        href="#education"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-400"
                    >
                        Education
                    </a>


                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="hover:text-blue-400"
                    >
                        Contact
                    </a>

                    <a
                        href={cv}
                        download
                    >
                    <Button>
                        Download CV
                    </Button>
                    </a>

                </div>

            )}

        </header>

    );
}

export default Navbar;