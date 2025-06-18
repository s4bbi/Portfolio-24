import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Slide2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const words = containerRef.current.querySelectorAll('.word');

    gsap.from(words, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
    });
  }, []);

  return (
    <div className='h-screen bg-blackD flex justify-center items-center'>
      <div className="px-6 md:px-14 flex flex-col items-center font-mR" ref={containerRef}>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-normal font-Matter">
          <span className="word">A </span>
          <span className="word font-semibold">Versatile </span>
          <span className="word font-semibold">Lad </span>
          <span className="word">with </span>
          <span className="word">a passion for </span>
          <span className="word font-semibold">web development </span>
          <span className="word">and </span>
          <span className="word font-semibold">UI/UX </span>
          <span className="word">design, combining technical expertise with a creative mindset to create engaging, </span>
          <span className="word font-semibold">minimalistic </span>
          <span className="word">and </span>
          <span className="word font-semibold">user-friendly </span>
          <span className="word">digital experiences.</span>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
