import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import CustomModal from "../../../../components/molecules/CustomModal/customModal";
import UpdateUsernameView from "../../../../components/molecules/UpdateUsernameView/updateUsernameView";
import UpdateLoginLayout from "../../../../components/templates/updateLoginLayout";
import { setLoginMessage } from "../../../../store";
import store from "../../../../store/store";
import { logoutProps } from "../../../../utils/authetication";
import { formatPhoneNumber } from "../../../../utils/phoneFormatter";
import { Api } from "../../../api/api";

export default function UpdateUsername() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    userData === null &&
      setUserData(JSON.parse(localStorage.getItem("userData")));
  }, [userData]);

  const processUpdate = () => {
    const api = new Api();
    const postBody = {
      username: userData?.username,
      newUsername: username,
    };
    api
      .changeUsername(postBody)
      .then(() => {
        dispatch(setLoginMessage("Your username was successfully updated."));
        logoutProps.OnLogoutClicked(router, null, username);
      })
      .catch(() => {
        // This is intentional
      });
  };

  return (
    <>
      {userData !== null && (
        <UpdateUsernameView
          onUpdate={(usernameValue) => {
            setUsername(usernameValue);
            setShowModal(true);
          }}
        />
      )}

      <CustomModal
        open={showModal}
        buttonText={"Update"}
        onClickButton={() => {
          processUpdate();
        }}
        secondaryButtonText={"Cancel"}
        onClickSecondaryButton={() => {
          setShowModal(false);
        }}
        onClickCloseButton={() => {
          setShowModal(false);
        }}
        sx={{
          "& .MuiPaper-root": {
            position: { xs: "absolute", md: "absolute" },
            top: { xs: "71px", md: "87px" },
            m: 2,
          },
          "& .MuiDialogContent-root": {
            padding: "16px !important",
          },
        }}
        buttonSx={{
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 500 }}>
          Are you sure you want to update your username?
        </Typography>
        <Box
          display={"flex"}
          sx={{
            p: 1.25,
            my: 2,
            background: "#F2F7F7",
          }}
        >
          <Typography
            variant="bodyLarge"
            sx={{
              fontWeight: 600,
              color: "#003B4A",
              fontSize: {
                xs: "16px",
                sm: "18px",
              },
              width: "max-content",
            }}
          >
            New Username:&nbsp;
          </Typography>
          <Typography
            variant="bodyLarge"
            sx={{
              fontWeight: 400,
              color: "#003B4A",
              fontSize: {
                xs: "16px",
                sm: "18px",
              },
              wordBreak: "break-all",
              flex: 1,
            }}
          >
            {formatPhoneNumber(username)}
          </Typography>
        </Box>
      </CustomModal>
    </>
  );
}

UpdateUsername.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <UpdateLoginLayout pageTitle="Update Username">{page}</UpdateLoginLayout>
    </Provider>
  );
};
