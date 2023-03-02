import { createSlice } from "@reduxjs/toolkit";
export const videoSlice = createSlice({
  name: "video",
  initialState: {
    topVideoUri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
  },
  reducers: {
    setTopVideo: (state, action) => {
      state.topVideoUri = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTopVideo } = videoSlice.actions;

export default videoSlice.reducer;
