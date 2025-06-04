import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sound from "../assets/sound/aruarianDance.wav";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [audio, setAudio] = useState(null);
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const audioFile = new Audio(sound);
    audioFile.loop = true;
    setAudio(audioFile);
  }, []);

  useEffect(() => {
    if (audio) {
      if (isSoundOn) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isSoundOn, audio]);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  useEffect(() => {
    // Fade-in hero section
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });

    // Subtle fade & shift on scroll for name
    gsap.fromTo(
      nameRef.current,
      { y: 0, opacity: 1 },
      {
        y: -20,
        opacity: 0.5,
        scrollTrigger: {
          trigger: nameRef.current,
          start: "top center",
          end: "top 100px",
          scrub: true,
          // markers: true,
        },
      }
    );

    // Intro animation
    gsap.from(introRef.current, {
      opacity: 0,
      y: 30,
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      className="relative flex flex-col justify-center items-center mx-auto gap-10 h-screen bg-white"
      id="home"
      ref={heroRef}
    >
      <div
        ref={nameRef}
        className="flex gap-2 font-cdL text-base md:text-lg justify-center tracking-[4px] md:tracking-[5.32px]"
      >
        <p className="name">YASHPREET SINGH</p>
      </div>

      <div
        ref={introRef}
        className="flex flex-col md:flex-row font-cdM text-3xl md:text-6xl gap-2 md:gap-5 justify-center items-center text-center"
      >
        <p>&lt; Web Developer /&gt;</p>
        <p className="hidden md:inline">•</p>
        <p className="flex gap-4">
          UI/UX{" "}
          <span className="font-wY text-4xl md:text-7xl bg-gradient-to-r from-[#22054F] via-[#9065D1] to-[#5FFBF1] text-transparent bg-clip-text">
            Designer
          </span>
        </p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 px-6 flex justify-between items-center w-full">
        <p className="font-mL origin-top-left -rotate-90">
          <span className="text-[#AAAAAA] font-mR">S4BBI</span>
        </p>
        <p className="font-mSB origin-top-right rotate-90">
          <span className="text-[#AAAAAA]">SOUND</span>{" "}
          <button id="soundButton" onClick={toggleSound} className="text-[#3A3733]">
            {isSoundOn ? "ON" : "OFF"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
