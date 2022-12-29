import * as React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "next-i18next";
import {
  Box,
  Button,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import { Controller, useForm, useFormState } from "react-hook-form";
import StyledInput from "../../atoms/Input/input";
import AttachmentFile from "./AttachmentFile";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import * as Styled from "./ListAutoCompleteStyled";

export const NewMessageDialog = ({
  providerData = [],
  opened,
  handleClosed = () => {
    //this is intentional
  },
  refAttachments,
  attachmentsSource,
  onSaveToDraft = () => {
    //this is intentional
  },
  onSendMessage = () => {
    //this is intentional
  },
  isDesktop,
  isDraft,
  isSelectedMsg,
  valueText,
  onDiscardMessage = () => {
    //this is intentional
  },
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  const { handleSubmit, control, watch, setValue, getValues } = useForm({
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  const nameRef = React.useRef(null);
  const subjectRef = React.useRef(null);
  const messageRef = React.useRef(null);
  const { errors, isSubmitting } = useFormState({
    control,
  });

  React.useEffect(() => {
    if (errors.name) {
      nameRef.current?.focus();
    } else if (errors.subject) {
      subjectRef.current?.focus();
    } else if (errors.message) {
      messageRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  const [watchedName, watchedMessage] = watch(["name", "message"]);

  const [isEmptyName, setEmptyName] = useState(false);
  const [isEmptyMessage, setEmptyMessage] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [nameProvider, setNameProvider] = useState([]);
  const [showInfoName, setShowInfoName] = useState(false);

  const onClickCheck = () => {
    setClicked(true);
    setEmptyName(watchedName.length === 0);
    setEmptyMessage(watchedMessage.length === 0);
    setValue("name", "");
    setValue("subject", "");
    setValue("message", "");
  };

  const onSubmit = (data) => {
    onSendMessage(data);
  };

  function renderMandatoryFieldError(isError) {
    return (
      <Typography
        className={styles.errorText}
        variant={"bodyMedium"}
        sx={{
          visibility: isError ? "visible" : "hidden",
          fontSize: "12px",
          color: "#B93632",
          marginLeft: "16px",
          marginTop: "-12px",
          position: isError ? "unset" : "absolute",
        }}
      >
        This field is required
      </Typography>
    );
  }

  const setNameProviderValue = (value) => {
    if (value?.length == 1) {
      setShowInfoName(true);
      setNameProvider(value);
    } else if (value?.length == 0) {
      setShowInfoName(false);
      setNameProvider(value);
    }
    setValue("name", value);
  };

  function Tag(props) {
    const { label, onDelete, ...other } = props;
    return (
      <div {...other}>
        <span>{label}</span>
        <CloseIcon onClick={onDelete} />
      </div>
    );
  }

  Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  function getNewMessageContentView() {
    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: !isDraft && !isSelectedMsg?.active ? "20px 24px" : "0px",
          }}
        >
          {!isDraft && !isSelectedMsg?.active && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: isDesktop ? "none" : "1px solid #D4D4D4",
              }}
            >
              <DialogContentText
                id="alert-dialog-description"
                sx={{
                  fontFamily: "Bw Nista Geometric DEMO",
                  fontSize: "22px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#003B4A",
                  lineHeight: "30px",
                  padding: "10px",
                }}
              >
                {t("newMessageTitle")}
              </DialogContentText>
              <CloseIcon onClick={handleClosed} />
            </Box>
          )}
          <Box
            sx={{
              background: `${isEmptyName ? "#FBF4F4" : "transparent"}`,
              border: `${
                isEmptyName ? "2px solid #B93632" : "1px solid #bdbdbd"
              }`,
            }}
            className={styles.typeNameContainer}
          >
            <Box className={styles.searchIcon}>
              <SearchIcon sx={{ width: "24px" }} />
            </Box>
            <Styled.InputWrapper>
              {/* <Styled.StyledTag key={index} label={value} {...getTagProps()} /> */}
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <Autocomplete
                      multiple
                      id="providerName"
                      options={providerData}
                      getOptionLabel={(option) => option?.name}
                      onChange={(event, value) => {
                        setNameProviderValue(value, event);
                      }}
                      value={nameProvider}
                      renderInput={(params) => {
                        return (
                          <TextField
                            {...params}
                            variant="standard"
                            label="Type a Name"
                            required
                          />
                        );
                      }}
                      sx={{
                        width: "100%",
                        ".MuiAutocomplete-endAdornment": {
                          display: "none",
                        },
                        ".MuiInput-underline:before, MuiInput-underline:hover, MuiInput-underline:focus, .MuiInput-underline:after":
                          {
                            borderBottom: "none",
                          },
                        ".MuiInput-input": {
                          padding: "0px !important",
                          height: "52px",
                          background: "transparent",
                        },
                        ".MuiAutocomplete-tag": {
                          padding: "12px 5px",
                          background: "#EEF5F7",
                          borderRadius: "4px",
                          height: "30px",
                          top: "7px",
                        },
                        ".MuiInputLabel-root.Mui-focused": {
                          color: "#003B4A",
                          top: "3px",
                        },
                        ".MuiInputLabel-root": {
                          fontSize: "12px",
                          color: "#003B4A",
                        },
                        ".MuiInput-root:hover:not(.Mui-disabled):before": {
                          borderBottom: "none",
                        },
                        ".MuiInput-root": {
                          marginTop: "0px !important",
                        },
                      }}
                      error={!!error}
                      required
                      inputRef={nameRef}
                    />
                  );
                }}
                rules={{ required: t("thisFieldRequired") }}
              />
            </Styled.InputWrapper>
          </Box>
          {renderMandatoryFieldError(isEmptyName)}
          {showInfoName && (
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "16px",
              }}
            >
              Enter recipient’s name or email (only one recipient)
            </Typography>
          )}
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <StyledInput
                  aria-label="Subject"
                  label={t("subject")}
                  id="subject"
                  maxLength={254}
                  variant="filled"
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                  }}
                  sx={{
                    ".MuiFilledInput-input": {
                      fontFamily: "Libre Franklin",
                      color: "#6C6C6C !important",
                      fontSize: "16px",
                      lineHeight: "12px",
                    },
                    ".MuiInputLabel-root": {
                      fontSize: "12px",
                    },
                    "& .MuiFilledInput-root.Mui-error": {
                      border: "2px solid #B93632",
                    },
                  }}
                  error={!!error}
                  helperText={error ? error.message : null}
                  required
                  inputRef={subjectRef}
                />
              );
            }}
            rules={{ required: t("thisFieldRequired") }}
          />
          <Box
            sx={{
              padding: "0 0 8px !important",
              marginTop: "0 !important",
              border: `${
                isEmptyMessage ? "2px solid #B93632" : "1px solid #bdbdbd"
              }`,
              background: `${isEmptyMessage ? "#FBF4F4" : "transparent"}`,
            }}
            className={styles.messagesTextAreaContent}
          >
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
                    aria-label="Write a message"
                    label={t("writeMessages")}
                    id="message"
                    maxLength={254}
                    ref={refAttachments}
                    variant="filled"
                    value={valueText !== "" ? valueText : value}
                    onChange={(event) => {
                      onChange(event);
                      if (isClicked) {
                        setEmptyMessage(event.target.value.length === 0);
                      }
                    }}
                    sx={{
                      width: "100%",
                      ".MuiFilledInput-input": {
                        fontFamily: "Libre Franklin",
                        color: "#6C6C6C !important",
                        fontSize: "16px",
                        lineHeight: "12px",
                      },
                      ".MuiInputLabel-root": {
                        fontSize: "12px",
                      },
                      ".MuiFilledInput-root": {
                        border: "unset",
                        height: isSelectedMsg?.active ? "450px" : "52px",
                      },
                    }}
                    error={!!error}
                    required
                    inputRef={messageRef}
                    // helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{ required: t("thisFieldRequired") }}
            />
            <AttachmentFile attachmentsSource={attachmentsSource} />
          </Box>
          {renderMandatoryFieldError(isEmptyMessage)}
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: isDesktop || isDraft ? "space-between" : "center",
            flexDirection: isDesktop || isDraft ? "row" : "column",
            position: isDesktop || isDraft ? "unset" : "absolute",
            bottom: isDesktop || isDraft ? "unset" : "0px",
            width: isDesktop || isDraft ? "auto" : "100%",
            padding: isDesktop || isDraft ? "8px" : "20px 16px",
          }}
        >
          <Button
            data-testId="new-message-add-attachment-button"
            onClick={() => {
              refAttachments.current.click();
            }}
            sx={{
              gap: "5px",
              textTransform: "capitalize",
              border: "1px solid #003B4A",
              margin: "8px 0",
              borderRadius: "30px",
              height: "46px",
              minWidth: isDesktop || isDraft ? "64px" : "100%",
            }}
          >
            <AttachmentOutlinedIcon
              sx={{
                color: "#0000008A",
                width: "22px",
                height: "22px",
              }}
            />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontStyle: "normal",
                color: "#007E8F",
                lineHeight: "18px",
              }}
            >
              {t("addAttachments")}
            </Typography>
          </Button>
          <Box
            sx={{
              display: "flex",
              gap: isDesktop || isDraft ? "28px" : "10px",
              flexDirection: isDesktop || isDraft ? "row" : "column-reverse",
              width: isDesktop || isDraft ? "fitContent" : "100%",
            }}
          >
            {!isDraft && !isSelectedMsg?.active ? (
              <>
                <Button
                  onClick={() => onSaveToDraft(getValues())}
                  data-testId="draft-new-message"
                  sx={{
                    color: "#007E8F",
                    textTransform: "capitalize",
                    fontSize: "16px",
                    fontStyle: "normal",
                    width: isDesktop || isDraft ? "fitContent" : "100%",
                  }}
                >
                  {t("moveToDraft")}
                </Button>
                <Button
                  type="submit"
                  onClick={onClickCheck}
                  data-testId="send-new-message"
                  sx={{
                    border: "1px solid #007E8F",
                    borderRadius: "30px",
                    color: "#FFFFFF",
                    textTransform: "capitalize",
                    width: isDesktop || isDraft ? "93px" : "100%",
                    height: "46px",
                    fontSize: "16px",
                    backgroundColor: "#007E8F",
                    fontStyle: "normal",
                    ":hover": {
                      backgroundColor: "#007E8F",
                    },
                    display: "flex",
                    gap: "5px",
                    minWidth: isDesktop || isDraft ? "64px" : "100%",
                  }}
                >
                  <SendOutlinedIcon />
                  {t("sendText")}
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={() => onDiscardMessage()}
                  sx={{
                    gap: "5px",
                    textTransform: "capitalize",
                    border: "1px solid #003B4A",
                    margin: "8px 0",
                    borderRadius: "30px",
                  }}
                >
                  <DeleteOutlinedIcon
                    sx={{
                      color: "#0000008A",
                      width: "22px",
                      height: "22px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                      fontStyle: "normal",
                      color: "#007E8F",
                      lineHeight: "18px",
                    }}
                  >
                    {t("discardBtn")}
                  </Typography>
                </Button>
                <Button
                  sx={{ color: "#424747" }}
                  type="submit"
                  onClick={onClickCheck}
                >
                  <SendOutlinedIcon />
                </Button>
              </>
            )}
          </Box>
        </DialogActions>
      </form>
    );
  }

  return (
    <>
      {isDesktop ? (
        <Dialog
          open={opened}
          close={handleClosed}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiDialog-container .MuiPaper-root ": {
              width: "700px",
              position: "absolute",
              top: "116px",
            },
            ".MuiDialogActions-root": {
              padding: "15px",
            },
          }}
        >
          {getNewMessageContentView()}
        </Dialog>
      ) : (
        <Box
          className={styles.mobileNewMessageContainer}
          sx={{ display: opened ? "block" : "none" }}
        >
          {getNewMessageContentView()}
        </Box>
      )}
      {isDraft && isSelectedMsg.active && (
        <Box sx={{ display: "block" }}>{getNewMessageContentView()}</Box>
      )}
    </>
  );
};

export default NewMessageDialog;
