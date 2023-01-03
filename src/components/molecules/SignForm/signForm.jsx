import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { StyledButton } from "../../../components/atoms/Button/button";
import StyledInput from "../../../components/atoms/Input/input";
import constants from "../../../utils/constants";
import styles from "./Style.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { Controller } from "react-hook-form";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SignForm({
  useFormProps,
  isEdit = false,
  isSubmitForm = false,
  isSigned = false,
  showRelationship = true,
  showDate = true,
  textInfo = "Signature of Patient, Parent or Legally Authorized Representative",
  textInfoPosition = "bottom",
  isReadOnlyDate = false,
  controlName = {
    sign: "sign",
    relationship: "relationship",
    date: "date",
  },
  customSignText = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedState, setIsSignedState] = useState(false);
  const signText = isSignedState ? (
    <Box sx={{ display: "flex" }}>
      {" "}
      <CheckCircleIcon sx={{ marginRight: "5px", height: "19.5px" }} />{" "}
      {customSignText ? customSignText : "Signed "}
    </Box>
  ) : customSignText ? (
    customSignText
  ) : (
    "Sign"
  );

  useEffect(() => {
    if (isSigned) {
      setIsSignedState(isSigned);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isRenderSignedUI() {
    const signButtonStyle = isSignedState
      ? styles.signedButton
      : styles.signButton;
    return (
      <Controller
        name={controlName.sign}
        control={useFormProps.control}
        aria-hidden={true}
        tabIndex={-1}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          const isError = error && error.message;
          return (
            <>
              <Dialog
                open={isOpen}
                sx={{
                  ".MuiPaper-root": {
                    width: "500px",
                  },
                  ".MuiDialogActions-root": {
                    padding: 2,
                  },
                }}
              >
                <DialogTitle sx={{ color: "#003B4A", fontSize: "22px" }}>
                  Third party tool will open here
                  <CloseIcon
                    sx={{ fontSize: "14px", float: "right" }}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  />
                </DialogTitle>
                <Box sx={{ padding: "0px 30px 30px" }}>
                  <span>Modal will open a third party tool to sign</span>
                </Box>
                <Divider variant="middle" />
                <Box
                  sx={{
                    height: "100px",
                    alignSelf: "center",
                    paddingTop: "15px",
                  }}
                >
                  <Button
                    data-testid={`${controlName.sign}-signed-button`}
                    onClick={() => {
                      setIsOpen(false);
                      onChange(!isSignedState);
                      setIsSignedState(!isSignedState);
                    }}
                  >
                    {customSignText ? customSignText : "Signed"}
                  </Button>
                </Box>
              </Dialog>
              <Grid
                item
                xs={4}
                sm={2}
                sx={{ display: "flex", padding: "10px !important" }}
              >
                {!isEdit ? (
                  <Box sx={{ width: "94px", margin: "0px -22px" }}>
                    <Box
                      className={styles.signLabel}
                      tabIndex={0}
                      aria-label="Sign label"
                    >
                      <span className={styles.signLabelTxt} aria-hidden={true}>
                        {customSignText ? customSignText : "Sign"}
                      </span>
                    </Box>
                  </Box>
                ) : (
                  <></>
                )}
                <Box
                  sx={{
                    direction: "column",
                    width: "90%",
                    maxWidth: "90%",
                    minHeight: "112px",
                  }}
                >
                  <Box
                    className={
                      isError
                        ? styles.buttonContainerError
                        : styles.buttonContainer
                    }
                    sx={{
                      marginTop: textInfoPosition == "none" ? "14px" : "0",
                    }}
                  >
                    {textInfoPosition == "top" && (
                      <span className={styles.signInfo} tabIndex={0}>
                        {textInfo}
                      </span>
                    )}
                    {!isEdit ? (
                      <StyledButton
                        data-testid={`${controlName.sign}-btn`}
                        disabled={isSubmitForm}
                        size={constants.SMALL}
                        mode={constants.PRIMARY}
                        theme={constants.PATIENT}
                        sxButton={signButtonStyle}
                        onClick={() => setIsOpen(true)}
                      >
                        {signText}
                      </StyledButton>
                    ) : (
                      <Box className={styles.disableSign}></Box>
                    )}
                    {textInfoPosition == "bottom" && (
                      <span className={styles.signInfo} tabIndex={0}>
                        {textInfo}
                      </span>
                    )}
                  </Box>
                  {isError ? (
                    <Typography className={styles.signErrorMessage}>
                      {error.message}
                    </Typography>
                  ) : (
                    <></>
                  )}
                </Box>
              </Grid>
            </>
          );
        }}
        rules={
          !isEdit
            ? {
                required:
                  "Please remember to provide an electronic signature in order to proceed with your request.",
              }
            : {}
        }
      />
    );
  }

  return (
    <Box>
      <Grid container columns={4} className={styles.signFormContainer}>
        {isRenderSignedUI()}
        <Grid
          item
          xs={4}
          sm={2}
          sx={{
            display: "flex",
            padding: "0 !important",
            marginTop: "30px",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          {showRelationship && (
            <Controller
              name={controlName.relationship}
              control={useFormProps.control}
              aria-hidden={true}
              tabIndex={-1}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    disabled={isEdit || isSubmitForm}
                    data-testid={`${controlName.relationship}-input`}
                    type="text"
                    id="relationship"
                    label="Relationship"
                    inputProps={{
                      "aria-label": "Relationship field",
                    }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    variant="filled"
                    helperText={error ? error.message : null}
                    required
                    sx={{
                      margin: "8px",
                      backgroundColor: "transparent",
                      width: { xs: "100%", sm: "50%" },
                      "& .MuiFilledInput-root": {
                        backgroundColor: "#fff",
                        "&:hover": {
                          backgroundColor: "#fff",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "#fff",
                        },
                      },
                      ".MuiFormHelperText-root.Mui-error": {
                        backgroundColor: "#F4F4F4",
                        margin: 0,
                        padding: "0 14px",
                      },
                    }}
                  />
                );
              }}
              rules={
                !isEdit
                  ? {
                      required: "This field is required",
                    }
                  : {}
              }
            />
          )}

          {showDate && (
            <Controller
              name={controlName.date}
              control={useFormProps.control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    disableFuture
                    disabled={isEdit || isSubmitForm}
                    type="dob"
                    id="dob"
                    readOnly={isReadOnlyDate}
                    inputProps={{
                      "aria-label": "Date field",
                      readOnly: isReadOnlyDate,
                      isTransparent: true,
                    }}
                    label="Date"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    dobWidth="100%"
                    dobWidthSm="50%"
                    required
                  />
                );
              }}
              rules={
                !isEdit
                  ? {
                      required: "This field is required",
                    }
                  : {}
              }
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
