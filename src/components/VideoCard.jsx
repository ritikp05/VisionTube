import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { DataContext } from "../context/AppContext";

const VideoCard = ({ video }) => {
  const { darkmode }=useContext(DataContext)
  const { id, snippet } = video;
  return (
    <>
    
      <section className="flex flex-row   justify-center w-full sm:w-auto flex-wrap">
        <Link to={id.videoId && `/video/${id.videoId}`}>
          <div className={`flex flex-col w-72 shadow-2xl  ${darkmode ? " bg-gray-800 shadow-black text-white":"bg-white text-black"}`}>
            <img
              src={snippet?.thumbnails?.high?.url}
              alt="thumbnail"
              className="w-72 h-56 mx-auto"
            />
            <h1 className="px-1 pt-1 font-serif text-sm">
              {snippet.title.slice(0, 59)}{" "}
              {snippet.title.length > 59 && "....."}
            </h1>
            <b className="text-gray-500 tracking-wide px-1 font-bold font-mono flex items-center gap-1">
              {snippet.channelTitle}
              <IoCheckmarkCircle />
            </b>
          </div>
        </Link>
      </section>
    </>
  );
};

export default VideoCard;
