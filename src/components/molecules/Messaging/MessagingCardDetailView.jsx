import * as React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useTranslation } from "next-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import moment from "moment";
import { showOrReturnEmpty } from "../../../utils/viewUtil";

export const MessagingCardDetailView = ({
  key,
  data,
  handleAssetDownload,
  onDownloadAllAttachmentClicked,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });
  const isDesktop = useMediaQuery("(min-width: 834px)");

  const convertDate = (payload) => {
    let dateTime = "";
    if (payload !== "") {
      const convertedDate = new Date(payload);
      const month = convertedDate.toLocaleString("default", { month: "short" });
      const date = convertedDate.getDate();
      dateTime = `${month} ${date}`;
    }
    return dateTime;
  };

  const convertTime = (payload) => {
    let time = "";
    if (payload !== "") {
      const convertedDate = new moment(payload);
      time = convertedDate.format("hh:mm A");
    }
    return time;
  };

  const getProfilePicture = () => {
    return (
      <Box className={styles.profilePicture}>
        {data?.source ? (
          <Image
            src={data.source}
            alt={"profilePicture"}
            width={"100%"}
            height={"100%"}
          />
        ) : (
          <AccountCircleIcon
            sx={{
              color: "#757575",
              width: "44px",
              height: "44px",
            }}
          />
        )}
      </Box>
    );
  };

  const getSenderName = () => {
    if (data?.name) {
      return showOrReturnEmpty(data.name);
    } else {
      const employeeData = data?.messageReceipients?.find(
        (v) => v.recipientType === "SENDER"
      );
      if (employeeData) {
        return `${showOrReturnEmpty(employeeData.name)} ${showOrReturnEmpty(
          employeeData.lastName
        )}`;
      }
    }
  };

  const renderAttachmentsUI = () => {
    const attachments = data?.attachments || data?.digitalAssets;
    return (
      attachments?.length > 0 && (
        <Box className={styles.attachmentContent}>
          <Box
            sx={{
              justifyContent: "flex-start",
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              maxWidth: "555px",
              flexWrap: "wrap",
              marginBottom: "8px",
            }}
          >
            {attachments.map((item, index) => {
              const fileName = item?.fileName || item?.name;
              const digitalAssetsId = item?.id || item?._id;
              return (
                <Button
                  key={index}
                  onClick={() => handleAssetDownload(digitalAssetsId)}
                  sx={{
                    gap: "13.5px",
                    padding: "10.5px 13.5px",
                    backgroundColor: "#003B4A1A",
                    textTransform: "capitalize",
                    maxWidth: "153px",
                  }}
                  data-testId="button-asset-download-test"
                >
                  <DescriptionOutlinedIcon
                    sx={{
                      width: "21.5px",
                      height: "26.5px",
                      color: "#757575",
                    }}
                  />
                  <Typography
                    tabIndex={0}
                    title={fileName}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      fontStyle: "normal",
                      color: "#292929",
                      lineHeight: "15px",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {fileName}
                  </Typography>
                </Button>
              );
            })}
          </Box>
          {attachments.length > 1 && (
            <Button
              className={styles.downloadAttachContent}
              onClick={() => onDownloadAllAttachmentClicked(attachments)}
              data-testId="button-all-asset-download-test"
            >
              <FileDownloadOutlinedIcon />
              <Typography
                tabIndex={0}
                sx={{
                  fontSize: "12px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  color: "#292929",
                  lineHeight: "15px",
                }}
              >
                {t("downloadAllAttachmentText")}
              </Typography>
            </Button>
          )}
        </Box>
      )
    );
  };

  return (
    <Box key={key} className={styles.cardDetailView}>
      {isDesktop && getProfilePicture()}
      <Box flex={1}>
        <Box className={styles.cardDetailHeader} gap={1}>
          {!isDesktop && getProfilePicture()}
          <Typography
            tabIndex={0}
            sx={{
              fontSize: isDesktop ? "18px" : "16px",
              fontWeight: "600",
              fontStyle: "normal",
              color: "#003B4A",
              lineHeight: isDesktop ? "24px" : "32px",
              flex: 1,
            }}
          >
            {getSenderName()}
          </Typography>
          <Box sx={{ textAlign: "end", justifyContent: "flex-end" }}>
            <Typography
              tabIndex={0}
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontStyle: "normal",
                color: "#003B4A",
                lineHeight: "24px",
              }}
            >
              {convertDate(data?.modifiedAt || data?._created)}
            </Typography>
            <Typography
              tabIndex={0}
              sx={{
                fontSize: "12px",
                fontWeight: "300",
                fontStyle: "normal",
                color: "#535353",
                lineHeight: "20px",
              }}
            >
              {convertTime(data?.modifiedAt || data?._created)}
            </Typography>
          </Box>
        </Box>
        {isDesktop && (
          <Box className={styles.cardDetailMessage}>
            <Typography
              tabIndex={0}
              sx={{
                fontSize: "16px",
                fontWeight: "300",
                fontStyle: "normal",
                color: "#292929",
                lineHeight: "24px",
                marginBottom: "17px",
              }}
            >
              {data?.message || data?.bodyNote}
            </Typography>
            {renderAttachmentsUI()}
          </Box>
        )}
      </Box>
      {!isDesktop && (
        <Box className={styles.cardDetailMessage}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              fontStyle: "normal",
              color: "#292929",
              lineHeight: "24px",
              marginBottom: "17px",
            }}
          >
            {data?.message || data?.bodyNote}
          </Typography>
          {renderAttachmentsUI()}
        </Box>
      )}
    </Box>
  );
};

export default MessagingCardDetailView;
