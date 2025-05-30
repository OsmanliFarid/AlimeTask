import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../Header";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Navbar = () => {
  let NavbarArr = [
    { id: 1, title: "Home", to: "/", arrow: "" },
    { id: 2, title: "Pages", to: "/", arrow: <IoIosArrowDown /> },
    { id: 3, title: "About", to: "/about", arrow: "" },
    { id: 4, title: "Galery", to: "/", arrow: "" },
    { id: 5, title: "Blog", to: "/", arrow: "" },
    { id: 6, title: "Contact", to: "/", arrow: "" },
    { id: 7, title: "About", to: "/", arrow: "" },
  ];
  let NavbarArr2 = [
    { id: 1, title: "Home", to: "/", arrow: "" },
    { id: 3, title: "About", to: "/about", arrow: "" },
    { id: 4, title: "Galery", to: "/", arrow: "" },
    { id: 5, title: "Blog", to: "/", arrow: "" },
    { id: 6, title: "Blog Details", to: "/", arrow: "" },
    { id: 7, title: "Contact", to: "/", arrow: "" },
    {
      id: 8,
      title: "Dropdown",
      to: "/",
      arrow: <IoIosArrowForward />,
      Dropdown: [
        { id: 11, title: "Dropdown item 1" },
        { id: 9, title: "Dropdown item 2" },
        { id: 10, title: "Dropdown item 3" },
        { id: 12, title: "Dropdown item 4" },
      ],
    },
  ];
  const [active, SetActive] = useState(false);
  const ClickShow = () => {
    SetActive(!active);
  };
  const [DropActive, SetDropActive] = useState(false);
  const [DropArr, SetDropArr] = useState([]);
  const DropClickShow = (id) => {
    SetDropActive(!DropActive);
    const Drop = NavbarArr2.find((item) => item.id === id);
    if (Drop.Dropdown) {
      SetDropArr(Drop.Dropdown);
    }
  };

  return (
    <>
      <div className="bg-[rgba(0,0,0,0.2)]">
        <div className="max-w-[75vw] m-[auto]">
          <div className="flex justify-between  items-center h-[70px]  p-[0px_10px]">
            <div className="">
              <h1 className="font-[700] text-[30px] text-white">
                Alime <span className="text-red-900">.</span>
              </h1>
            </div>
            <div className="flex items-center gap-20">
              <div className="flex gap-8 text-white font-[400] text-[18px]">
                {NavbarArr.map(({ id, title, to, arrow }) => {
                  if (title === "Pages") {
                    return (
                      <div key={id}>
                        <div className="">
                          <NavLink to={to}>
                            <h1
                              className=" flex gap-2 items-center transition-all duration-500 hover:text-red-700"
                              onClick={ClickShow}
                            >
                              {title}
                              <span className="text-red-700 ]">{arrow}</span>
                            </h1>
                          </NavLink>
                        </div>
                        <div
                          className={`${
                            active ? "block" : "hidden"
                          }  bg-white w-[210px] h-[320px] fixed top-15 left-170 rounded-xl`}
                        >
                          {NavbarArr2.map(({ id, title, to, arrow }) => {
                            if (title === "Dropdown") {
                              return (
                                <>
                                  <div className="mt-[3px] ">
                                    <Link
                                      className="flex text-[16px]  hover:text-red-500 transition-all duration-500 font-[500] p-[15px_0px_0px_30px] text-black"
                                      key={id}
                                    >
                                      <div className="flex gap-1  ">
                                        <span>-</span>
                                        <div
                                          className="flex items-center  w-[160px] justify-between"
                                          onClick={() => DropClickShow(id)}
                                        >
                                          {title}
                                          <span className="text-red-500">
                                            {arrow}
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                  <div
                                    className={`${
                                      DropActive ? "block" : "hidden"
                                    } bg-white w-[210px] h-[200px] rounded-[10px] fixed left-222 top-80`}
                                  >
                                    {DropArr.map(({ id, title }) => {
                                      return (
                                        <>
                                          <div className="">
                                            <Link
                                              key={id}
                                              className="text-black text-[16px] flex p-2 pt-[10px]"
                                            >
                                              <div className="flex items-center gap-2">
                                                <span>-</span>{" "}
                                                <span>{title}</span>
                                              </div>
                                            </Link>
                                          </div>
                                        </>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            } else {
                              return (
                                <>
                                  <div className="mt-[3px] ">
                                    <Link
                                      className="flex text-[16px]  hover:text-red-500 transition-all duration-500 font-[500] p-[15px_0px_0px_30px] text-black"
                                      key={id}
                                    >
                                      <div className="flex gap-1  ">
                                        <span>-</span>
                                        <div className="flex items-center  w-[160px] justify-between">
                                          {title}{" "}
                                          <span className="text-red-500">
                                            {arrow}
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </>
                              );
                            }
                          })}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <>
                        <div className="">
                          <NavLink key={id} to={to}>
                            <h1 className=" flex gap-2 transition-all duration-500 hover:text-red-700">
                              {title}{" "}
                              <span className="text-red-700 ]">{arrow}</span>
                            </h1>
                          </NavLink>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
              <div className="">
                <IoSearchOutline className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
