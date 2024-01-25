import React, { useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../assets/fetchdata";
import {
  setChanneldetail,
  setChannelvideo,
  setError,
} from "../slice/channeldataslice";
import { DataContext } from "../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { IoCheckmarkCircle } from "react-icons/io5";
import { setLoading } from "../slice/channeldataslice";
import SkeltonLoad from "./SkeltonLoad";


const ChannelDetail = () => {
  const { darkmode }=useContext(DataContext)
  const dispatch = useDispatch();
  const { channeldetail, channelvideo, loading,error } = useSelector(
    (state) => state.channeldataslice
  );
  const { id } = useParams();
  useEffect(() => {
   
    dispatch(setLoading(true));
    
    fetchdata(`channels?part=snippet,statistics&id=${id}`).then((data) => {
      dispatch(setChanneldetail(data?.items[0]?.snippet));
    });
    setTimeout(()=>{

      fetchdata(`search?channelId=${id}&part=snippet,id&order=date`)
      .then((data) => {
        dispatch(setChannelvideo(data.items));
        dispatch(setLoading(false));
      })
      .catch((error) => {
         dispatch(setError(error.message));
      });
    },600)
  }, [id]);
 
  return (
    <>
      <section className={`flex flex-col  items-center gap-16 w-full   ${darkmode ? " bg-gray-800 shadow-black text-white":"bg-white text-black"}`}>
        <div className=" shadow-xl w-full h-52 bg-slate-400 z-10"></div>
        <div className="-mt-44 flex flex-col items-center gap-1 bg-orange-400 pb-10 w-full rounded-b-full">
          <img
            src={channeldetail?.thumbnails?.high?.url}
            alt="image"
            className="w-64 z-20 rounded-full"
          />
          <p className="text-xl font-mono font-bold text-gray-100 flex items-center gap-1 ">
            {channeldetail?.localized?.title}
            <IoCheckmarkCircle className="text-base" />
          </p>
          <p className=" text-base font-semibold ">
            {channeldetail?.customUrl}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-24 gap-10 flex-wrap justify-center items-center">
          {!loading&&channelvideo ? 
          channelvideo.map((data,index) => {
            return <VideoCard video={data} key={index}/>;
          }):<SkeltonLoad  error={error}/>}
        </div>
      </section>
    </>
  );
};

export default ChannelDetail;
