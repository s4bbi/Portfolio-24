import React, { useEffect, useRef } from 'react';
import yashpreet from "../assets/yashpreet.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(".about-heading", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate image (slide up from bottom)
      gsap.from(".about-image", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true
        }
      });

      // Split text into words for fancy staggered reveal
      const split = new SplitType('.about-text', { types: 'words' });

      gsap.from(split.words, {
        opacity: 0,
        y: 40,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full px-6 md:px-14 text-white bg-blackD pb-10" id='about'>
      <div className="py-8 lg:py-16 font-mL text-xs md:text-base">
        <p className="py-1">ABOUT ME</p>
        <hr className="h-[1px] bg-white"/>                    
      </div>
      <p className="font-cdSB text-xl md:text-3xl lg:text-5xl text-white about-heading">&lt; A LITTLE ABOUT ME &gt;</p>

      <div className='py-10 flex items-center justify-center w-52 md:w-64 lg:w-80 mx-auto'>
        <img src={yashpreet} alt="Yours Truly" className="about-image" />
      </div>

      <div className="flex flex-col items-center font-mR pb-4 lg:pb-10">
        <div className="text-white text-2xl md:text-3xl lg:text-4xl font-normal font-Matter about-text">
          Hello! I'm <span className='font-mSB'> Yashpreet Singh</span>, a sophomore passionate about <span className='font-mSB'> web development </span> and <span className='font-mSB'> UI/UX design</span>. I love transforming ideas into <span className='font-mSB'> visually striking</span> and <span className='font-mSB'> user-friendly </span> digital experiences with a <span className='font-mSB'>minimalist touch</span>. 
          Join me on this creative journey as I explore the ever-evolving world of technology, bringing innovation and seamless design to life. Let's turn concepts into captivating and streamlined online realities together!
        </div>
      </div>
    </div>
  );
}

export default About;
