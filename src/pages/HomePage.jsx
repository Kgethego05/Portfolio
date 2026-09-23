import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

import SkillCard from "../components/SkillCard";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import ContactCard from "../components/ContactCard";
import SocialCard from "../components/SocialCard";

import skills from "../data/skills";
import projects from "../data/projects";
import experience from "../data/experience";
import education from "../data/education";
import contact from "../data/contact";
import socials from "../data/socials";

import profile from "../assets/images/profile.jpg";
import cv from "../assets/documents/kgethego_CV.pdf";

function HomePage() {

    return (

        <>

            <Navbar />

            <main className="max-w-7xl mx-auto px-6">

                {/* ================= HERO ================= */}

                <section
                    className="
                        min-h-screen
                        flex
                        flex-col-reverse
                        lg:flex-row
                        items-center
                        justify-between
                        gap-16
                    "
                >

                    <div className="flex-1">

                        <p className="text-blue-400 font-semibold text-xl">

                            Hello, I'm

                        </p>

                        <h1 className="text-5xl md:text-7xl font-black mt-4">
                             
                              Kgethego Mabilo

                        <span className="block text-2xl md:text-4xl text-slate-300 mt-5 font-normal">
                           
                            Junior Full-Stack Developer

                        </span>

                        </h1>

                        <p
                            className="
                                text-slate-400
                                leading-8
                                mt-8
                                max-w-2xl
                            "
                        >

                            I build full-stack web applications, 
                            REST APIs and secure software solutions 
                            focused on practical software development.


                        </p>

                        <div className="flex flex-wrap gap-5 mt-10">

                            <a href="#projects">

                                <Button>

                                    View Projects

                                </Button>

                            </a>

                            <a
                                href={cv}
                                download
                            >

                                <Button
                                    className="
                                        bg-slate-700
                                        hover:bg-slate-600
                                    "
                                >

                                    Download CV

                                </Button>

                            </a>

                        </div>

                    </div>

                    <div className="flex-1 flex justify-center">

                        <img
                            src={profile}
                            alt="junior full-stack developer"
                            className="
                                w-60
                                h-60
                                md:w-76
                                md:h-76
                                rounded-full
                                object-cover
                                border-4
                                border-blue-500
                            "
                        />

                    </div>

                </section>

                {/* ================= ABOUT ================= */}

                <section
                    id="about"
                    className="py-22"
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mb-10
                        "
                    >

                        About Me

                    </h2>

                    <p
                        className="
                            text-slate-400
                            leading-9
                            max-w-4xl
                        "
                    >

                        I am a Computer Science graduate with a passion for building secure and scalable software solutions. 
                        I enjoy full-stack development, designing REST APIs, implementing authentication systems and developing 
                        AI-powered applications. I continuously learn new technologies and enjoy solving real-world problems through 
                        software development.


                    </p>

                </section>

                {/* ================= SKILLS ================= */}

                <section
                    id="skills"
                    className="py-22"
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mb-12
                        "
                    >

                        Skills

                    </h2>

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            xl:grid-cols-4
                            gap-8
                        "
                    >

                        {skills.map((skill) => (

                            <SkillCard

                                key={skill.title}

                                title={skill.title}

                                skills={skill.skills}

                            />

                        ))}

                    </div>

                </section>

                                {/* ================= PROJECTS ================= */}

                <section
                    id="projects"
                    className="py-22"
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mb-12
                        "
                    >

                        Featured Projects

                    </h2>

                    <div
                        className="
                            grid
                            lg:grid-cols-2
                            gap-10
                        "
                    >

                        {projects.map((project) => (

                            console.log(project.images),

                            <ProjectCard

                                key={project.title}

                                {...project}

                            />

                        ))}

                    </div>

                </section>

                {/* ================= EXPERIENCE ================= */}

                <section
                    id="experience"
                    className="py-22"
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mb-12
                        "
                    >

                        Experience

                    </h2>

                    <div className="space-y-8">

                        {experience.map((job) => (

                            <ExperienceCard

                                key={job.company}

                                {...job}

                            />

                        ))}

                    </div>

                </section>

                {/* ================= EDUCATION ================= */}

                <section
                    id="education"
                    className="py-22"
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mb-12
                        "
                    >

                        Education

                    </h2>

                    <div
                        className="
                            grid
                            md:grid-cols-2
                            gap-8
                        "
                    >

                        {education.map((item) => (

                            <EducationCard

                                key={item.qualification}

                                {...item}

                            />

                        ))}

                    </div>

                </section>

                                {/* ================= CONTACT ================= */}

                <section
                    id="contact"
                    className="py-22"
                >

                    <h2
                        className="
                            text-4xl
                            font-bold
                            mb-12
                        "
                    >
                        Contact
                    </h2>

                    <div
                        className="
                            grid
                            lg:grid-cols-2
                            gap-12
                        "
                    >

                        {/* Contact Information */}

                        <div className="space-y-6">

                            <ContactCard
                                title="Email"
                                value={contact.email}
                            />

                            <ContactCard
                                title="Phone"
                                value={contact.phone}
                            />

                            <ContactCard
                                title="Location"
                                value={contact.location}
                            />

                        </div>

                        {/* Social Links */}

                        <div className="space-y-6">

                            {socials.map((social) => (

                                <SocialCard
                                    key={social.title}
                                    {...social}
                                />

                            ))}

                        </div>

                    </div>

                </section>

            </main>

            <Footer />

        </>

    );

}

export default HomePage;