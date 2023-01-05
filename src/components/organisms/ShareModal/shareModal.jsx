import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import {
  DialogActions,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import StyledInput from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  setFailureCallback,
  setOpenModal,
  setShowToastMessage,
  setSuccessCallback,
  submitShareModal,
} from "../../../store/share";
import moment from "moment";
import { Regex } from "../../../utils/regex";

export function getDynamicShareContent(data) {
  switch (data.type) {
    case "prescription":
      return (
        <>
          <Box sx={{ width: "100%" }} className={styles.dialogSubContent}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5.5}>
                <Typography className={styles.prescriptionTitle} tabIndex={0}>
                  {`Prescribed on: ${data.date}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6.5}>
                <Typography className={styles.prescriptionBold} tabIndex={0}>
                  Prescribed by: &nbsp;
                  <Typography className={styles.prescriptionMedium}>
                    {data.prescribedBy}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={styles.prescriptionBold} tabIndex={0}>
                  Expires on: &nbsp;
                  <Typography className={styles.prescriptionMedium}>
                    {data.expirationDate}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      );
    case "medication-prescription":
      return (
        <>
          <Box sx={{ width: "100%" }} className={styles.dialogSubContent}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography className={styles.prescriptionTitle} tabIndex={0}>
                  {data.prescription}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={styles.prescriptionBold} tabIndex={0}>
                  Prescribed on: &nbsp;
                  <Typography className={styles.prescriptionMedium}>
                    {data.date}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={styles.prescriptionBold} tabIndex={0}>
                  Prescribed by: &nbsp;
                  <Typography className={styles.prescriptionMedium}>
                    {data.prescribedBy}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={styles.prescriptionBold} tabIndex={0}>
                  Dose: &nbsp;
                  <Typography className={styles.prescriptionMedium}>
                    {data.dose}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={styles.prescriptionBold} tabIndex={0}>
                  Expires on: &nbsp;
                  <Typography className={styles.prescriptionMedium}>
                    {data.expirationDate}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      );
    case "health-record":
      return (
        <>
          <Box sx={{ width: "100%" }} className={styles.dialogSubContent}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography className={styles.medicationTitle} tabIndex={0}>
                  {`Medical Record - ${new moment(data.date).format(
                    "MM/DD/YYYY"
                  )}`}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={styles.prescriptionBold} tabIndex={0}>
                  Last Updated: &nbsp;
                  <Typography className={styles.prescriptionMedium}>
                    {`${new moment(data.date).format("MM/DD/YYYY")}`}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      );
    case "care-plan":
      const formatDate = data.date
        ? moment(data.date).format("DD/MM/YYYY")
        : "";
      return (
        <>
          <Box sx={{ width: "100%" }} className={styles.dialogSubContent}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography className={styles.myCareTitle} tabIndex={0}>
                  {data.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography className={styles.prescriptionBold} tabIndex={0}>
                  Date: &nbsp;
                  <Typography className={styles.prescriptionMedium}>
                    {formatDate}
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      );
  }
}

function ShareModal() {
  const { handleSubmit, control, setError, setValue } = useForm();
  const dispatch = useDispatch();

  const shareModalData = useSelector((state) => state?.share?.shareModalData);
  const openModal = useSelector((state) => state?.share?.openModal);
  const modalContent = useSelector((state) => state?.share?.modalContent);
  const successCallback = useSelector((state) => state?.share?.successCallback);
  const failureCallback = useSelector((state) => state?.share?.failureCallback);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    if (openModal) {
      setValue("email", "");
      setValue("message", "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal]);

  const onSubmit = (data) => {
    if (data?.email.length == "") {
      setError("email", {
        type: "custom",
        message: "This is a required field",
      });
    } else if (
      Regex.REGEX_PHONE_NUMBER.test(data.email) ||
      Regex.emailValidation.test(data.email)
    ) {
      // Call share API
      onCallShareAPI({
        patientUserName: userData.username || "",
        documentId: shareModalData.id || "",
        email: data?.email,
        messageSubject: data?.message,
        documentType: shareModalData.type || "",
      });
    } else {
      setError("email", {
        type: "custom",
        message: "Incorrect email or phone number format",
      });
    }
  };

  const onCallShareAPI = async (postBody) => {
    const { payload } = await dispatch(submitShareModal({ payload: postBody }));

    dispatch(setOpenModal(false));

    if (payload.success) {
      if (successCallback) {
        await successCallback({ message: shareModalData?.successPostmessage });
        dispatch(setShowToastMessage(true));
        dispatch(setSuccessCallback(() => {}));
      }
    } else {
      if (failureCallback) {
        await failureCallback();
        dispatch(setFailureCallback(() => {}));
      }
    }
  };

  const inputStyle = {
    "&.MuiFormControl-root": {
      width: "100%",
    },
    ".MuiFilledInput-input": {
      fontFamily: "Museo Sans",
      color: "#6C6C6C !important",
      fontSize: "16px",
      lineHeight: "12px",
      width: "100%",
    },
    ".MuiInputLabel-root": {
      fontSize: "16px",
      color: "#303030 !important",
      fontStyle: "normal",
      fontWeight: "400",
    },
  };

  return (
    <>
      <Dialog
        open={openModal}
        aria-labelledby="share-dialog-title"
        aria-describedby="share-dialog-description"
        sx={{
          zIndex: 3000,
        }}
        maxWidth="md"
        aria-label={shareModalData?.title}
        role={"alertdialog"}
        className={styles.dialogContainer}
      >
        <DialogTitle
          id="share-dialog-title"
          sx={{
            marginBottom: "16px",
          }}
        >
          <Box
            aria-label={`${shareModalData?.title} heading`}
            tabIndex={0}
            className={styles.dialogShareHeader}
          >
            <Typography className={styles.dialogTitle}>
              {shareModalData?.title}
            </Typography>
          </Box>
          <IconButton
            aria-label="close"
            onClick={() => {
              dispatch(setOpenModal(false));
            }}
            sx={{
              position: "absolute",
              right: "14px",
              top: "14px",
              padding: 0,
            }}
          >
            <CloseIcon
              sx={{
                width: "24px",
                height: "24px",
                color: "#000000",
              }}
            ></CloseIcon>
          </IconButton>
        </DialogTitle>

        <DialogContent
          id="share-dialog-description"
          className={styles.dialogShareContainer}
          sx={{
            width: "500px",
            "@media (max-width: 992px)": {
              width: "auto",
            },
          }}
        >
          <Stack className={styles.dialogDyamicContent}>{modalContent}</Stack>
          <Grid
            className={styles.dialogStepInfoContainer}
            container
            spacing={2}
          >
            <Grid item xs={12} md={4}>
              <Stack direction={"row"} tabIndex={0}>
                <Box className={styles.stepCircle}>1</Box>
                <Typography className={styles.stepText}>
                  We will email an invitation to someone you trust
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction={"row"} tabIndex={0}>
                <Box className={styles.stepCircle}>2</Box>
                <Typography className={styles.stepText}>
                  They receive the access code.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction={"row"} tabIndex={0}>
                <Box className={styles.stepCircle}>3</Box>
                <Typography className={styles.stepText}>
                  They can securely access your shared information.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Stack
            direction={"row"}
            className={styles.dialogSecurityTransmitContainer}
          >
            <LockOutlinedIcon sx={{ color: "#003B4A" }} />
            <Stack>
              <Typography className={styles.dialogSecurityTitle} tabIndex={0}>
                Securely Transmit Your Information to a Third Party
              </Typography>
              <Typography
                className={styles.dialogSecurityDirection}
                tabIndex={0}
              >
                You can now transfer your medical records, care plan document as
                well as prescriptions to any other provider, family or friends
                securely.
              </Typography>
            </Stack>
          </Stack>
          <DialogActions
            sx={{
              width: "100%",
              padding: "16px 0 0 0",
            }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      aria-label="Email, Direct Email or Phone"
                      label="Email, Direct Email or Phone"
                      id="email"
                      maxLength={254}
                      variant="filled"
                      value={value}
                      data-testid={"share-email"}
                      onChange={(event) => {
                        onChange(event);
                      }}
                      required
                      sx={{ ...inputStyle }}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  );
                }}
              />
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      aria-label="Message subject"
                      label="Message subject"
                      id="message"
                      maxLength={254}
                      variant="filled"
                      value={value}
                      data-testid={"share-message"}
                      onChange={(event) => {
                        onChange(event);
                      }}
                      sx={{ ...inputStyle }}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  );
                }}
              />
              <StyledButton
                theme="patient"
                mode="primary"
                size="small"
                type="submit"
                gradient={false}
                data-testid="share-btn"
                aria-label={"Share"}
                className={styles.shareButton}
                sx={{
                  marginTop: "16px",
                  padding: "13px 20px",
                  width: "162px",
                  alignSelf: "end",
                  "@media screen and (max-width: 768px)": {
                    width: "100%",
                  },
                }}
              >
                Share
              </StyledButton>
            </form>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ShareModal;
