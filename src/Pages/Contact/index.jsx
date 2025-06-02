import React from "react";
import Navbar from "../../Components/common/Navbar/Index";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="bg-[url('/bg.png')] h-[50.5vh] bg-cover bg-center">
        <Navbar />
        <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto">
          <h1 className="font-bold text-white text-4xl text-center mt-[110px]">
            Contact
          </h1>
        </div>
      </div>
      <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-[120px]">
          <h1 className="text-6xl font-bold w-[540px] text-center md:text-start leading-20">
            Let’s Work Together
          </h1>
          <div className="">
            <div className="flex flex-wrap mt-8 justify-center md:justify-start md:flex-nowrap gap-5">
              <div className="">
                <h1>Email</h1>
                <Link to={"mailto:info.deercreative@gmail.com"}>
                  info.deercreative@gmail.com
                </Link>
              </div>
              <div className="">
                <h1>Visit Us</h1>
                <Link to={"#"}>60-49 Road 11378 New York</Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="mt-10 flex justify-center flex-col">
                <h1>Call Us</h1>
                <Link to={"#"}>+6511.188.888</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <iframe
            className="mt-[100px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17397.279223753925!2d24.129073!3d56.971758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C%20Latvia!5e0!3m2!1sen!2sus!4v1748863713832!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
