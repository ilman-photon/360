import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import store from "../store/store";
import "../../styles/globals.scss";
import React, { useState, useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";

import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config";
import SessionExpiredModal from "../components/organisms/SessionExpiredModal/sessionExpiredModal";
import NoInternetConnectionModal from "../components/organisms/NoInternetConnectionModal/noInternetConnectionModal";
import GenericErrorModal from "../components/molecules/GenericErrorModal/genericErrorModal";
import { injectStore } from "./api/api";
import Image from "next/image";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const cookies = new Cookies();
  const router = useRouter();
  const getLayout = Component.getLayout || ((page) => page);

  const [isOnline, setOnline] = useState(true);

  // inject api.js with redux
  injectStore(store);

  const isLogin = cookies.get("authorized") || cookies.get("mfa");

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnline(false);
    });
    window.addEventListener("online", () => {
      setOnline(true);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnline(navigator.onLine);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [isOnline]);

  return getLayout(
    <Provider store={store}>
      <NoInternetConnectionModal isOnline={isOnline} setOnline={setOnline} />
      <Box sx={{ display: "none" }}>
        {/* Load Immage for internet connection */}
        <Image
          alt=""
          src={"/Vector.png"}
          width={244.89}
          height={211}
          loading={"eager"}
        />
      </Box>
      {isLogin ? <SessionExpiredModal /> : <></>}
      <GenericErrorModal storeContext={store} />
      <Component {...pageProps} />
    </Provider>,
    store,
    router
  );
}
export default appWithTranslation(App, nextI18nConfig);
