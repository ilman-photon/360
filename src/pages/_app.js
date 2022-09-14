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

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const cookies = new Cookies();
  const getLayout = Component.getLayout || ((page) => page);

  const idleTime = cookies.get("IdleTimeOut") || 1000 * 60 * 20;
  const timeout = parseInt(idleTime); //Idle Timer
  const promptTimeout = 60000; //Remaining Time
  // Time before idle
  const [remaining, setRemaining] = useState(0);

  // Modal open state
  const [open, setOpen] = useState(false);

  const [isOnline, setOnline] = useState(true);

  // inject api.js with redux
  injectStore(store);

  const onPrompt = () => {
    // onPrompt will be called after the timeout value is reached
    // In this case 30 minutes. Here you can open your prompt.
    // All events are disabled while the prompt is active.
    // If the user wishes to stay active, call the `reset()` method.
    // You can get the remaining prompt time with the `getRemainingTime()` method,
    setRemaining(promptTimeout);
    setOpen(true);
  };

  const onIdle = () => {
    // onIdle will be called after the promptTimeout is reached.
    // In this case 30 seconds. Here you can close your prompt and
    // perform what ever idle action you want such as log out your user.
    // Events will be rebound as long as `stopOnMount` is not set.
    setRemaining(0);
  };

  const { getRemainingTime, isPrompted, activate } = useIdleTimer({
    timeout,
    promptTimeout,
    onIdle,
    onPrompt,
  });

  const onClickStayLoggedIn = () => {
    setOpen(false);
    activate();
  };

  const onClickedLoggedOff = () => {
    setOpen(false);
  };
  const isLogin = cookies.get("authorized") || cookies.get("mfa");

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPrompted()) {
        setRemaining(Math.ceil(getRemainingTime() / 1000));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [getRemainingTime, isPrompted]);

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
      {isLogin ? (
        <SessionExpiredModal
          showModal={open}
          onStayLoggedIn={onClickStayLoggedIn}
          isExpired={open && remaining <= 0}
          remaining={remaining}
          onLoggedOff={onClickedLoggedOff}
        />
      ) : (
        <></>
      )}
      <GenericErrorModal storeContext={store} />
      <Component {...pageProps} />
    </Provider>,
    store
  );
}
export default appWithTranslation(App, nextI18nConfig);
