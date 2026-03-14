import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const welcomeTexts = [
  "Welcome",
  "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
  "स्वागत है",
  "ようこそ",
  "Bienvenue",
  "Willkommen",
  "환영합니다",
  "欢迎",
  "добро пожаловать",
  "Benvenuto",
  "Bem-vindo",
  "Bienvenido",
  "Witamy",
  "Tervetuloa",
  "Καλώς ήρθατε",
  "Selamat datang",
  "ยินดีต้อนรับ",
  "Karibu",
  "مرحبا",
  "Velkommen",
  "வணக்கம்",
  "স্বাগতম",
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentLang, setCurrentLang] = useState(0);

  const loaderRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const obj = { value: 0 };

    gsap.to(obj, {
      value: 100,
      duration: 6,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.floor(obj.value));
      },
      onComplete: () => {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          onComplete: onComplete,
        });
      },
    });

    const langInterval = setInterval(() => {
      gsap.fromTo(
        textRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 }
      );

      setCurrentLang((prev) => (prev + 1) % welcomeTexts.length);
    }, 250);

    return () => clearInterval(langInterval);
  }, [onComplete]);

  const circumference = 2 * Math.PI * 70;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-[9999]"
    >
      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full"></div>

      {/* Progress Circle */}
      <div className="relative w-44 h-44 flex items-center justify-center">
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="70"
            stroke="#222"
            strokeWidth="6"
            fill="none"
          />

          <circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r="70"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.15s ease" }}
          />

          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>

        <div className="text-4xl font-semibold tracking-wide">
          {progress}%
        </div>
      </div>

      {/* Language Text */}
      <div
        ref={textRef}
        className="mt-8 text-lg tracking-widest opacity-80 font-light"
      >
        {welcomeTexts[currentLang]}
      </div>
    </div>
  );
};

export default Loader;
