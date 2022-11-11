import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import styles from "./styles.module.scss";

export const AttachmentFile = ({
  attachmentsSource,
  handleAssetDownload = () => {},
}) => {
  return (
    <>
      {attachmentsSource?.length > 0 && (
        <Box className={styles.attachmentContent} sx={{ marginTop: "10px" }}>
          <Box
            sx={{
              justifyContent: "flex-start",
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              maxWidth: "555px",
              flexWrap: "wrap",
              marginBottom: "8px",
              padding: "0px 10px",
            }}
          >
            {attachmentsSource.map((item, index) => {
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
                    {item?.name}
                  </Typography>
                </Button>
              );
            })}
          </Box>
        </Box>
      )}
    </>
  );
};

export default AttachmentFile;
