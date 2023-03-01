import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "test",
    password: "test",
    profilePicUri: require("../assets/test.jpg"),
    myListings: [
      {
        id: "1",
        uri: require("../assets/test.jpg"),
        description: "testing description",
      },
      {
        id: "2",
        uri: require("../assets/test.jpg"),
        description: "another test description",
      },
    ],
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
