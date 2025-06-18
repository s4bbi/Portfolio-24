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
        <div ref={containerRef} className="w-full px-6 md:px-14 text-white bg-blackD" id="works">
            <div className="py-8 lg:py-16 font-mL text-xs md:text-base">
                <p className="py-1">PROJECTS</p>
                <hr className="h-[1px] bg-white"/>                    
            </div>
            <p className="font-cdSB text-xl md:text-3xl lg:text-5xl text-white">&lt; WORKS &gt;</p>
            {projectData.map((project, index) => (
                <div key={project.id} className="flex justify-between py-4 lg:py-8 text-white gap-44 project-item">
                    <div className="font-mB hidden md:flex md:text-8xl lg:text-[208px] project-number">
                        <p>{`0${index + 1}.`}</p>
                    </div>
                    <div className="flex flex-col gap-5 sm:gap-10">
                        <Link to={project.link} target="_blank" rel="noopener noreferrer">
                            <img 
                                src={project.imgSrc} 
                                alt={`${project.title} Project Image`} 
                                className="project-image"
                            />
                        </Link>
                        <div className="flex flex-col sm:flex-row gap-5 sm:justify-between project-content">
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
