import React from "react";
import Navbar from "./common/Navbar/Index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[url('/bg.png')] h-[100vh] bg-cover bg-center">
        <Navbar />
        <div className="max-w-[75vw] m-[auto]">
          <div className="mt-[80px]">
            <h1 className="text-[#ffe89e] text-[82px] font-[700]">Hello </h1>
            <h1 className="text-[#ffe89e] text-[82px] font-[700]">
              I'm Jackson
            </h1>
            <p className="text-white mb-[50px] max-w-[530px] text-[17px]">
              I photograph very instinctively. I see how it is taken like that.
              I do not follow certain styles, philosophies or teachers.
            </p>
            <div className="flex items-center gap-10 text-white">
              <Link
                to={"/"}
                className="border border-[#fc6060] p-[0px_35px] h-[45px] flex justify-center items-center rounded-3xl transition-all duration-1000 hover:bg-[#fc6060] font-[700] text-[17px]"
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
