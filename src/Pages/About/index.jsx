import React from "react";
import Navbar from "../../Components/common/Navbar/Index";

const About = () => {
  const nea = [
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
  ];
  return (
    <>
      <div className="bg-[url('/bg.png')] h-[100vh] bg-cover bg-center">
        <Navbar />
      </div>
      <div className="bg-green-600 mt-[300px] h-[600px]   grid gap-4 grid-cols-4 w-[1300px]">
        {nea.map((item) => {
          return (
            <div
              className={`bg-black w-full text-white ${item.col_start} ${item.row_start} ${item.row_end} ${item.col_end}`}
            >
              <img src={item.src} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
