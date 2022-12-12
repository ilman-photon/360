import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { logoutProps } from "./authetication";

export function useLogin(admin = false) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookies = new Cookies();
    const userType = JSON.parse(localStorage.getItem("userData"))?.userType;

    if (!cookies.get("authorized")) {
      router.replace("/patient/login");
      setIsAuthenticated(false);
    } else if (userType === "patient" && admin) {
      router.push("/patient/");
    } else {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated, router, admin]);

  return isAuthenticated;
}

export const useForceLogout = () => {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isIgnore = ["/patient/mfa"];
  useEffect(() => {
    router.beforePopState((e) => {
      if (isIgnore.includes(e.url)) {
        logoutProps.OnLogoutClicked(router);
        return false;
      }
      return true;
    });
  }, [isIgnore, router, router.pathname]);
};
