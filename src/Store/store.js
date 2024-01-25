import { configureStore } from "@reduxjs/toolkit";
import feedslice from "../slice/feedslice";
import searchdataslice from "../slice/searchdataslice";
import videodataslice from "../slice/videodataslice";
import channeldataslice from "../slice/channeldataslice";
const store = configureStore({
  reducer: {
    feedslice: feedslice,
    searchdataslice: searchdataslice,
    videodataslice,
    channeldataslice
    
  },
});

export default store;
