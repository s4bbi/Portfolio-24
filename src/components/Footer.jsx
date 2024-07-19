import { socialLinks } from "../utils/socialLinks";
import { Link } from "react-router-dom";

const SocialLink = ({ href, imgSrc, label }) => (
    <Link to={href}>
        <section className="flex gap-2 items-center">
            <img className="w-10 md:w-12" src={imgSrc} alt={`${label} icon`} />
            <span className="text-lg md:text-xl">{label}</span>
        </section>
    </Link>
);

const Footer = () => {
    return (
        <div>
            <div className="h-full w-full bg-black text-white px-6 md:px-28 py-8 lg:p5-4 flex flex-col md:flex-row justify-between gap-4">
                <div className="flex flex-col gap-4 md:gap-6 font-mR">
                    <p className="text-2xl md:text-3xl font-mSB">Contact Info:</p>
                    <p className="text-lg md:text-xl">singhyashpreet22@gmail.com</p>
                    <p className="text-lg md:text-xl">+91 6398150951</p>
                </div>
                <div className="w-full md:w-5/12 text-left">
                    <p className="text-2xl md:text-3xl font-mSB">Virtual Realms</p>
                    <div className="flex flex-wrap gap-6 items-center pt-4 md:pt-6 font-mR">
                        {socialLinks.map((link) => (
                            <SocialLink key={link.label} {...link} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-black py-4 md:py-10 px-6 md:px-14 text-white">
                <p className="text-center text-sm md:text-base font-mL pb-2">Designed and Developed by: Yours Truly</p>
                <hr className="h-[2px] bg-white" />
            </div>
        </div>
    );
};

export default Footer;