import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../Header";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
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
  const [DropArr2, SetDropArr2] = useState([]);
  const DropClickShow = (id) => {
    SetDropActive(!DropActive);
    const Drop = NavbarArr2.find((item) => item.id === id);

    if (Drop.Dropdown) {
      SetDropArr(Drop.Dropdown);
    }
    console.log(NavbarArr2);
  };
  const [ActiveBars, SetActiveBars] = useState(false);
  const ClickBars = () => {
    SetActiveBars(!ActiveBars);
  };
  const CloseBars = () => {
    SetActiveBars(!ActiveBars);
  };
  const [DropBars, SetDropBars] = useState(false);
  const BarsDrop = () => {
    SetDropBars(!DropBars);
  };
  const [ClickDowns, SetClickDowns] = useState(false);
  const ClickDown = (id) => {
    SetClickDowns(!ClickDowns);
    const Drop = NavbarArr2.find((item) => item.id === id);
    if (Drop.Dropdown) {
      SetDropArr2(Drop.Dropdown);
    }
  };
  return (
    <>
      <div className="bg-[rgba(0,0,0,0.2)]">
        <div className="md:max-w-[90vw] sm:max-w-[90vw] max-w[100vw] xl:max-w-[75vw] m-[auto]">
          <div className="flex justify-between  items-center h-[70px]  p-[0px_10px]">
            <div className="">
              <h1 className="flex items-center font-[700] text-[30px] text-white">
                <span>Alime</span> <span className="text-red-900">.</span>
              </h1>
            </div>
            <div className=" hidden md:block">
              <div className="flex items-center gap-20">
                <div className="flex  md:gap-5 text-white font-[400] text-[18px]">
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
                                <span className="text-red-700 ]">
                                  {active ? arrow : <IoIosArrowForward />}
                                </span>
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
                                  <div key={id}>
                                    <div className="mt-[3px] ">
                                      <Link className="flex text-[16px]  hover:text-red-500 transition-all duration-500 font-[500] p-[15px_0px_0px_30px] text-black">
                                        <div className="flex gap-1  ">
                                          <span>-</span>
                                          <div
                                            className="flex items-center  w-[160px] justify-between"
                                            onClick={() => DropClickShow(id)}
                                          >
                                            {title}
                                            <span className="text-red-500">
                                              {DropActive ? (
                                                <IoIosArrowDown />
                                              ) : (
                                                <IoIosArrowForward />
                                              )}
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
                                                  <span className="text-black">
                                                    {title}
                                                  </span>
                                                </div>
                                              </Link>
                                            </div>
                                          </>
                                        );
                                      })}
                                    </div>
                                  </div>
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
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="">
                <IoSearchOutline className="text-white text-2xl" />
              </div>
              <div className="md:hidden block">
                {ActiveBars ? (
                  <IoMdClose
                    className="text-[30px] text-white"
                    onClick={CloseBars}
                  />
                ) : (
                  <FaBars
                    className="text-white text-[20px]"
                    onClick={ClickBars}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              ActiveBars ? "block" : "hidden"
            } bg-white md:hidden w-[300px] h-full fixed top-0 left-0 overflow-y-scroll`}
          >
            <div className="flex justify-end p-4">
              <IoMdClose className="text-[40px]" onClick={CloseBars} />
            </div>
            <div className="flex items-start h-full">
              <div className="bg-[#e4e4e4] w-[100%] h-auto pb-[20px] mt-5">
                {NavbarArr.map(({ id, title, arrow }) => {
                  if (title === "Pages") {
                    return (
                      <div key={id}>
                        <Link className="flex items-center justify-between pt-3 pl-5 font-[500]">
                          {title}{" "}
                          <span
                            className={`${
                              DropBars ? "bg-green-500 " : "bg-blue-950 "
                            } p-[7px_7px] text-white mr-[10px] `}
                            onClick={BarsDrop}
                          >
                            {DropBars ? <IoIosArrowUp /> : arrow}
                          </span>
                        </Link>
                        <div
                          className={`${
                            DropBars
                              ? "opacity-100 max-h-[400px] duration-700"
                              : "opacity-0 duration-700"
                          } max-h-0`}
                        >
                          {NavbarArr2.map(({ id, title, arrow }) => {
                            if (title === "Dropdown") {
                              return (
                                <div key={id} className={`bg-white pb-[10px]`}>
                                  <Link className="flex items-center gap-2 pt-3 pl-5 font-[500]">
                                    <span>-</span>
                                    <span className="flex items-center w-[100%] justify-between ">
                                      {title}{" "}
                                      <span
                                        className={`{
                                              ${
                                                ClickDowns
                                                  ? "bg-green-500"
                                                  : "bg-blue-950"
                                              } p-[7px_7px] text-white mr-[10px]`}
                                        onClick={() => ClickDown(id)}
                                      >
                                        {ClickDowns ? (
                                          <IoIosArrowDown />
                                        ) : (
                                          <IoIosArrowUp />
                                        )}
                                      </span>
                                    </span>
                                  </Link>
                                  <div
                                    className={`${
                                      ClickDowns
                                        ? "opacity-100 max-h-[100px]"
                                        : "opacity-0 max-h-[0px]"
                                    } duration-500 `}
                                  >
                                    {DropArr2.map(({ id, title, arrow }) => {
                                      return (
                                        <div key={id}>
                                          <div key={id}>
                                            <div className="flex gap-3 font-[500] pl-[20px]">
                                              <span>-</span>
                                              <span className="font-[500]">
                                                {title}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            } else {
                              return (
                                <div
                                  key={id}
                                  className="bg-white transition-all duration-700"
                                >
                                  <Link className="flex items-center gap-2 pt-3 pl-5 font-[500] ">
                                    <span>-</span>
                                    <span className="flex items-center w-[100%] justify-between">
                                      {title} <span>{arrow}</span>
                                    </span>
                                  </Link>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={id}>
                        <Link className="flex items-center justify-between pt-3 pl-5 font-[500]">
                          {title} <span className="text-white">{arrow}</span>
                        </Link>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
