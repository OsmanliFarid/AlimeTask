import React, { useEffect, useState } from "react";
import Navbar from "../../Components/common/Navbar/Index";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const Home = () => {
  const LinkArr = [
    {
      id: 10,
      title: "All",
      ImageArr: [
        {
          id: 1,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/3.jpg.webp",
          width: "260px",
          height: "169px",
        },
        {
          id: 2,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/4.jpg.webp",
          width: "1",
          height: "4",
        },
        {
          id: 3,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/5.jpg.webp",
          width: "257px",
          height: "169px",
        },
        {
          id: 4,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/6.jpg.webp",
          width: "257px",
          height: "289px",
        },
        {
          id: 5,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/7.jpg.webp",
          width: "260px",
          height: "290px",
        },
        {
          id: 6,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/9.jpg.webp",
          width: "260px",
          height: "430px",
        },
        {
          id: 7,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/8.jpg.webp",
          width: "260px",
          height: "290px",
        },
        {
          id: 8,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/10.jpg.webp",
          width: "260px",
          height: "169px",
        },
        {
          id: 9,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/37.jpg.webp",
          width: "260px",
          height: "434px",
        },
        {
          id: 10,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/5.jpg.webp",
          width: "260px",
          height: "169px",
        },
        {
          id: 11,
          src: "https://preview.colorlib.com/theme/alime/img/bg-img/36.jpg.webp",
          width: "545px",
          height: "440px",
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
    console.log(id);
    const newData = LinkArr.find((item) => item.id === id);
    if (newData && newData.ImageArr) {
      SetActive(newData.ImageArr);
    }
  };
  return (
    <>
      <Header />
      <div className="font-[700] flex gap-10 text-[20px] justify-center mt-[80px]">
        {LinkArr.map(({ id, title }) => {
          return (
            <Link
              onClick={() => ClickShow(id)}
              key={id}
              className="relative font-bold text-[20px] group"
            >
              {title}
              <span className="absolute right-0 top-8 h-[5px] w-0 bg-red-700 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          );
        })}
      </div>
      <div className="grid justify-items-center max-w-[85vw] mt-[50px] m-[auto] ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 justify-items-center ">
          {active.map(({ id, src, width, height }) => {
            return <img key={id} src={src} alt="" />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
