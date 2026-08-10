import { FaArrowRight } from "react-icons/fa";

function SocialCard({ title, link }) {

    return (

        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                flex
                items-center
                justify-between
                hover:border-blue-500
                transition
            "
        >

            <span>{title}</span>

            <FaArrowRight />

        </a>

    );

}

export default SocialCard;