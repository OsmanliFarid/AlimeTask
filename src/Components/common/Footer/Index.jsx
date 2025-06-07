import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
  const newArr = [
    {
      id: 1,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/12.jpg.webp",
    },
    {
      id: 2,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/13.jpg.webp",
    },
    {
      id: 3,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/14.jpg.webp",
    },
    {
      id: 4,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/15.jpg.webp",
    },
    {
      id: 5,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/16.jpg.webp",
    },
    {
      id: 6,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/11.jpg.webp",
    },
  ];
  return (
    <>
      <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto">
        <div className="text-center mt-[120px]">
          <h1 className="text-4xl font-bold">Follow Instagram</h1>
          <p className="mt-5">@Alime_photographer</p>
        </div>
      </div>
      <div className="">
        <div className="flex mt-7 mb-[30px]">
          {newArr.map(({ id, img }) => {
            return (
              <>
                <div className="w-[16.66%] h-[211px]">
                  <img key={id} src={img} alt="" />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto">
        <div className="grid grid-cols-[600px_auto_auto] items-center h-[80px] pt-3">
          <div className="flex items-center pt-1">
            <h1>
              Copyright ©2025 All rights reserved | This template is made with
            </h1>
            <h1>
              <CiHeart />
            </h1>
            <h1>
              by <span className="text-[#fc6060]">Colorlib</span>
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold">Alime</h1>
            <h1 className="text-[#fc6060] text-4xl mt-[-10px]">.</h1>
          </div>
          <div className="flex items-center gap-3 justify-center text-md">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaPinterestP />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
