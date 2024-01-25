import React,{useContext} from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import SkeltonLoad from "./SkeltonLoad";
import { DataContext } from "../context/AppContext";

const Videos = () => {
  const { darkmode }=useContext(DataContext)
  const { selectedCategory, videos, loading, error } = useSelector(
    (state) => state.feedslice
  );
  console.log(selectedCategory);
  return (
    <>
      <section className="flex flex-col lg:justify-start sm:justify-center flex-wrap gap-10 lg:ml-48 ">
        <h1 className={`ml-4 font-serif font-bold text-2xl mt-24 ${darkmode?"text-white":"text-black"}`}>
          {selectedCategory} <span className={` ${darkmode?"text-white":"text-red-500"}`}>videos</span>
        </h1>
        <div className="flex flex-row flex-wrap justify-center w-full gap-12 ">
          {!loading ? (
            videos.map((item, index) => {
              return <VideoCard video={item} key={index} />;
            })
          ) : (
            <SkeltonLoad error={error}/>
          )}
        </div>
      </section>
    </>
  );
};

export default Videos;
