import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
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

  const [replyContent, setReplyContent] = React.useState("");

  const getDraftContentValue = () => {
    let message = "";
    data?.messages?.map((item) => {
      if (item.isDraft) {
        message = item.message;
      }
    });
    return message;
  };

  // const messageNotEmpty = data?.messages?.length > 0 && !data.messages[0].isDraft

  return (
    <Box
      className={styles.detailViewContainer}
      data-testId="messaging-container-detail"
    >
      {/* {messageNotEmpty && ( */}
      <Box className={styles.detailContentHeaderView}>
        <Typography
          tabIndex={0}
          sx={{
            fontFamily: "Museo Sans",
            fontSize: "22px",
            fontWeight: "400",
            fontStyle: "normal",
            color: "#003B4A",
            lineHeight: "32px",
          }}
        >
          Follow-up from past visit/message
        </Typography>
        <IconButton
          tabIndex={0}
          aria-label={"Delete Button"}
          onClick={() => openDeletedDialog(data._id, data)}
        >
          <DeleteOutlinedIcon data-testId="delete-message-icon" />
        </IconButton>
      </Box>
      {/* )} */}
      <Stack
        sx={{
          p: 2,
          border: "1px solid #D4D4D4",
          borderRadius: "4px",
        }}
      >
        <Box
          className={
            data?.messages?.length > 1
              ? styles.cardDetailViewContainer
              : styles.cardDetailDraftNewMsgContainer
          }
        >
          {/* {messageNotEmpty ? ( */}
          <>
            {/* {data.messages.map((item) => {
                if (!item.isDraft) {
                  return ( */}
            <MessagingCardDetailView
              // key={item.id}
              // data={item}
              data={data}
              handleAssetDownload={handleAssetDownload}
              onDownloadAllAttachmentClicked={onDownloadAllAttachmentClicked}
            />
            {/* );
                }
              })} */}
            <Box
              tabIndex={0}
              aria-label={`${t("writeMessages")} Field`}
              className={styles.messagesTextAreaContent}
              sx={{
                ".MuiFormControl-root": {
                  backgroundColor: "#F4F4F4",
                },
              }}
            >
              <StyledInput
                placeholder={`${t("writeMessages")}*`}
                // value={getDraftContentValue()}
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                multiline
                minRows={2}
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
                tabIndex={0}
                aria-label={"Add Attachments button"}
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
                  tabIndex={0}
                  aria-label={"Add Attachments button"}
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
                tabIndex={0}
                aria-label={"Send Button"}
                sx={{ color: "#424747" }}
              >
                <SendOutlinedIcon />
              </Button>
            </Box>
          </>
          {/* ) : (
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
          )} */}
        </Box>
      </Stack>
    </Box>
  );
};

export default MessagingDetailContentView;
