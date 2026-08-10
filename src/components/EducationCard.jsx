function EducationCard({
    qualification,
    institution,
    duration
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
                {qualification}
            </h3>

            <p className="text-blue-400 mt-3">
                {institution}
            </p>

            <p className="text-slate-500 mt-2">
                {duration}
            </p>

        </div>
    );
}

export default EducationCard;