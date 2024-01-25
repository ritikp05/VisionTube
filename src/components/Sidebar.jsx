import React,{useContext} from "react";
import { categories } from "../assets/constants";
// import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../slice/feedslice";
import { DataContext } from "../context/AppContext";
const Sidebar = () => {
  const { darkmode } = useContext(DataContext);
 
  const { selectedCategory } = useSelector((state) => state.feedslice);
  console.log(selectedCategory);
  const dispatch = useDispatch();

  function setCat(Catname) {
    dispatch(setCategory(Catname));
  }

  return (
    <>
      <div
        className={` flex shadow-lg lg:h-screen  lg:flex-col gap-3 lg:fixed sticky top-14  p-2 z-30 ${darkmode?"bg-black":"bg-white"} whitespace-nowrap flex-row overflow-auto  `}
        >
        {categories.map((categories) => {
          return (
            <button
              onClick={(e) => setCat(categories.name)}
              key={categories.name}
              className={`flex gap-1 mt-2 mb-2 sm:mt-6 ${darkmode?"text-white":"text-black"} w-auto items-center justify-start pl-2 pr-2  ${
                categories.name === selectedCategory &&
                "bg-red-500 text-white rounded-xl "
              }`}
            >
              <span
                className={`text-base ${
                  categories.name !== selectedCategory && "text-red-500  "
                }`}
              >
                {<categories.icon />}
              </span>
              <span className="text-base ">{categories.name}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Sidebar);
