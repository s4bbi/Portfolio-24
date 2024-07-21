import React, { useState, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sound from "../assets/sound/aruarianDance.wav"

const Hero = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [audio, setAudio] = useState(null);

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

  // gsap.to(".name", {
  //   duration:5,
  //   rotation: 360,
  //   scale:1,
  //   scrollTrigger: {
  //       trigger: ".name",
  //       markers: true,
  //       scrub: true
  //   }
  // });


  return (
    <div className="relative flex flex-col justify-center items-center mx-auto gap-10 h-screen bg-white" id='home'>
      <div className="flex gap-2 font-cdL text-base md:text-lg justify-center tracking-[4px] md:tracking-[5.32px]">
        <p className='name'>YASHPREET SINGH</p>
      </div>
      <div className="flex flex-col md:flex-row font-cdM text-3xl md:text-6xl gap-2 md:gap-5 justify-center items-center text-center">
        <p>&lt; Web Developer /&gt;</p>
        <p className="hidden md:inline">•</p>
        <p className='flex gap-4'>UI/UX <span className="font-wY text-4xl md:text-7xl bg-gradient-to-r from-[#22054F] via-[#9065D1] to-[#5FFBF1] text-transparent bg-clip-text">
        Designer </span></p>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 px-6 flex justify-between items-center w-full">
        <p className="font-mL origin-top-left -rotate-90">
          <span className="text-[#AAAAAA] font-mR">S4BBI</span>
        </p>
        <p className="font-mSB origin-top-right rotate-90">
          <span className="text-[#AAAAAA]">SOUND</span>{" "}
          <button id="soundButton" onClick={toggleSound} className='text-[#3A3733]'>
            {isSoundOn ? "ON" : "OFF"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
