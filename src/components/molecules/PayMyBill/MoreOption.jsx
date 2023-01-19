import * as React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FileDownloadIcon from "../../../assets/icons/FileDownload";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";

export const MoreOptionBtn = () => {
  const [showOpen, setIsOpen] = React.useState(false);

  const onOpen = () => {
    setIsOpen(!showOpen);
  };

  const onClickListBtn = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        sx={{
          width: 30,
          height: 30,
          p: 0,
          background: showOpen ? "#EEF5F7" : "unset",
          borderRadius: "30px",
          ":hover": { backgroundColor: "#EEF5F7" },
        }}
        onClick={() => {
          onOpen();
        }}
      >
        <MoreVertIcon sx={{ color: "#191919" }} />
      </IconButton>
      {showOpen && (
        <Box className={styles.moreOptionListContent}>
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              padding: "8px 20px",
              height: "46px",
              alignItems: "center",
              justifyContent: "flex-start",
              textTransform: "inherit",
              borderRadius: "30px",
              width: "100%",
              ":hover": { backgroundColor: "#007e8f" },
            }}
            onClick={() => {
              onClickListBtn();
            }}
          >
            <FileDownloadIcon sx={{ fill: "#676879" }} />
            <Typography
              sx={{
                fontFamily: "Museo Sans",
                fontWeight: 400,
                color: "#323338",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              Download
            </Typography>
          </Button>
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "8px",
              padding: "8px 20px",
              height: "46px",
              alignItems: "center",
              justifyContent: "flex-start",
              textTransform: "inherit",
              borderRadius: "30px",
              width: "100%",
              ":hover": { backgroundColor: "#007e8f" },
            }}
            onClick={() => {
              onClickListBtn();
            }}
          >
            <LocalPrintshopOutlinedIcon sx={{ color: "#676879" }} />
            <Typography
              sx={{
                fontFamily: "Museo Sans",
                fontWeight: 400,
                color: "#323338",
                fontSize: "14px",
                lineHeight: "22px",
              }}
            >
              Print
            </Typography>
          </Button>
        </Box>
      )}
    </>
  );
};

export default MoreOptionBtn;
