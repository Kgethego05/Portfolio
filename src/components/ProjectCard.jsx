import Badge from "./Badge";
import Button from "./Button";
import TechBadge from "./TechBadge";
import ImageCarousel from "./ImageCarousel";


function ProjectCard({
    images,
    title,
    description,
    frontend,
    backend,
    status,
    github,
    demo
}) {


    return (

        <div className="
            bg-slate-900
            rounded-2xl
            overflow-hidden
            border
            border-slate-800
            
        ">


            <div className="p-4">


                <ImageCarousel
                    images={images}
                />


                <div className="mb-5">
                    <Badge>
                        {status}
                    </Badge>
                </div>


                <h3 className="text-2xl font-bold mb-4">
                    {title}
                </h3>


                <p className="text-slate-400 leading-7 mb-4">
                    {description}
                </p>



                <div className="flex flex-wrap gap-2 mb-6">

                    <h4 className="text-slate-300 font-semibold mr-2">
                        Frontend:
                    </h4>


                    {frontend.map((tech)=>(

                        <TechBadge
                            key={tech}
                            name={tech}
                        />

                    ))}


                </div>



                <div className="flex flex-wrap gap-2 mb-6">

                    <h4 className="text-slate-300 font-semibold mr-2">
                        Backend:
                    </h4>


                    {backend.map((tech)=>(

                        <TechBadge
                            key={tech}
                            name={tech}
                        />

                    ))}


                </div>




                <div className="flex gap-4">


                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                    >

                        <Button>
                            GitHub
                        </Button>

                    </a>



                    {demo && (

                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                        >

                            <Button>
                                Live Demo
                            </Button>

                        </a>

                    )}


                </div>


            </div>


        </div>

    );

}


export default ProjectCard;