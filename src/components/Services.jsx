const Services = () => {
    return (
        <div className="w-full px-6 md:px-14 text-blackL">
            <div className="py-8 lg:py-16 font-mL">
                <p>WHAT DO I DO?</p>
                <hr className="h-[2px] bg-black"/>                    
            </div>
            <p className="font-cdSB text-xl md:text-3xl lg:text-5xl text-blackD">&lt; SERVICES &gt;</p>
            <div className="font-mB text-5xl md:text-7xl lg:text-9xl py-4 lg:py-8 flex flex-col gap-4">
                <p>UI/UX DESIGN</p>
                <p className="text-right">DEVELOPMENT</p>
                <p>SEO</p>
                <p className="text-right">PROTOTYPING</p>
                <p>WIREFRAMING</p>
                <p className="text-right">GRAPHIC DESIGN</p>
            </div>
        </div>
    );
}

export default Services;
