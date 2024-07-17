import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import icon from '../assets/icon.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { GoArrowUpRight } from 'react-icons/go';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="text-lg text-black mx-2 py-3 flex justify-between items-center lg:mx-6">
        <div>
          <img src={logo} alt="Logo" className="w-12 lg:w-16" />
        </div>
        <div className="flex gap-8 lg:gap-24 justify-between items-center pr-1">
          <button className="font-mL bg-blackL p-1 rounded-3xl w-24 text-base text-white">
            Let's Talk
          </button>
          <img
            src={icon}
            alt="Icon"
            className="w-8 h-4 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 lg:w-[575px] bg-black shadow-[0_13px_14px_rgba(0,0,0,0.25)] transition-transform duration-1000 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-8">
          <AiOutlineClose
            className="text-white cursor-pointer"
            size={24}
            onClick={toggleSidebar}
          />
        </div>
        <div className="h-full flex flex-col justify-evenly z-50">
          <nav className="relative flex flex-col justify-center gap-y-3 px-6 uppercase text-white font-cdSB">
            {['Home', 'Services', 'Works', 'About', 'Contact'].map((item, index) => (
              <div key={index} className="group relative flex w-fit cursor-pointer items-center">
                <div className="w-fit overflow-y-clip">
                  <div style={{ transform: 'none' }}>
                    <a
                      className="inline-block transition-transform duration-700 ease-expo group-hover:translate-x-7 text-4xl sm:text-5xl"
                      href={`/`}
                    >
                      {item}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </nav>
          <div className="flex flex-col gap-y-6 p-6 text-white">
            <div className="mt-auto">
              <span className="text-left text-base-small font-bold text-secondary-50 2xl:text-base font-mSB">
                EMAIL ADDRESS
              </span>
              <a
                className="link-text group relative block h-fit overflow-hidden font-medium uppercase font-mL"
                href="mailto:singhyashpreet22@gmail.com"
              >
                <span className="link1 hover:translate-x-7">
                  singhyashpreet22@gmail.com
                </span>
              </a>
            </div>
            <ul className="flex flex-wrap justify-start gap-x-2 text-white font-mL text-sm md:text-lg">
              {[
                { name: 'Github', url: 'https://www.github.com/s4bbi/' },
                { name: 'Linkedin', url: 'https://www.linkedin.com/in/s4bbi/' },
                { name: 'Instagram', url: 'https://www.instagram.com/singhyashpreet45/' },
              ].map((item, index) => (
                <div key={index}>
                  <a
                    className="group pointer-events-auto relative flex h-fit w-fit transform-none items-center justify-center overflow-hidden rounded-full bg-secondary-300 text-base-small uppercase leading-none tracking-base text-accent-200 border border-secondary-100 px-3 py-1.5 font-medium"
                    target="_blank"
                    href={item.url}
                  >
                    <span className="absolute z-10 block overflow-hidden text-center">
                      <span className="block h-full w-full translate-y-full bg-accent-600 transition-all duration-500 ease-expo sm:group-hover:translate-y-0 sm:group-hover:rounded-none">
                        <span className="flex gap-1">
                          Visit <GoArrowUpRight />
                        </span>
                      </span>
                    </span>
                    <span className="relative z-20 block overflow-hidden transition-all">
                      <span className="block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:ease-expo after:content-[attr(after)] sm:group-hover:after:-translate-y-[100%]">
                        <span className="flex transition-all duration-500 ease-expo sm:group-hover:-translate-y-full">
                          {item.name}
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
