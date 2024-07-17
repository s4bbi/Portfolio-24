import React, { useState, useEffect } from 'react';
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

  return (
    <div className="relative flex flex-col justify-center items-center mx-auto gap-10 h-screen bg-white">
      <div className="flex gap-2 font-cdL text-base md:text-lg justify-center tracking-[4px] md:tracking-[5.32px]">
        <p>YASHPREET SINGH</p>
      </div>
      <div className="flex flex-col md:flex-row font-cdM text-3xl md:text-6xl gap-2 md:gap-5 justify-center items-center text-center">
        <p>&lt; Web Developer /&gt;</p>
        <p className="hidden md:inline">•</p>
        <p className='flex gap-2'>UI/UX <span className="font-wY text-4xl md:text-7xl bg-gradient-to-r from-[#95FFC0] via-[#FBD786] to-[#F7797D] text-transparent bg-clip-text">
        Designer </span></p>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 px-6 flex justify-between items-center w-full">
        <p className="font-mL origin-top-left -rotate-90">
          <span className="text-[#AAAAAA] font-mSB">S4BBI</span>
        </p>
        <p className="font-mSB origin-top-right rotate-90">
          <span className="text-[#AAAAAA]">SOUND</span>{" "}
          <button id="soundButton" onClick={toggleSound}>
            {isSoundOn ? "ON" : "OFF"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
