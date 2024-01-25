import { createSlice } from "@reduxjs/toolkit";

const channeldataslice = createSlice({
  name: "channeldataslice",
  initialState: {
    channeldetail: [],
    channelvideo: [],
    error: "",
    loading: true,
  },
  reducers: {
    setChanneldetail: (state, action) => {
      state.channeldetail = action.payload;
    },
    setChannelvideo: (state, action) => {
      state.channelvideo = action.payload;
    },
    setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError:(state,action)=>{
        state.error = action.payload;
        
  
      }
  },
});

export default channeldataslice.reducer;
export const { setChanneldetail, setChannelvideo,setLoading,setError } = channeldataslice.actions;
