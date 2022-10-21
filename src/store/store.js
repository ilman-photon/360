import { configureStore } from "@reduxjs/toolkit";
import index from "../store/index";
import user from "../store/user";
import appointment from "../store/appointment";
import provider from "../store/provider";
import document from "../store/document";
import notification from "./notification";

export const store = configureStore({
  reducer: {
    user,
    index,
    appointment,
    provider,
    document,
    notification,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
