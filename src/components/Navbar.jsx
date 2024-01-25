import React, { useContext } from "react";
import { logo } from "../assets/constants";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { DataContext } from "../context/AppContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { darkmode, setDarkMode } = useContext(DataContext);

 
  return (
    <>
      <div
        className={`w-full flex items-center p-3 z-50 justify-between gap-4 fixed top-0 ${
          darkmode ? "bg-black" : " bg-white  lg:shadow-lg"
        }`}
      >
        <img
          src={logo}
          alt="logo"
          className=" ml-4 w-8 mt-1 cursor-pointer  "
          onClick={() =>{ navigate("/")}
        } />
        <Searchbar darkmode={darkmode} />
        <button onClick={()=> setDarkMode(!darkmode)} >
          {darkmode ? (
            <MdDarkMode className=" text-2xl text-white  animate-bounce" />
          ) : (
            <MdOutlineLightMode className=" text-xl text-black animate-spin" />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
