import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackToTopButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a href='#home'>
        <button 
            className={`relative flex items-center justify-center w-12 h-12 rounded-full bg-black border-none font-semibold shadow-lg cursor-pointer transition-all duration-300 overflow-hidden ${isHovered ? 'w-36 rounded-full bg-black' : ''}`}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            >
            <FaArrowUp 
                className={`w-3 transition-transform duration-300 transform ${isHovered ? 'translate-y-[-200%]' : 'translate-y-0'} text-white`} 
            />
            <span className={`absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-300 ${isHovered ? 'opacity-100 font-semibold text-sm' : 'opacity-0 text-sm'}`}>
                Back to Top
            </span>
        </button>
    </a>
  );
};

export default BackToTopButton;