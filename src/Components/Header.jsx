import React, { useEffect, useState } from "react";
import Navbar from "./common/Navbar/Index";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [Active, SetActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      SetActive((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  const nameVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`${
        Active ? "bg-[url('/bg.png')]" : "bg-[url('/bg2.png')]"
      } h-[100vh] w-full bg-cover bg-center`}
    >
      <Navbar />
      <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto ">
        <motion.div
          className="mt-[80px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.h1
            className="text-[#ffe89e] text-[32px] sm:text-[40px] md:text-[60px] lg:text-[82px] font-[700]"
            variants={itemVariants}
          >
            Hello
          </motion.h1>

          <AnimatePresence mode="wait" initial={false}>
            <motion.h1
              key={Active ? "jackson" : "alime"}
              className="text-[#ffe89e] text-[32px] sm:text-[40px] md:text-[60px] lg:text-[82px] font-[700]"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              I'm {Active ? "Jackson" : "Alime"}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            className="text-white mb-[50px] max-w-full sm:max-w-[530px] text-[14px] sm:text-[15px] md:text-[17px]"
            variants={itemVariants}
          >
            I photograph very instinctively. I see how it is taken like that. I
            do not follow certain styles, philosophies or teachers.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 text-white"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
