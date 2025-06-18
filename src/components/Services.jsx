import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Animate each service line
            gsap.utils.toArray(".service-item").forEach((el, index) => {
                gsap.fromTo(el, 
                    { 
                        opacity: 0, 
                        x: index % 2 === 0 ? -100 : 100 
                    }, 
                    { 
                        opacity: 1, 
                        x: 0, 
                        duration: 1.5, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            end: "bottom 20%",
                            scrub: true,  // reversible scroll animation
                        }
                    }
                );
            });

            // Animate the heading
            gsap.from(".services-heading", {
                opacity: 0,
                y: 50,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full px-6 md:px-14 text-blackL bg-white pb-6" id="services">
            <div className="py-8 lg:py-16 font-mL text-xs md:text-base">
                <p className="py-1">WHAT DO I DO?</p>
                <hr className="h-[2px] bg-blackL"/>                    
            </div>
            <p className="font-cdSB text-xl md:text-3xl lg:text-5xl text-blackD services-heading">&lt; SERVICES &gt;</p>
            <div className="font-mB text-[32px] md:text-7xl lg:text-9xl py-4 lg:py-8 flex flex-col gap-4">
                <p className="service-item">UI/UX DESIGN</p>
                <p className="service-item text-right">DEVELOPMENT</p>
                <p className="service-item">SEO</p>
                <p className="service-item text-right">PROTOTYPING</p>
                <p className="service-item">WIREFRAMING</p>
                <p className="service-item text-right">GRAPHIC DESIGN</p>
            </div>
        </div>
    );
}

export default Services;
