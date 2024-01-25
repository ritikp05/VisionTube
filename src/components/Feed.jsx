import React, { useEffect,useContext } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchdata } from "../assets/fetchdata";
import { useDispatch, useSelector } from "react-redux";
import { setVideos, setError, setLoading } from "../slice/feedslice";
import { DataContext } from "../context/AppContext";
const Feed = () => {
  const { darkmode }=useContext(DataContext)
  const { selectedCategory } = useSelector((state) => state.feedslice);
  const dispatch = useDispatch();
console.log(darkmode)
  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
        
    fetchdata(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        dispatch(setVideos(data.items));
        dispatch(setLoading(false));
      })
      .catch((error) => { 
         dispatch(setError(error.message));
        });
      }, 600);
  }, [selectedCategory]);
  return (
    <>
      <div className={`flex sm:flex-row  flex-wrap  justify-start w-full  ${darkmode ? "bg-gray-800":"bg-white"}   `}>
        <Sidebar />
        <Videos />
      </div>
    </>
  );
};

export default Feed;
