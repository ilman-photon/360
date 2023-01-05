import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import FileDownloadIcon from "../../../assets/icons/FileDownload";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { colors } from "../../../styles/theme";

const EducationMaterials = ({
  eduMatData,
  index,
  onAssetDownload = () => {
    // This is intentional
  },
}) => {
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <>
      <Grid
        container
        key={`education-${index}`}
        data-testid={`education-content-${index}`}
        sx={{
          height: "auto",
          minHeight: "195px",
          width: "100%",
        }}
      >
        <Grid item xs={12} sm={2.2}>
          <Box
            sx={{
              height: "auto",
              minHeight: "195px",
              width: "100%",
              backgroundImage: `url(${eduMatData.imgSrc})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            tabIndex={0}
            aria-label="Education Materials image"
            data-testid="educationMaterialsImg"
          ></Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9.3}
          sx={{
            padding: { xs: "20px 0", sm: "16px 28px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: `"Museo Sans, sans-serif`,
              fontWeight: "400",
              fontSize: "26px",
              cursor: "pointer",
            }}
            tabIndex={0}
            onClick={() => {
              onAssetDownload(eduMatData?.digital_assets?._id, false, true);
            }}
          >
            {eduMatData.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              margin: "16px 0",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontFamily: `"Museo Sans", sans-serif`,
                fontWeight: "400",
                fontSize: "16px",
                color: "#575757",
              }}
              tabIndex={0}
            >
              {isDesktop ? (
                `Authors ${eduMatData.author}, ${eduMatData.date}`
              ) : (
                <>
                  {`${eduMatData.author}`},<br />
                  {`${eduMatData.date}`}
                </>
              )}
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "104px",
                height: "40px",
                borderRadius: "4px",
                alignItems: "center",
                background: "#F4F4F4",
                justifyContent: "space-around",
              }}
            >
              <IconButton
                sx={{ width: 24, height: 24, p: 0 }}
                data-testid="downloadPDFButton"
                aria-label="download"
                onClick={() => {
                  onAssetDownload(eduMatData?.digital_assets?._id);
                }}
              >
                <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
              </IconButton>
              <IconButton
                aria-label="print"
                data-testid="printButton"
                onClick={() => {
                  onAssetDownload(eduMatData?.digital_assets?._id, true);
                }}
              >
                <PrintOutlinedIcon sx={{ fill: colors.darkGreen }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default EducationMaterials;
