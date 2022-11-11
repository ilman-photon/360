import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import MessagingCardDetailView from "./MessagingCardDetailView";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StyledInput from "../../atoms/Input/input";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";
import AttachmentFile from "./AttachmentFile";
import NewMessageDialog from "./NewMessageDialog";

export const MessageDetailsMobileView = ({
  data,
  addAttachments,
  handleAssetDownload,
  attachmentsSource,
  openDeletedDialog,
  showDetail,
  onCloseDetailMsg,
  isSelectedMsg,
  isDesktop,
  onDiscardMessage = () => {},
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  const getDraftContentValue = () => {
    let message = "";
    data?.messages?.map((item) => {
      console.log(item?.isDraft !== null && item?.isDraft);
      if (item?.isDraft !== null && item?.isDraft) {
        message = item.message;
      }
    });
    return message;
  };

  return (
    <Box
      className={styles.detailViewMobileContainer}
      sx={{
        display: showDetail ? "block" : "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F4F4F4",
          height: "65px",
          gap: "16px",
          padding: "10px 25px",
          alignItems: "center",
        }}
        onClick={() => onCloseDetailMsg()}
      >
        <ArrowBackIosIcon />
        <Typography
          sx={{
            fontFamily: "Bw Nista Geometric DEMO",
            fontSize: "16px",
            fontWeight: "400",
            fontStyle: "normal",
            color: "#003B4A",
            lineHeight: "16px",
          }}
        >
          {t("messagingText")}
        </Typography>
      </Box>
      <Box sx={{ padding: "16px" }}>
        {data?.messages?.length > 1 && (
          <Box className={styles.detailContentHeaderMobileView}>
            <Typography
              sx={{
                fontFamily: "Bw Nista Geometric DEMO",
                fontSize: "16px",
                fontWeight: "400",
                fontStyle: "normal",
                color: "#003B4A",
                lineHeight: "32px",
              }}
            >
              {data?.subject}
            </Typography>
            <DeleteOutlinedIcon onClick={() => openDeletedDialog()} />
          </Box>
        )}
        <Box
          className={
            data?.messages?.length > 1
              ? styles.cardDetailViewContainer
              : styles.cardDetailDraftNewMsgContainer
          }
        >
          {data?.messages?.length > 1 ? (
            <>
              {data?.messages?.map((item) => {
                return (
                  <MessagingCardDetailView
                    key={item.id}
                    data={item}
                    handleAssetDownload={handleAssetDownload}
                  />
                );
              })}

              <Box
                className={styles.messagesTextAreaContent}
                sx={{
                  background: "#F4F4F4",
                  ".MuiFormControl-root": {
                    backgroundColor: "#F4F4F4",
                  },
                }}
              >
                <StyledInput
                  placeholder={`${t("writeMessages")}*`}
                  value={getDraftContentValue()}
                  multiline
                  rows={2}
                  maxRows={3}
                  ref={addAttachments}
                  type="file"
                  hidden
                  sx={{
                    width: "100%",
                    marginTop: "8px",
                    ".MuiTextField-root": {
                      width: "100%",
                    },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderStyle: "unset",
                      borderWidth: "0px",
                    },
                  }}
                />
                <AttachmentFile
                  attachmentsSource={attachmentsSource}
                  handleAssetDownload={handleAssetDownload}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  onClick={() => {
                    addAttachments.current.click();
                  }}
                  sx={{
                    gap: "5px",
                    textTransform: "capitalize",
                    border: "1px solid #003B4A",
                    margin: "8px 0",
                    borderRadius: "30px",
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
                <Button
                  sx={{ color: "#424747" }}
                  data-testId="send-reply-button"
                >
                  <SendOutlinedIcon />
                </Button>
              </Box>
            </>
          ) : (
            <NewMessageDialog
              isDesktop={isDesktop}
              isDraft={data?.messages?.length === 1}
              isSelectedMsg={isSelectedMsg}
              valueText={getDraftContentValue()}
              onAddAttachFile={handleAssetDownload}
              refAttachments={addAttachments}
              attachmentsSource={attachmentsSource}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MessageDetailsMobileView;
