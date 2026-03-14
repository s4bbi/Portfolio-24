import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const welcomeTexts = [
  "Welcome","ਸਤ ਸ੍ਰੀ ਅਕਾਲ","स्वागत है","ようこそ","Bienvenue","Willkommen","환영합니다",
  "欢迎","добро пожаловать","Benvenuto","Bem-vindo","Bienvenido","Vitajte","Witamy",
  "Tervetuloa","Καλώς ήρθατε","Selamat datang","ยินดีต้อนรับ","Karibu","ברוך הבא",
  "مرحبا","Добре дошли","Dobrodošli","Velkomin","ආයුබෝවන්","સ્વાગત છે","வணக்கம்","স্বাগতম"
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLang, setCurrentLang] = useState(0);
  const loaderRef = useRef(null);
  const langIntervalRef = useRef(null);

  useEffect(() => {
    const totalDuration = 6000;
    const intervalDuration = 30;
    const increment = 100 / (totalDuration / intervalDuration);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          clearInterval(progressInterval);

          if (langIntervalRef.current) {
            clearInterval(langIntervalRef.current); // stop languages
          }

          return 100;
        }

        return newProgress;
      });
    }, intervalDuration);

    langIntervalRef.current = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % welcomeTexts.length);
    }, 200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(langIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const finishLoading = async () => {
        // wait for fonts
        await document.fonts.ready;

        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          onComplete: onComplete,
        });
      };

      finishLoading();
    }
  }, [progress, onComplete]);

  return (
    <div
      ref={loaderRef}
      className="font-cdB fixed top-0 left-0 w-full h-full bg-black text-white z-[9999] flex flex-col justify-center items-center"
    >
      <div className="relative w-40 h-40 flex justify-center items-center">
        <svg className="absolute w-full h-full">
          <circle cx="50%" cy="50%" r="70" stroke="#555" strokeWidth="8" fill="none" />
          <circle
            cx="50%"
            cy="50%"
            r="70"
            stroke="#fff"
            strokeWidth="8"
            fill="none"
            strokeDasharray={440}
            strokeDashoffset={440 - (progress / 100) * 440}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </svg>

        <div className="text-3xl font-cdB">{Math.floor(progress)}%</div>
      </div>

      <div className="mt-6 text-xl font-mono tracking-wide">
        {welcomeTexts[currentLang]}
      </div>
    </div>
  );
};

export default Loader;
