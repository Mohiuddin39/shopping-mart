import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className=" bg-bodyColor h-20 top-0 z-50 sticky">
        <Container className="h-full flex items-center justify-between md:justify-start md:gap-x-5 ">
          <Logo />
          {/* Search Field */}
          <div className=" w-full hidden bg-white md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 duration-200 group">
            <FiSearch className=" text-gray-500 group-focus-within:text-darkText duration-200" />
            <input
              type="text"
              placeholder="Search for products"
              className=" placeholder:text-sm flex-1 outline-0"
            />
          </div>
          {/* Login/Register */}
          <div className=" headDiv">
            <AiOutlineUser className=" text-2xl" />
            <p className=" text-sm font-semibold">Login/Register</p>
          </div>
          {/* Card Button */}
          <div className=" bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
            <IoMdCart className=" text-2xl" />
            <p className=" text-sm font-semibold">$0:00</p>
            <span className=" bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 shadow-xl shadow-black flex items-center justify-center">
              0
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
