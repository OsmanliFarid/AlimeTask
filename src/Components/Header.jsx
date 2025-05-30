import React from "react";
import Navbar from "./common/Navbar/Index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[url('/bg.png')] h-[100vh] w-full bg-cover bg-center">
        <Navbar />
        <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto px-4">
          <div className="mt-[80px]">
            <h1 className="text-[#ffe89e] text-[32px] sm:text-[40px] md:text-[60px] lg:text-[82px] font-[700]">
              Hello
            </h1>
            <h1 className="text-[#ffe89e] text-[32px] sm:text-[40px] md:text-[60px] lg:text-[82px] font-[700]">
              I'm Jackson
            </h1>
            <p className="text-white mb-[50px] max-w-full sm:max-w-[530px] text-[14px] sm:text-[15px] md:text-[17px]">
              I photograph very instinctively. I see how it is taken like that.
              I do not follow certain styles, philosophies or teachers.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 text-white">
              <Link
                to={"/"}
                className="border border-[#fc6060] px-[35px] h-[45px] flex justify-center items-center rounded-3xl transition-all duration-1000 hover:bg-[#fc6060] font-[700] text-[17px]"
              >
                Get a Quote
              </Link>
              <Link
                to={"mailto:hello.alime@gmail.com"}
                className="underline italic font-[700] text-[17px]"
              >
                hello.alime@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
