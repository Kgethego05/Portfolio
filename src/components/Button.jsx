function Button({
    children,
    type = "button",
    onClick,
    className = "",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                px-6
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
                duration-300
                text-white
                font-medium
                ${className}
            `}
        >
            {children}
        </button>
    );
}

export default Button;