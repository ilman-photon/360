import * as React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import CircleIcon from "@mui/icons-material/Circle";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import moment from "moment";

export const MessagingCardView = ({
  id,
  subject,
  name,
  message,
  time,
  isHasAttach,
  isUnread,
  onSelect,
  isSelectedMsg,
  isDraftMsg,
  designation,
  lastName,
}) => {
  const isDesktop = useMediaQuery("(min-width: 834px)");
  const whiteSpace = designation != "" ? " " : "";
  const senderName = `${designation}${whiteSpace}${name} ${lastName}`;
  const convertDate = (data) => {
    let dateTime = "";
    const convertDate = new Date(data);
    const currentDate = new Date();
    if (convertDate < currentDate) {
      const month = convertDate.toLocaleString("default", { month: "short" });
      const date = convertDate.getDate();
      dateTime = `${month} ${date}`;
    } else {
      const newConvertDate = new moment(data);
      dateTime = newConvertDate.format("hh:mm A");
    }

    return dateTime;
  };

  return (
    <Box
      className={styles.cardViewContainer}
      sx={{
        backgroundColor:
          isUnread || isSelectedMsg?.id === id ? "#EEF5F7" : "#FFFFFF",
        border: "1px",
        borderStyle: "solid",
        borderColor:
          isSelectedMsg?.active && isSelectedMsg?.id === id
            ? "#003B4A"
            : "#d4d4d4",
      }}
      onClick={() => onSelect()}
      data-testid="message-card"
    >
      <Box className={styles.circleIconContent}>
        {isUnread ? (
          <CircleIcon sx={{ width: "10px", height: "10px" }} />
        ) : (
          <div className={styles.hiddenUI} />
        )}
      </Box>
      <Box className={styles.subjectContainer}>
        <Box className={styles.subjectContent}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Bw Nista Geometric DEMO",
                fontSize: isDesktop ? "22px" : "16px",
                fontWeight: "400",
                fontStyle: "normal",
                color:
                  isSelectedMsg?.active && isSelectedMsg?.id === id
                    ? "#008294"
                    : "#003B4A",
                lineHeight: isDesktop ? "32px" : "21px",
                marginBottom: "8px",
                maxWidth: isDesktop ? "none" : "165px",
                span: {
                  backgroundColor: "#BFE4E8",
                },
              }}
              dangerouslySetInnerHTML={{
                __html: subject !== "" ? subject : "(No subject)",
              }}
            />
            {isDraftMsg && (
              <Typography
                sx={{
                  fontFamily: "Bw Nista Geometric DEMO",
                  fontSize: "14px",
                  fontWeight: "400",
                  fontStyle: "normal",
                  color: "#B00020",
                  lineHeight: isDesktop ? "32px" : "24px",
                }}
              >
                DRAFT
              </Typography>
            )}
          </Box>
          <Typography
            sx={{
              fontFamily: "Bw Nista Geometric DEMO",
              fontSize: isDesktop ? "18px" : "16px",
              fontWeight: "400",
              fontStyle: "normal",
              color: "#003B4A",
              lineHeight: "28px",
              marginBottom: "8px",
            }}
          >
            {convertDate(time)}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: isDesktop ? "18px" : "14px",
            fontWeight: "600",
            fontStyle: "normal",
            color: "#003B4A",
            lineHeight: isDesktop ? "24px" : "16px",
            marginBottom: "8px",
            textTransform: "initial",
            span: {
              backgroundColor: "#BFE4E8",
            },
          }}
          dangerouslySetInnerHTML={{ __html: senderName }}
        />
        <Box className={styles.messageListContent}>
          <Typography
            sx={{
              fontSize: isDesktop ? "16px" : "14px",
              fontWeight: "400",
              fontStyle: "normal",
              color: "#292929",
              lineHeight: isDesktop ? "24px" : "18px",
              marginBottom: "8px",
              span: {
                backgroundColor: "#BFE4E8",
              },
            }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
          {isHasAttach && (
            <AttachmentOutlinedIcon
              sx={{
                width: isDesktop ? "25px" : "22px",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MessagingCardView;
