import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import * as React from "react";
import MessagingCardDetailView from "./MessagingCardDetailView";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StyledInput from "../../atoms/Input/input";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";
import AttachmentFile from "./AttachmentFile";
import NewMessageDialog from "./NewMessageDialog";

export const MessagingDetailContentView = ({
  data,
  addAttachments,
  handleAssetDownload,
  attachmentsSource,
  openDeletedDialog,
  isSelectedMsg,
  onDiscardMessage = () => {
    //this is intentional
  },
  onDownloadAllAttachmentClicked = () => {
    //this is intentional
  },
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });

  const isDesktop = useMediaQuery("(min-width: 835px)");

  const getDraftContentValue = () => {
    let message = "";
    data?.messages?.map((item) => {
      if (item.isDraft) {
        message = item.message;
      }
    });
    return message;
  };

  return (
    <Box
      className={styles.detailViewContainer}
      data-testId="messaging-container-detail"
    >
      {data?.messages?.length > 0 && !data.messages[0].isDraft && (
        <Box className={styles.detailContentHeaderView}>
          <Typography
            sx={{
              fontFamily: "Bw Nista Geometric DEMO",
              fontSize: "22px",
              fontWeight: "400",
              fontStyle: "normal",
              color: "#003B4A",
              lineHeight: "32px",
            }}
          >
            {data.subject}
          </Typography>
          <DeleteOutlinedIcon
            data-testId="delete-message-icon"
            onClick={() => openDeletedDialog(data.id)}
          />
        </Box>
      )}
      <Box
        className={
          data?.messages?.length > 1
            ? styles.cardDetailViewContainer
            : styles.cardDetailDraftNewMsgContainer
        }
      >
        {data?.messages?.length > 0 && !data.messages[0].isDraft ? (
          <>
            {data.messages.map((item) => {
              if (item.isDraft) {
                return (
                  <MessagingCardDetailView
                    key={item.id}
                    data={item}
                    handleAssetDownload={handleAssetDownload}
                    onDownloadAllAttachmentClicked={
                      onDownloadAllAttachmentClicked
                    }
                  />
                );
              }
            })}
            <Box
              className={styles.messagesTextAreaContent}
              sx={{
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
              <Button sx={{ color: "#424747" }}>
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
            onDiscardMessage={onDiscardMessage}
          />
        )}
      </Box>
    </Box>
  );
};

export default MessagingDetailContentView;
