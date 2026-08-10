function TechBadge({ name }) {
    return (
        <span
            className="
                px-3
                py-1
                rounded-lg
                bg-slate-700
                text-slate-200
                text-sm
            "
        >
            {name}
        </span>
    );
}

export default TechBadge;