import { projectData } from "../utils/projectData";
import { Link } from "react-router-dom"; // Assuming you are using React Router

const Projects = () => {
    return (
        <div className="w-full px-6 md:px-14 text-white bg-blackD" id="works">
            <div className="py-8 lg:py-16 font-mL text-xs md:text-base">
                <p className="py-1">PROJECTS</p>
                <hr className="h-[1px] bg-white"/>                    
            </div>
            <p className="font-cdSB text-xl md:text-3xl lg:text-5xl text-white">&lt; WORKS &gt;</p>
            {projectData.map((project, index) => (
                <div key={project.id} className="flex justify-between py-4 lg:py-8 text-white gap-20">
                    <div className="font-mB hidden md:flex md:text-9xl lg:text-[208px]">
                        <p>{`0${index + 1}.`}</p>
                    </div>
                    <div className="flex flex-col gap-5 sm:gap-10">
                        <Link to={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.imgSrc} alt={`${project.title} Project Image`} />
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-5 sm:justify-between">
                            <p className="font-mSB text-2xl md:text-4xl">{project.title}</p>
                            <div className="flex gap-2 font-mL text-xs lg:text-base">
                                <button className="rounded-full border-white border-2 px-4 sm:px-6 py-2">DESIGN</button>
                                {project.hasDevelopment && (
                                    <button className="rounded-full border-white border-2 px-4 sm:px-6 py-2">DEVELOPMENT</button>
                                )}
                                <button className="rounded-full bg-white px-4 sm:px-6 text-blackD">{project.year}</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
