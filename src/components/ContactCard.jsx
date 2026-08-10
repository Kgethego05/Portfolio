function ContactCard({ title, value }) {
    return (
        <div
            className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
            "
        >
            <h3 className="text-blue-400 font-semibold mb-2">
                {title}
            </h3>

            <p className="text-slate-300">
                {value}
            </p>
        </div>
    );
}

export default ContactCard;