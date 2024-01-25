import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";


const Searchbar = ({darkmode}) => {
  const [data, setdata] = useState("");
  const navigate = useNavigate();
  function setQueary() {
    navigate(`/search/${data}`);
    setdata('')
  }
  return (
    <div className="sm:mr-40 flex mr-2   ">
      <input
        type="text"
        className={`border-none pr-7 sm:pr-24 pl-1 focus:outline-2 rounded-l-2xl h-8 outline-dashed ${darkmode?" outline-white":"outline-black "}`}
        placeholder="Search..."
        onChange={(e) => setdata(e.target.value)}
        value={data}
        name="search"
      />
      <IoMdSearch
        className={`bg-white text-red-600 h-8 rounded-r-2xl w-6 cursor-pointer outline-dashed  ${darkmode?"outline-white  border-l-2 border-gray-300":"outline-black"} `}
        onClick={setQueary}
      />
    </div>
    
  );
};

export default Searchbar;
