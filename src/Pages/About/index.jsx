import React from "react";
import Navbar from "../../Components/common/Navbar/Index";
import { Link } from "react-router-dom";
import { TbMovie } from "react-icons/tb";
import { FaPencilAlt, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const About = () => {
  return (
    <>
      <div className="bg-[url('/bg.png')] h-[50.5vh] bg-cover bg-center">
        <Navbar />
      </div>

      <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-[120px] gap-7">
          <div>
            <h1 className="text-[36px] mb-[5px] font-[700]">
              We Live For Passion
            </h1>
            <p className="w-20 bg-red-500 h-1 mb-7"></p>
            <p className="max-w-[540px] text-[#636363]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo
              enim ipsam et dolore magnam aliquam quaerat voluptatem. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam
              et dolore magnam aliquam quaerat voluptatem.
            </p>
            <Link className="p-[8px_35px] hover:bg-[#fc6060] duration-700 mt-10 font-[600] inline-block border-[#fc6060] border-2 rounded-[30px]">
              Contact Us
            </Link>
          </div>

          <div>
            <img
              src="https://preview.colorlib.com/theme/alime/img/bg-img/17.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f7f7f7]">
        <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto">
          <h1 className="text-[#252525] font-bold text-[36px] text-center pt-[120px] pb-[80px]">
            Why Choose Us
          </h1>
          <div className="pb-[90px] grid grid-cols-1 justify-items-center md:justify-items-start gap-y-5 md:gap-y-0 md:grid-cols-3">
            <motion.div
              className="group w-[350px] rounded-2xl h-[277px] bg-white hover:bg-[#fc6060] text-center transition-all duration-300 cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={cardVariants}
            >
              <div className="bg-[#fc6060] group-hover:bg-black group-hover:text-white transition-all duration-300 w-[70px] m-auto h-[70px] rounded-full flex justify-center items-center">
                <TbMovie className="text-[40px]" />
              </div>
              <h1 className="text-[#252525] group-hover:text-white text-[22px] mt-[30px] mb-[20px] transition-all duration-300">
                High Quality Images
              </h1>
              <p className="text-[#636363] group-hover:text-white transition-all duration-300 px-3">
                Lorem ipsum dolor sit amet, consectetur isicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                elit, sed do eiusmod te
              </p>
            </motion.div>

            <motion.div
              className="group w-[350px] rounded-2xl h-[277px] bg-white hover:bg-[#fc6060] text-center transition-all duration-300 cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={cardVariants}
            >
              <div className="bg-[#fc6060] group-hover:bg-black group-hover:text-white transition-all duration-300 w-[70px] m-auto h-[70px] rounded-full flex justify-center items-center">
                <FaPencilAlt className="text-[40px]" />
              </div>
              <h1 className="text-[#252525] group-hover:text-white text-[22px] mt-[30px] mb-[20px] transition-all duration-300">
                Abundant Experience
              </h1>
              <p className="text-[#636363] group-hover:text-white transition-all duration-300 px-3">
                Lorem ipsum dolor sit amet, consectetur isicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                elit, sed do eiusmod te
              </p>
            </motion.div>

            <motion.div
              className="group w-[350px] rounded-2xl h-[277px] bg-white hover:bg-[#fc6060] text-center transition-all duration-300 cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
              variants={cardVariants}
            >
              <div className="bg-[#fc6060] group-hover:bg-black group-hover:text-white transition-all duration-300 w-[70px] m-auto h-[70px] rounded-full flex justify-center items-center">
                <FaCamera className="text-[40px]" />
              </div>
              <h1 className="text-[#252525] group-hover:text-white text-[22px] mt-[30px] mb-[20px] transition-all duration-300">
                Modern Equipments
              </h1>
              <p className="text-[#636363] group-hover:text-white transition-all duration-300 px-3">
                Lorem ipsum dolor sit amet, consectetur isicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                elit, sed do eiusmod te
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto">
        <h1 className="font-bold text-4xl text-center mt-28">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-[30px] gap-y-4 md:gap-y-0 justify-items-center md:justify-items-start">
          {/* Team member */}
          <motion.div
            className="w-[255px] h-[389px] shadow-xl bg-white group cursor-pointer 
                          hover:bg-[#fc6060] transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="flex justify-center pt-8">
              <img
                className="rounded-[50%] transition-transform duration-500 group-hover:rotate-[30deg]"
                src="https://preview.colorlib.com/theme/alime/img/bg-img/19.jpg.webp"
                alt="Andrew Dean"
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-[24px] font-bold group-hover:text-white transition-colors duration-300">
                Andrew Dean
              </h1>
              <p className="mt-[10px] text-[#fc6060] group-hover:text-white transition-colors duration-300">
                Photographer
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-[255px] h-[389px] shadow-xl bg-white group cursor-pointer 
                          hover:bg-[#fc6060] transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="flex justify-center pt-8">
              <img
                className="rounded-[50%] transition-transform duration-500 group-hover:rotate-[30deg]"
                src="https://preview.colorlib.com/theme/alime/img/bg-img/20.jpg.webp"
                alt="Tommy Kim"
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-[24px] font-bold group-hover:text-white transition-colors duration-300">
                Tommy Kim
              </h1>
              <p className="mt-[10px] text-[#fc6060] group-hover:text-white transition-colors duration-300">
                Photographer
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-[255px] h-[389px] shadow-xl bg-white group cursor-pointer 
                          hover:bg-[#fc6060] transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="flex justify-center pt-8">
              <img
                className="rounded-[50%] transition-transform duration-500 group-hover:rotate-[30deg]"
                src="https://preview.colorlib.com/theme/alime/img/bg-img/21.jpg.webp"
                alt="Max McCormick"
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-[24px] font-bold group-hover:text-white transition-colors duration-300">
                Max McCormick
              </h1>
              <p className="mt-[10px] text-[#fc6060] group-hover:text-white transition-colors duration-300">
                Photographer
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-[255px] h-[389px] shadow-xl bg-white group cursor-pointer 
                          hover:bg-[#fc6060] transition-colors duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            variants={cardVariants}
          >
            <div className="flex justify-center pt-8">
              <img
                className="rounded-[50%] transition-transform duration-500 group-hover:rotate-[30deg]"
                src="https://preview.colorlib.com/theme/alime/img/bg-img/22.jpg.webp"
                alt="Robert Ward"
              />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-[24px] font-bold group-hover:text-white transition-colors duration-300">
                Robert Ward
              </h1>
              <p className="mt-[10px] text-[#fc6060] group-hover:text-white transition-colors duration-300">
                Photographer
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
