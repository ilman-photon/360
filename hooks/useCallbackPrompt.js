import { useEffect } from "react";
import Router from "next/router";
import { useBeforeUnload } from "react-use";

export const useLeavePageConfirm = ({
  isConfirm = true,
  message = "Are you sure want to leave this page?"
}) => {
  useBeforeUnload(isConfirm, message);

  // close
  const handleWindowClose = (e) => {
    e.preventDefault();
    
    return (e.returnValue = "Change that you made might not be saved.");
  };
  useEffect(() => {
    return () => window.removeEventListener("beforeunload", handleWindowClose);
  }, []);

  // navigate
  useEffect(() => {
    const handler = () => {
      if (isConfirm && !window.confirm(message)) {
        throw "Route Canceled";
      }
    };
    Router.events?.on("routeChangeStart", handler);
    return () => {
      Router.events?.off("routeChangeStart", handler);
    };
  }, [isConfirm, message]);
};