import { Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import CustomModal from "../../../../components/molecules/CustomModal/customModal";
import UpdatePasswordView from "../../../../components/molecules/UpdatePasswordView/updatePasswordView";
import UpdateLoginLayout from "../../../../components/templates/updateLoginLayout";
import { setLoginMessage } from "../../../../store";
import store from "../../../../store/store";
import { logoutProps } from "../../../../utils/authetication";
import { Api } from "../../../api/api";

export default function AccountUpdatePasswordPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [postBody, setPostBody] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const processUpdate = () => {
    const api = new Api();
    api
      .changePassword(postBody)
      .then(() => {
        dispatch(setLoginMessage("Your password was successfully updated."));
        logoutProps.OnLogoutClicked(router);
      })
      .catch(() => {
        // This is intentional
      });
  };

  return (
    <>
      <UpdatePasswordView
        onUpdate={(data) => {
          setPostBody(data);
          setShowModal(true);
        }}
      />
      <CustomModal
        secondaryButtonText={"Cancel"}
        buttonText={"Update"}
        onClickSecondaryButton={() => {
          setShowModal(false);
        }}
        onClickCloseButton={() => {
          setShowModal(false);
        }}
        onClickButton={() => {
          processUpdate();
        }}
        open={showModal}
        buttonSx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
        reverseButton={isMobile}
        sx={{
          "& .MuiPaper-root": {
            top: { xs: "71px", md: "87px" },
            position: { xs: "absolute", md: "absolute" },
            m: 2,
          },
          "& .MuiDialogContent-root": {
            padding: "16px !important",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 500, width: "calc(100% - 20px)" }}
        >
          Are you sure to change password?
        </Typography>
      </CustomModal>
    </>
  );
}

AccountUpdatePasswordPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <UpdateLoginLayout pageTitle="Update Password">{page}</UpdateLoginLayout>
    </Provider>
  );
};
