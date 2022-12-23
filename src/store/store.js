import { configureStore } from "@reduxjs/toolkit";
import index from "../store/index";
import user from "../store/user";
import appointment from "../store/appointment";
import provider from "../store/provider";
import document from "../store/document";
import notification from "./notification";
import share from "../store/share";
import accountRecovery from "./accountRecovery";

export const store = configureStore({
  reducer: {
    user,
    index,
    appointment,
    provider,
    document,
    notification,
    share,
    accountRecovery,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
