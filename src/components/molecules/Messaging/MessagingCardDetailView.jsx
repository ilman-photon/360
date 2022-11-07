import * as React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import Image from "next/image";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { useTranslation } from "next-i18next";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import moment from "moment";

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
  const getAttachments = () => {};

  const convertDate = (data) => {
    let dateTime = "";
    if (data !== "") {
      const convertDate = new Date(data);
      const month = convertDate.toLocaleString("default", { month: "short" });
      const date = convertDate.getDate();
      dateTime = `${month} ${date}`;
    }
    return dateTime;
  };

  const convertTime = (data) => {
    let time = "";
    if (data !== "") {
      const convertDate = new moment(data);
      time = convertDate.format("hh:mm A");
    }
    return time;
  };

  const getProfilePicture = () => {
    return (
      <Box className={styles.profilePicture}>
        {data?.source !== null ? (
          <Image
            src={data?.source}
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

  return (
    <Box key={key} className={styles.cardDetailView}>
      {isDesktop && getProfilePicture()}
      <Box>
        <Box className={styles.cardDetailHeader}>
          {!isDesktop && getProfilePicture()}
          <Typography
            sx={{
              fontSize: isDesktop ? "18px" : "16px",
              fontWeight: "600",
              fontStyle: "normal",
              color: "#003B4A",
              lineHeight: isDesktop ? "24px" : "32px",
            }}
          >
            {data?.name}
          </Typography>
          <Box sx={{ textAlign: "end", justifyContent: "flex-end" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontStyle: "normal",
                color: "#003B4A",
                lineHeight: "24px",
              }}
            >
              {convertDate(data?.modifiedAt)}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontStyle: "normal",
                color: "#535353",
                lineHeight: "20px",
              }}
            >
              {convertTime(data?.modifiedAt)}
            </Typography>
          </Box>
        </Box>
        {isDesktop && (
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
              {data.message}
            </Typography>
            {data?.attachments?.length > 0 && (
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
                  {data?.attachments?.map((item, index) => {
                    return (
                      <Button
                        key={index}
                        onClick={() => handleAssetDownload(item.id)}
                        sx={{
                          gap: "13.5px",
                          padding: "10.5px 13.5px",
                          backgroundColor: "#003B4A1A",
                          textTransform: "capitalize",
                          maxWidth: "153px",
                        }}
                      >
                        <DescriptionOutlinedIcon
                          sx={{
                            width: "21.5px",
                            height: "26.5px",
                            color: "#757575",
                          }}
                        />
                        <Typography
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
                          {item?.fileName}
                        </Typography>
                      </Button>
                    );
                  })}
                </Box>
                {data?.attachments?.length > 1 && (
                  <Button
                    className={styles.downloadAttachContent}
                    onClick={() =>
                      onDownloadAllAttachmentClicked(data.attachments)
                    }
                  >
                    <FileDownloadOutlinedIcon />
                    <Typography
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
            )}
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
            {data.message}
          </Typography>
          {data?.attachments?.length > 0 && (
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
                {data?.attachments?.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => handleAssetDownload(item.id)}
                      sx={{
                        gap: "13.5px",
                        padding: "10.5px 13.5px",
                        backgroundColor: "#003B4A1A",
                        textTransform: "capitalize",
                        maxWidth: "153px",
                      }}
                    >
                      <DescriptionOutlinedIcon
                        sx={{
                          width: "21.5px",
                          height: "26.5px",
                          color: "#757575",
                        }}
                      />
                      <Typography
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
                        {item?.fileName}
                      </Typography>
                    </Button>
                  );
                })}
              </Box>
              {data?.attachments?.length > 1 && (
                <Button className={styles.downloadAttachContent}>
                  <FileDownloadOutlinedIcon />
                  <Typography
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
          )}
        </Box>
      )}
    </Box>
  );
};

export default MessagingCardDetailView;
