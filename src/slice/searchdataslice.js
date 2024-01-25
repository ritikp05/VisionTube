import { createSlice } from "@reduxjs/toolkit";
const searchdataslice = createSlice({
  name: "searchdataslice",
  initialState: {
    searchedData: [],
    error: "",
    loading: true,
  },
  reducers: {
    setSearchedData: (state, action) => {
      state.searchedData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError:(state,action)=>{
      state.error = action.payload;
      

    }
  },
});

export default searchdataslice.reducer;
export const { setSearchedData,setLoading,setError } = searchdataslice.actions;
