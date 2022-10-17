import { configureStore } from "@reduxjs/toolkit";
import index from "./index";
import user from "./user";
import appointment from "./appointment";
import provider from "./provider";
import document from "./document";
import medicalResult from "./medicalReport";
import notification from "./notification";

export const store = configureStore({
  reducer: {
    user,
    index,
    appointment,
    provider,
    document,
    medicalResult,
    notification,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
