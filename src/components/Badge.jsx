function Badge({ children }) {
    return (
        <span
            className="
                inline-block
                px-3
                py-1
                rounded-full
                bg-blue-600
                text-white
                text-sm
            "
        >
            {children}
        </span>
    );
}

export default Badge;