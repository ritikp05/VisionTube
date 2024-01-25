import React,{useContext} from "react";
import { DataContext } from "../context/AppContext";
import { Link } from "react-router-dom";

import { IoCheckmarkCircle } from "react-icons/io5";
const Relatedvideo = ({ video }) => {
  const {darkmode}=useContext(DataContext)
 
  const { id, snippet } = video;
  return (
    <>
      <section key={video.id.videoId}>
        <Link to={`/video/${id.videoId}`}>
          <div className={`flex flex-col sm:flex-row sm:w-72 w-80  shadow-2xl flex-wrap ${darkmode ? " bg-gray-800 shadow-black text-white":"bg-white text-black"}`}>
            
            <img
              src={snippet?.thumbnails?.high?.url}
              alt=""
              className="sm:w-72 w-80 sm:h-56 h-60 mx-auto"
            />
            <h1 className="px-1 pt-1 font-serif text-sm">
              {snippet.title.slice(0, 59)}
              {snippet.title.length > 68 && "....."}
            </h1>
            <b className="text-gray-500 tracking-wide px-1 font-mono flex items-center gap-1">
              {snippet.channelTitle}
              <IoCheckmarkCircle className="text-base" />
            </b>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Relatedvideo;
