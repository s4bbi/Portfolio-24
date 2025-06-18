import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Slide2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-text span", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='h-screen bg-blackD flex justify-center items-center'>
      <div className="px-6 md:px-14 flex flex-col items-center font-mR">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-normal font-Matter animate-text">
          <span>A </span>
          <span className="font-semibold">Versatile </span>
          <span className="font-semibold">Lad </span>
          <span>with</span>
          <span> a passion for </span>
          <span className="font-semibold">web development </span>
          <span>and </span>
          <span className="font-semibold">UI/UX</span>
          <span> design, combining technical expertise with a creative mindset to create engaging, </span>
          <span className="font-semibold">minimalistic</span>
          <span> and </span>
          <span className="font-semibold">user-friendly</span>
          <span> digital experiences.</span>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
