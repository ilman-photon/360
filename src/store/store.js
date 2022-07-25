import { configureStore } from "@reduxjs/toolkit";
import index from "../store/index";
import user from "../store/user";

export const store = configureStore({
  reducer: {
    user,
    index,
  },
});

export default store;
