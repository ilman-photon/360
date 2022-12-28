import { Box, Divider, Link, Typography } from "@mui/material";
import AccountCard from "../../molecules/AccountCard/accountCard";
import AccountSecurityIcon from "../../../assets/icons/AccountSecurity";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Api } from "../../../pages/api/api";
import moment from "moment";

export default function LoginSecurityView() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [lastUpdate, setLastUpdate] = useState("");
  const styleLink = {
    fontFamily: "Libre Franklin",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "20px",
    color: "#008294",
    textDecorationColor: "inherit",
    cursor: "pointer",
  };

  useEffect(() => {
    const getPasswordLastUpdate = () => {
      const postBody = {
        username: userData?.username,
      };
      const api = new Api();
      api.getPasswordLastUpdate(postBody).then((response) => {
        setLastUpdate(response?.lastUpdatedPasswordDate || "");
      });
    };

    userData === null &&
      setUserData(JSON.parse(localStorage.getItem("userData")));
    userData !== null && getPasswordLastUpdate();
  }, [userData]);

  const getDiffTime = () => {
    const currentTime = moment();
    const lastUpdateTime = moment(lastUpdate);
    const minutes = currentTime.diff(lastUpdateTime, "minutes");
    const hours = currentTime.diff(lastUpdateTime, "hours");
    const day = currentTime.diff(lastUpdateTime, "days");
    const month = currentTime.diff(lastUpdateTime, "months");
    const year = currentTime.diff(lastUpdateTime, "years");
    if (lastUpdate === "") {
      return "";
    }

    if (month > 12) {
      return `${year} years ago`;
    }

    if (month > 0) {
      return `${month} months ago`;
    }

    if (day > 0) {
      return `${day} day ago`;
    }

    if (hours > 0) {
      return `${hours} hours ago`;
    }

    return !isNaN(minutes) ? `${minutes} minutes ago` : "";
  };

  return (
    <AccountCard
      headerAlwaysShow
      hideFixedAction
      titleIcon={<AccountSecurityIcon />}
      title="Login"
      sx={{
        border: "2px solid #F3F3F3",
      }}
    >
      <Typography
        variant="bodyLarge"
        tabIndex={0}
        sx={{ fontWeight: 700, color: "#292929" }}
      >
        Username
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"} sx={{ mt: 1.25 }}>
        <Typography
          tabIndex={0}
          variant="bodyLarge"
          sx={{ fontWeight: 400, color: "#292929" }}
        >
          {userData?.username}
        </Typography>
        <Link
          sx={styleLink}
          onClick={() => {
            router.push("/patient/account/update-username");
          }}
          role="link"
          tabIndex={0}
          aria-label={"Update"}
          data-testid="update-username-link"
        >
          Update
        </Link>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Typography
        tabIndex={0}
        variant="bodyLarge"
        sx={{ fontWeight: 700, color: "#292929" }}
      >
        Password
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ mb: 3, mt: 1.25 }}
      >
        <Typography
          tabIndex={0}
          variant="bodyLarge"
          sx={{ fontWeight: 400, color: "#292929" }}
        >
          {`Last updated ${getDiffTime()}`}
        </Typography>
        <Link
          tabIndex={0}
          sx={styleLink}
          onClick={() => {
            router.push("/patient/account/update-password");
          }}
          aria-label={"Update"}
          role="link"
          data-testid="update-password-link"
        >
          Update
        </Link>
      </Box>
    </AccountCard>
  );
}
