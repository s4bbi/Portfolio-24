import { socialLinks } from "../utils/socialLinks";
import { Link } from "react-router-dom";

const SocialLink = ({ href, imgSrc, label }) => (
  <Link to={href} className="flex-shrink-0">
    <div className="flex gap-2 items-center hover:opacity-80 transition-opacity">
      <img className="w-10 md:w-12" src={imgSrc} alt={`${label} icon`} />
      <span className="text-lg md:text-xl">{label}</span>
    </div>
  </Link>
);

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-full px-6 md:px-14 xl:px-28 py-8 lg:py-16 flex flex-col md:flex-row justify-between gap-8 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-6 font-mR">
          <p className="text-2xl md:text-3xl font-mSR">Contact Info:</p>
          <p className="text-lg md:text-xl text-gray-400">singhyashpreet22@gmail.com</p>
          <p className="text-lg md:text-xl text-gray-400">+91 6398150951</p>
        </div>
        <div className="w-full md:w-6/12 lg:w-5/12">
          <p className="text-2xl md:text-3xl font-mR">Virtual Realms:</p>
          <div className="flex flex-wrap gap-4 md:gap-6 items-center pt-4 md:pt-6 font-mR text-gray-400">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black pb-4 md:pb-8 px-6 md:px-14 xl:px-28">
        <p className="text-center text-sm md:text-base font-mL pb-2">
          Designed and Developed by: Yours Truly
        </p>
        <hr className="h-[2px] bg-white" />
      </div>
    </div>
  );
};

export default Footer;
