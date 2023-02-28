import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    password: "",
    profilePicUri: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setProfilePicUri: (state, action) => {
      state.profilePicUri = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsername, setPassword, setProfilePicUri } = userSlice.actions;

export default userSlice.reducer;
