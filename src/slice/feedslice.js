import { createSlice } from "@reduxjs/toolkit";

const feedslice = createSlice({
  name: "feed",
  initialState: {
     selectedCategory: "New",
    videos: [],
    error:"",
    loading:true
 
  },
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setVideos:(state,action)=>{
      state.videos=action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError:(state,action)=>{
      state.error = action.payload;
      

    }
  },
});

export default feedslice.reducer;
export const { setCategory,setVideos,setLoading,setError } = feedslice.actions;
