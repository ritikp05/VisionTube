import React, { useEffect,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {setVideodetail,setRelatedvideo,setLoading,setError} from "../slice/videodataslice";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../assets/fetchdata";
import ReactPlayer from "react-player";
import Relatedvideo from "../components/Relatedvideo";
import { IoCheckmarkCircle } from "react-icons/io5";
import SkeltonLoad from "./SkeltonLoad";
import { DataContext } from "../context/AppContext";

const VideoDetail = () => {
  const {darkmode}=useContext(DataContext)
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singlevideo, relatedvideo, loading, error } = useSelector(
    (state) => state.videodataslice
  );

  useEffect(() => {
    dispatch(setLoading(true));
    fetchdata(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      dispatch(setVideodetail(data?.items[0]))
    );

    setTimeout(() => {
      fetchdata(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => {
          dispatch(setRelatedvideo(data.items));
          dispatch(setLoading(false));
        })
        .catch((error) => {
          dispatch(setError(error.message));
        });
    }, 400);
  }, [id]);
  return (
    <>
      <section className={`flex flex-col gap-9 sm:flex-row   h-[100%]  ${darkmode ? "  bg-gray-800 text-white":"bg-white text-black"}`}>
        <div className="mt-32  sm:ml-4 lg:ml-32 flex flex-col sm:w-1/2 lg:w-full items-center sm:items-start ">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            width={"100%"}
            playing
          />
          <h1 className="font-serif m-1 font-semibold text-xl mt-4">
            {singlevideo?.snippet?.title}
          </h1>
          <section className="flex sm:justify-start justify-between gap-0 sm:gap-52   w-full">
            <Link to={`/channel/${singlevideo?.snippet?.channelId}`}>
              <b className={`sm:text-xl text-base px-1 py-1 ml-1 rounded-2xl flex items-center    hover:bg-slate-800   bg-gray-500  text-white `}>
                {singlevideo?.snippet?.channelTitle}
                <IoCheckmarkCircle className="text-base" />
              </b>
            </Link>
            <div className="flex flex-col sm:mr-56 mr-2">
              <b>{singlevideo?.statistics?.likeCount} likes</b>
              <b> {singlevideo?.statistics?.viewCount} views</b>
            </div>
          </section>
        </div>
        <div className="flex sm:flex-col flex-wrap justify-center mt-36 mx-auto  w-full  gap-10 md:mr-20 sm:mr-10">
          {!loading && relatedvideo ? (
            relatedvideo.map((data, index) => {
              return <Relatedvideo video={data} key={index} />;
            })
          ) : (
            <SkeltonLoad error={error} />
          )}
        </div>
      </section>
    </>
  );
};

export default VideoDetail;
