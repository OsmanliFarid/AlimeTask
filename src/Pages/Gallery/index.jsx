import React, { useEffect, useState } from "react";
import Navbar from "../../Components/common/Navbar/Index";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import { motion } from "framer-motion";
import { img } from "framer-motion/m";
import Footer from "../../Components/common/Footer/Index";
const Gallery = () => {
  const LinkArr = [
    {
      id: 10,
      title: "All",
      ImageArr: [
        {
          col_start: "col-start-1",
          col_end: "col-end-2",
          row_start: "row-start-1",
          row_end: "row-end-2",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/3.jpg.webp",
          id: 1,
        },
        {
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/4.jpg.webp",
          col_start: "col-start-2",
          col_end: "col-end-3",
          row_start: "row-start-1",
          row_end: "row-end-3",
          id: 2,
        },
        {
          col_start: "col-start-3",
          col_end: "col-end-4",
          id: 3,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/5.jpg.webp",
        },
        {
          col_start: "col-start-3",
          col_end: "col-end-4",
          id: 99,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/50.jpg.webp",
        },
        {
          col_start: "col-start-4",
          col_end: "col-end-5",
          row_start: "row-start-1",
          row_end: "row-end-3",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/6.jpg.webp",
          id: 4,
        },
        {
          col_start: "col-start-1",
          col_end: "col-end-2",
          row_start: "row-start-2",
          row_end: "row-end-4",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/7.jpg.webp",
          id: 5,
        },
        {
          col_start: "col-start-2",
          col_end: "col-end-3",
          row_start: "row-start-3",
          row_end: "row-end-6",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/9.jpg.webp",
          id: 6,
        },
        {
          col_start: "col-start-3",
          col_end: "col-end-4",
          row_start: "row-start-2",
          row_end: "row-end-4",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/8.jpg.webp",
          id: 7,
        },
        {
          col_start: "col-start-4",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/10.jpg.webp",
          col_end: "col-end-5",
          row_start: "row-start-3",
          row_end: "row-end-4",
          id: 8,
        },
        {
          col_start: "col-start-1",
          col_end: "col-end-2",
          row_start: "row-start-4",
          row_end: "row-end-7",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/37.jpg.webp",
          id: 9,
        },
        {
          col_start: "col-start-2",
          col_end: "col-end-3",
          row_start: "row-start-6",
          row_end: "row-end-7",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/5.jpg.webp",
          id: 10,
        },
        {
          col_start: "col-start-3",
          col_end: "col-end-5",
          row_start: "row-start-4",
          row_end: "row-end-7",
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/36.jpg.webp",
          id: 11,
        },
      ],
    },
    {
      id: 11,
      title: "Human",
      ImageArr: [
        {
          id: 8,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/10.jpg.webp",
        },
        {
          id: 9,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/37.jpg.webp",
        },
        {
          id: 10,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/5.jpg.webp",
        },
      ],
    },
    {
      id: 12,
      title: "Nature",
      ImageArr: [
        {
          id: 4,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/6.jpg.webp",
        },
        {
          id: 5,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/7.jpg.webp",
        },
        {
          id: 6,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/9.jpg.webp",
        },
      ],
    },
    {
      id: 13,
      title: "Country",
      ImageArr: [
        {
          id: 1,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/3.jpg.webp",
        },
        {
          id: 2,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/4.jpg.webp",
        },
      ],
    },
    {
      id: 14,
      title: "Video",
      ImageArr: [
        {
          id: 11,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/36.jpg.webp",
        },
      ],
    },
  ];

  const [active, SetActive] = useState([]);
  useEffect(() => {
    const mesaj = LinkArr.filter((item) => item.title === "All");
    if (mesaj.length > 0 && mesaj[0].ImageArr) {
      SetActive(mesaj[0].ImageArr);
    }
  }, []);

  const ClickShow = (id) => {
    const newData = LinkArr.find((item) => item.id === id);
    if (newData && newData.ImageArr) {
      SetActive(newData.ImageArr);
    }
  };

  return (
    <>
      <div className="bg-[url('/bg.png')] h-[50.5vh] bg-cover bg-center">
        <Navbar />
      </div>
      <div className="font-[700] flex gap-10 text-[20px] justify-center mt-[80px]">
        {LinkArr.map(({ id, title }) => (
          <Link
            onClick={() => ClickShow(id)}
            key={id}
            className="relative font-bold text-[20px] group cursor-pointer"
          >
            {title}
            <span className="absolute right-0 top-8 h-[5px] w-0 bg-red-700 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </div>
      <div className="grid justify-items-center max-w-[75vw] mt-[50px] m-[auto]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {active.map(({ col_start, col_end, row_end, row_start, src, id }) => (
            <img
              src={src}
              alt=""
              className="w-[200px] h-[200px] object-cover"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
