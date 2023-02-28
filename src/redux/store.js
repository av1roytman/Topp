import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import listingsReducer from "./listingsSlice";

export default configureStore({
  reducer: { user: userReducer },
});
