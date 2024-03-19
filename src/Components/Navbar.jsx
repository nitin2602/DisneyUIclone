import React, { useState } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navlinks = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES ",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex justify-between items-center p-5">
      <div className="flex items-center justify-between gap-8">
        <img
          className=" w-[80px] md:w-[115px] object-cover"
          src="src\assets\Images\logo.png"
          alt=""
        />

        <div className=" hidden sm:flex gap-8 ">
          {navlinks.map((links) => (
            <div
              className="text-white flex justify-center items-center gap-3
        text-[18px] font-semibold cursor-pointer hover:underline
     underline-offset-8 mb-2"
              key={links.name}
            >
              <links.icon />
              <h2>{links.name}</h2>
            </div>
          ))}
        </div>
        <div className="flex sm:hidden gap-5">
          {navlinks.map(
            (links, index) =>
              index < 3 && (
                <div
                  className="text-white flex justify-center items-center gap-3
        text-[18px] font-semibold cursor-pointer hover:underline
     underline-offset-8 mb-2"
                  key={links.name}
                >
                  <links.icon />
                </div>
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HiDotsVertical />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                <>
                  {navlinks.map(
                    (links, index) =>
                      index > 2 && (
                        <div
                          key={index}
                          className="text-white flex items-center gap-3
                        text-[15px] font-semibold cursor-pointer hover:underline
                        underline-offset-8 mb-2'"
                        >
                          <links.icon />
                          <h2> {links.name}</h2>
                        </div>
                      )
                  )}
                </>
              </div>
            ) : null}
          </div>
        </div>

        </div>
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          alt=""
          className="w-[40px] rounded-full"
        />
    </div>
  );
};

export default Navbar;
