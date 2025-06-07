import React from "react";
import Navbar from "../../Components/common/Navbar/Index";

const Blog = () => {
  const newarr = [
    {
      id: 1,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/51.jpg.webp",
      grid_col_row: "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3",
      rotate: "hover:rotate-[90deg]",
    },
    {
      id: 2,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/52.jpg.webp",
    },
    {
      id: 3,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/53.jpg.webp",
    },
    {
      id: 4,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/54.jpg.webp",
      grid_col_row: "md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3",
    },
    {
      id: 5,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/55.jpg.webp",
      grid_col_row: "md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3",
    },
    {
      id: 6,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/56.jpg.webp",
      grid_col_row: "md:col-start-3 md:col-end-5 md:row-start-2 md:row-end-3",
    },
    {
      id: 7,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/57.jpg.webp",
    },
    {
      id: 8,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/58.jpg.webp",
      grid_col_row: "md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-5",
    },
    {
      id: 9,
      img: "https://preview.colorlib.com/theme/alime/img/bg-img/59.jpg.webp",
    },
  ];
  return (
    <>
      <div className="bg-[url('/bg.png')] h-[50.5vh] bg-cover bg-center">
        <Navbar />
      </div>
      <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w-[100vw] xl:max-w-[75vw] m-auto">
        <div className="grid grid-cols-1 gap-3 mt-[90px] md:grid-cols-4">
          {newarr.map(({ id, img, grid_col_row, rotate }) => {
            return (
              <div className={`${grid_col_row} overflow-hidden`}>
                <img
                  className={`w-full md:w-auto object-cover transition-transform duration-300 transform hover:scale-105`}
                  src={img}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
