function Footer() {
    return (
        <footer className="border-t border-slate-800 mt-32">

            <div className="max-w-7xl mx-auto py-10 px-6">

                <p className="text-center text-slate-500">

                    © {new Date().getFullYear()} Kgethego.

                    Built with React & Tailwind CSS.

                </p>

            </div>

        </footer>
    );
}

export default Footer;