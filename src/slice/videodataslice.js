import { createSlice } from "@reduxjs/toolkit";

const videodataslice = createSlice({
  name: "videodataslice",
  initialState: {
    singlevideo: [],
    relatedvideo: [],
    error: "",
    loading: true,
  },
  reducers: {
    setVideodetail: (state, action) => {
      state.singlevideo = action.payload;
    },
    setRelatedvideo: (state, action) => {
      state.relatedvideo = action.payload;
    },  setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError:(state,action)=>{
      state.error = action.payload;
      

    }
  },
});

export default videodataslice.reducer;
export const { setRelatedvideo, setVideodetail,setLoading,setError } = videodataslice.actions;
