import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let NavbarArr = [
    { id: 1, title: "Home", to: "/", arrow: "" },
    { id: 2, title: "Pages", to: "/", arrow: "v" },
    { id: 3, title: "About", to: "/", arrow: "" },
    { id: 4, title: "Galery", to: "/", arrow: "" },
    { id: 5, title: "Blog", to: "/", arrow: "" },
    { id: 6, title: "Contact", to: "/", arrow: "" },
    { id: 7, title: "About", to: "/", arrow: "" },
  ];
  return (
    <>
      <div className="bg-black">
        <div className="max-w-[85vw] m-[auto]">
          <div className="grid grid-cols-3 items-center h-[70px]  p-[0px_10px]">
            <div className="">
              <h1 className="font-[700] text-[30px] text-white">
                Alime <span className="text-red-900">.</span>
              </h1>
            </div>
            <div className="flex gap-8 text-white font-[400] text-[18px]">
              {NavbarArr.map(({ id, title, to, arrow }) => {
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
              })}
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
