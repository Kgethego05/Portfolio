function SkillCard({
    title,
    skills
}) {
    return (

        <div
            className="
                bg-slate-900
                rounded-2xl
                border
                border-slate-800
                p-6
            "
        >

            <h3 className="text-xl font-semibold mb-5">
                {title}
            </h3>

            <ul className="space-y-3">

                {skills.map(skill => (

                    <li
                        key={skill}
                        className="text-slate-300"
                    >
                        • {skill}
                    </li>

                ))}

            </ul>

        </div>

    );
}

export default SkillCard;