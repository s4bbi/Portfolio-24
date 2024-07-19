import React, { useState } from 'react';
import "../index.css";
import { GoArrowUpRight } from 'react-icons/go';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send('service_6otb37s', 'template_utmqi3p', formData, 'eLbK8Q5LoQhvi1aeg')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Your Message is delivered!', {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Slide, 
                    theme: "dark",
                    hideProgressBar: true
                  });
                  
                setFormData({ name: '', email: '', message: '' }); // Clear form
            }, (err) => {
                console.error('FAILED...', err);
                toast.error('Failed to send message. Please try again later.', {
                    position: "top-center",
                    autoClose: 3000,
                    transition: Slide, 
                    theme: "dark",
                    hideProgressBar: true
                });
            });
    };

    return (
        <div className="w-full px-6 md:px-14 text-blackD bg-white pb-10">
            <ToastContainer />
            <div className="py-8 lg:py-16 font-mL text-xs md:text-base">
                <p className="py-1">CONTACT</p>
                <hr className="h-[2px] bg-blackD" />
            </div>
            <div className="flex flex-col">
                <div className="w-full lg:w-9/12 mx-auto justify-center">
                    <div className="flex flex-col items-center justify-center gap-6">
                        <p className="text-base lg:text-xl font-cdR">GET IN TOUCH!</p>
                        <p className="text-5xl lg:text-9xl font-cdB">SAY HI!</p>
                        <p className="text-xs lg:text-2xl font-cdR text-center">
                            Let's collaborate to transform ideas into visually stunning and functionally robust digital solutions.
                        </p>
                    </div>
                    <div className="py-10 lg:py-20 w-full justify-center">
                        <form className="flex flex-col lg:flex-row font-mR flex-wrap gap-10 text-sm md:text-lg " onSubmit={handleSubmit}>
                            <div className="flex justify-between w-full gap-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full lg:w-96 border-b-2 border-black outline-none bg-white placeholder:text-black"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your E-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full lg:w-96 border-b-2 border-black outline-none bg-white placeholder:text-black"
                                />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full lg:w-7/12 outline-none h-52 border-b-2 border-black bg-white placeholder:text-black mt-4 lg:mt-0 resize-none overflow-hidden"
                                rows="4"
                            />
                        </form>
                        <button type="submit" className="bg-black text-white px-4 h-10 rounded-3xl mt-4 lg:mt-8" onClick={handleSubmit}>
                            <span className="flex gap-1 font-cdM justify-center items-center text-xs lg:text-base">
                                Ping Me! <GoArrowUpRight className="stroke-1" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;