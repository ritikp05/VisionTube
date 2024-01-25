import React, { useEffect ,useContext} from "react";
import { useParams } from "react-router-dom";
import { fetchdata } from "../assets/fetchdata";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchedData,
  setLoading,
  setError,
} from "../slice/searchdataslice";
import VideoCard from "./VideoCard";
import SkeltonLoad from "./SkeltonLoad";
import { DataContext } from "../context/AppContext";
const SearchFeed = () => {
  const {darkmode}=useContext(DataContext);
  const dispatch = useDispatch();
  const { searchedData, loading, error } = useSelector(
    (state) => state.searchdataslice
  );
  const { searchterm } = useParams();
  useEffect(() => {
    dispatch(setLoading(true));
   setTimeout(()=>{
     fetchdata(
      `search?q=${searchterm}&part=snippet,id&regionCode=IN& order=date`
    )
      .then((data) => {
        dispatch(setSearchedData(data.items));
        dispatch(setLoading(false));
      })
      .catch((error) => {
      
        dispatch(setError(error.message));
       });

   },600)
      }, [searchterm]);
  return (
    <>
      <div className={`flex w-full  flex-col sm:gap-20 gap-12 pt-28 sm:flex-row flex-wrap justify-center items-center ${darkmode?"bg-gray-800":"bg-white"}  `}>
        {!loading &&searchedData ? (
          searchedData.map((data, index) => {
            return <VideoCard video={data} key={index} />;
          })
        ) : (
          <SkeltonLoad error={error} />
        )}
      </div>
    </>
  );
};

export default SearchFeed;
