import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "next-i18next";
import {
  Box,
  Button,
  Typography,
  Autocomplete,
  IconButton,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import { Controller, useForm, useFormState } from "react-hook-form";
import StyledInput, { StyledRedditField } from "../../atoms/Input/input";
import AttachmentFile from "./AttachmentFile";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import * as Styled from "./ListAutoCompleteStyled";
import { colors } from "../../../../src/styles/theme";
import { useEffect } from "react";

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

  const MESSAGE_DEFAULT_VALUE = {
    name: "",
    subject: "",
    message: "",
  };

  const { handleSubmit, control, clearErrors, setFocus, getValues, reset } =
    useForm({
      defaultValues: MESSAGE_DEFAULT_VALUE,
    });

  const { errors } = useFormState({
    control,
  });
  const [attachments, setAttachments] = useState([]);

  const [isEmptyName, setEmptyName] = useState(false);
  const [isEmptyMessage, setEmptyMessage] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [nameProvider, setNameProvider] = useState([]);
  const [showInfoName, setShowInfoName] = useState(false);

  useEffect(() => {
    setAttachments(attachmentsSource);
  }, [attachmentsSource]);

  const onClickCheck = () => {
    setClicked(true);
  };

  const resetInputAttachments = () => {
    refAttachments.files = null;
  };

  const resetForms = () => {
    setNameProviderValue([]);
    reset();
    setAttachments([]);
    resetInputAttachments();
  };

  const onSubmit = (data) => {
    onSendMessage(data);
    resetForms();
  };

  const onSubmitDraft = (data) => {
    onSaveToDraft(data);
    resetForms();
  };

  const onError = () => {
    const firstErrorKey = Object.keys(errors).find((key) => errors[key]);
    if (firstErrorKey) {
      setFocus(firstErrorKey);
    }
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
        {t("thisFieldRequired")}
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
  };

  const onCloseClicked = () => {
    setAttachments([]);
    clearErrors();
    handleClosed();
    reset();
    resetInputAttachments();
  };

  function getNewMessageContentView() {
    return (
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: !isDraft && !isSelectedMsg?.active ? "20px 16px" : "0px",
          }}
        >
          {!isDraft && !isSelectedMsg?.active && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: isDesktop ? "none" : "1px solid #D4D4D4",
              }}
            >
              <DialogContentText
                tabIndex={0}
                id="alert-dialog-description"
                sx={{
                  fontFamily: "Museo Sans",
                  fontSize: "22px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#003B4A",
                  lineHeight: "30px",
                }}
              >
                {t("newMessageTitle")}
              </DialogContentText>
              <IconButton
                onClick={onCloseClicked}
                tabIndex={0}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Box>
          )}
          <Box
            sx={{
              background: `${errors.name ? "#FBF4F4" : "transparent"}`,
              border: `${
                errors.name ? "2px solid #B93632" : "1px solid #bdbdbd"
              }`,
            }}
            className={styles.typeNameContainer}
          >
            <Box className={styles.searchIcon}>
              <SearchIcon sx={{ width: "24px" }} />
            </Box>
            <Styled.InputWrapper
              sx={{
                // ".MuiInputBase-root.Mui-error": {
                backgroundColor: errors.name ? "#FBF4F4" : "transparent",
                // },
              }}
            >
              <Controller
                name="name"
                control={control}
                render={({
                  fieldState: { error },
                  field: { onChange, value, ref },
                }) => {
                  return (
                    <Autocomplete
                      multiple
                      id="providerName"
                      options={providerData}
                      filterSelectedOptions
                      getOptionLabel={(option) => option?.name}
                      onChange={(_event, value) => {
                        if (value.length < 2) onChange(value);
                      }}
                      isOptionEqualToValue={(option) => option?.name}
                      renderInput={(params) => {
                        console.log({ errors });
                        return (
                          <StyledRedditField
                            {...params}
                            id="name"
                            label="Type a name"
                            sx={{
                              width: "100%",
                              ".MuiFilledInput-root": {
                                backgroundColor: "#FFF",
                              },
                              ".MuiFormHelperText-root.Mui-error": {
                                fontSize: "0.75rem",
                              },
                            }}
                            inputRef={ref}
                            error={!!error}
                            size="small"
                            variant="standard"
                            required
                            inputProps={{
                              ...params.inputProps,
                              "aria-label": `${"Type a Name"} ${
                                error ? `, ${error.message}` : ""
                              }`,
                            }}
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
                          background: "transparent",
                        },
                        ".MuiAutocomplete-tag": {
                          padding: "12px 5px",
                          background: "#EEF5F7",
                          borderRadius: "4px",
                          height: "30px",
                        },
                        ".MuiInputLabel-root": {
                          fontSize: "12px",
                          color: "#003B4A",
                        },
                        ".MuiInput-root:hover:not(.Mui-disabled):before": {
                          borderBottom: "none",
                        },
                      }}
                      error={!!error}
                      required
                    />
                  );
                }}
                rules={{ required: t("thisFieldRequired") }}
              />
            </Styled.InputWrapper>
          </Box>
          {renderMandatoryFieldError(errors.name)}
          {getValues("name").length > 0 && (
            <Typography
              tabIndex={0}
              sx={{
                fontFamily: "Museo Sans",
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
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => {
              return (
                <StyledInput
                  aria-label="Subject"
                  label={"Subject"}
                  id="subject"
                  maxLength={254}
                  variant="filled"
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                  }}
                  sx={{
                    ".MuiFilledInput-input": {
                      fontFamily: "Museo Sans",
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
                  inputProps={{
                    "aria-label": `${"Subject"} ${
                      error ? `, ${error.message}` : ""
                    }`,
                  }}
                  inputRef={ref}
                />
              );
            }}
            rules={{ required: t("thisFieldRequired") }}
          />
          <Box
            sx={{
              marginTop: "0 !important",
              border: `${
                errors.message ? "2px solid #B93632" : "1px solid #bdbdbd"
              }`,
            }}
            className={styles.messagesTextAreaContent}
          >
            <Controller
              name="message"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    aria-label="Write a message"
                    label={t("writeMessages")}
                    id="message"
                    multiline
                    rows={3}
                    maxLength={254}
                    ref={refAttachments}
                    variant="filled"
                    value={value}
                    onChange={(event) => {
                      onChange(event);
                      if (isClicked) {
                        setEmptyMessage(event.target.value.length === 0);
                      }
                    }}
                    sx={{
                      width: "100%",
                      ".MuiFilledInput-input": {
                        fontFamily: "Museo Sans",
                        color: "#6C6C6C !important",
                        fontSize: "16px",
                        lineHeight: "12px",
                      },
                      ".MuiInputLabel-root": {
                        fontSize: "12px",
                      },
                      ".MuiFilledInput-root": {
                        border: "unset",
                        height: "unset",
                        // height: isSelectedMsg?.active ? "450px" : "52px",
                      },
                    }}
                    error={!!error}
                    required
                    inputRef={ref}
                    inputProps={{
                      "aria-label": `${"Message"} ${
                        error ? `, ${error.message}` : ""
                      }`,
                    }}
                    // helperText={error ? error.message : null}
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (attachments.length === 0 && !value)
                      return t("thisFieldRequired");
                    else return true;
                  },
                },
              }}
            />
            <AttachmentFile attachmentsSource={attachments} />
          </Box>
          {renderMandatoryFieldError(errors.message)}
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: isDesktop || isDraft ? "space-between" : "center",
            flexDirection: isDesktop || isDraft ? "row" : "column",
            position: isDesktop || isDraft ? "unset" : "absolute",
            bottom: isDesktop || isDraft ? "unset" : "0px",
            width: isDesktop || isDraft ? "auto" : "100%",
            padding: isDesktop || isDraft ? "20px 16px" : "8px",
          }}
        >
          <Button
            data-testId="new-message-add-attachment-button"
            onClick={() => {
              refAttachments.current.click();
            }}
            sx={{
              gap: "5px",
              textTransform: "lowercase",
              border: "1px solid #003B4A",
              margin: "8px 0",
              borderRadius: "30px",
              height: "46px",
              minWidth: isDesktop || isDraft ? "64px" : "100%",
            }}
          >
            <AttachmentOutlinedIcon
              tabIndex={0}
              aria-label={t("addAttachments")}
              sx={{
                color: "#0000008A",
                width: "22px",
                height: "22px",
              }}
            />
            <Typography
              variant="bodyRegularSemiBold"
              sx={{
                color: colors.primaryButton,
                ":first-letter": {
                  textTransform: "capitalize",
                },
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
                  onClick={() => onSubmitDraft(getValues())}
                  data-testId="draft-new-message"
                  aria-label={t("moveToDraft")}
                  tabIndex={0}
                  sx={{
                    color: "#007E8F",
                    fontSize: "16px",
                    textTransform: "lowercase",
                    fontStyle: "normal",
                    width: isDesktop || isDraft ? "fitContent" : "100%",
                  }}
                >
                  <Typography
                    variant="bodyRegularSemiBold"
                    sx={{
                      ":first-letter": {
                        textTransform: "capitalize",
                      },
                    }}
                  >
                    {t("moveToDraft")}
                  </Typography>
                </Button>
                <Button
                  type="submit"
                  onClick={onClickCheck}
                  tabIndex={0}
                  aria-label={t("sendText")}
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
                    tabIndex={0}
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
          close={onCloseClicked}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiDialog-container .MuiPaper-root ": {
              width: "700px",
              position: "absolute",
              // top: "116px",
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
