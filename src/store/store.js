import { configureStore } from "@reduxjs/toolkit";
import index from "../store/index";
import user from "../store/user";
import appointment from "../store/appointment";

export const store = configureStore({
  reducer: {
    user,
    index,
    appointment,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
