import React from 'react'
import yashpreet from "../assets/yashpreet.png"

const About = () => {
  return (
    <div className="w-full px-6 md:px-14 text-white bg-blackD pb-10">
        <div className="py-8 lg:py-16 font-mL text-xs md:text-base">
            <p className="py-1">ABOUT ME</p>
            <hr className="h-[1px] bg-white"/>                    
        </div>
        <p className="font-cdSB text-xl md:text-3xl lg:text-5xl text-white ">&lt; A  LITTLE  ABOUT  ME &gt;</p>
        <div className='py-10 flex items-center justify-center w-52 mx-auto'>
            <img src={yashpreet} alt="Yours Truly Image" />
        </div>
        <div className="px-6 md:px-14 flex flex-col items-center font-mR">
            <div className="text-white text-2xl md:text-3xl lg:text-4xl font-normal font-Matter">
                Hello! I'm <span className='font-mSB'> Yashpreet Singh</span>, a sophomore passionate about <span className='font-mSB'> web development </span> and <span className='font-mSB'> UI/UX design </span>.I love transforming ideas into <span className='font-mSB'> visually striking</span> and <span className='font-mSB'> user-friendly </span> digital experiences with a <span className='font-mSB'>minimalist touch</span>. 
                Join me on this creative journey as I explore the ever-evolving world of technology, bringing innovation and seamless design to life. Let's turn concepts into captivating and streamlined online realities together!
            </div>
      </div>
    </div>
  )
}

export default About