function ExperienceCard({
    company,
    position,
    duration,
    description
}) {
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

            <h3 className="text-2xl font-bold">
                {position}
            </h3>

            <h4 className="text-blue-400 mt-2">
                {company}
            </h4>

            <p className="text-slate-500 mt-2">
                {duration}
            </p>

            <p className="text-slate-400 leading-7 mt-6">
                {description}
            </p>

        </div>
    );
}

export default ExperienceCard;