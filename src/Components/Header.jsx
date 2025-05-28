import React from "react";
import Navbar from "./common/Navbar/Index";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[url('/bg.png')] h-[100vh] bg-cover bg-center">
        <Navbar />
        <div className="">
          <h1 className="text-[#ffe89e] text-[82px] font-[700]">Hello </h1>
          <h1 className="text-[#ffe89e] text-[82px] font-[700]">I'm Jackson</h1>
          <p className="text-white mb-[50px] max-w-[520px]">
            I photograph very instinctively. I see how it is taken like that. I
            do not follow certain styles, philosophies or teachers.
          </p>
          <div className="">
            <Link to={"#"}>Get a Quote</Link>
            <Link to={"mailto:hello.alime@gmail.com"}>
              hello.alime@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
