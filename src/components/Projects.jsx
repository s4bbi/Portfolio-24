import React, { useEffect, useRef } from 'react';
import { projectData } from "../utils/projectData";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each project item
            gsap.utils.toArray(".project-item").forEach((el) => {
                const number = el.querySelector(".project-number");
                const image = el.querySelector(".project-image");
                const content = el.querySelector(".project-content");

                // Animate number
                gsap.fromTo(number, 
                    { opacity: 0, y: 50 }, 
                    { opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
                      scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 20%",
                        scrub: true
                      }
                    }
                );

                // Animate image
                gsap.fromTo(image, 
                    { opacity: 0, scale: 0.95 }, 
                    { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out",
                      scrollTrigger: {
                        trigger: el,
                        start: "top 75%",
                        end: "bottom 20%",
                        scrub: true
                      }
                    }
                );

                // Animate content (title + buttons)
                gsap.fromTo(content, 
                    { opacity: 0, y: 50 }, 
                    { opacity: 1, y: 0, duration: 1.4, ease: "power3.out",
                      scrollTrigger: {
                        trigger: el,
                        start: "top 70%",
                        end: "bottom 20%",
                        scrub: true
                      }
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full px-6 md:px-14 text-white bg-blackD pb-6" id="works">
            <div className="py-8 lg:py-16 font-mL text-xs md:text-base">
                <p className="py-1">PROJECTS</p>
                <hr className="h-[1px] bg-white"/>                    
            </div>
            <p className="font-cdSB text-xl md:text-3xl lg:text-5xl text-white">&lt; WORKS &gt;</p>
            {projectData.map((project, index) => (
                <div key={project.id} className="flex justify-between py-4 lg:py-8 text-white gap-12 md:gap-20 project-item">
                    <div className="font-mB hidden md:flex md:text-8xl lg:text-[208px] project-number">
                        <p>{`0${index + 1}.`}</p>
                    </div>
                    <div className="flex flex-col gap-5 sm:gap-10 w-full max-w-2xl">
                        <Link to={project.link} target="_blank" rel="noopener noreferrer">
                            <div className="w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg bg-[##141413]]">
                                <img
                                    src={project.imgSrc}
                                    alt={`${project.title} Project Image`}
                                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 project-image"
                                />
                            </div>
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-5 sm:justify-between project-content">
                            <p className="font-mSB text-2xl md:text-4xl">{project.title}</p>
                            <div className="flex flex-wrap gap-2 font-mL text-xs lg:text-base items-center">
                                <button className="rounded-full border-white border-2 px-4 sm:px-6 py-2 transition-colors duration-200 hover:bg-white hover:text-blackD">
                                    DESIGN
                                </button>
                                {project.hasDevelopment && (
                                    <button className="rounded-full border-white border-2 px-4 sm:px-6 py-2 transition-colors duration-200 hover:bg-white hover:text-blackD">
                                        DEVELOPMENT
                                    </button>
                                )}
                                <button className="rounded-full bg-white px-4 sm:px-6 py-2 text-blackD font-bold">
                                    {project.year}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
