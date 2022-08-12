import { Box, Button, Stack, Typography } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useRef } from "react";
import { colors } from "../../../styles/theme";

export const ImageUploader = ({ label, OnUpload }) => {
  const inputImage = useRef(null);
  return (
    <Stack spacing={1}>
      <Box
        sx={{
          border: "1px dashed #6c6c6c;",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "183px",
        }}
      >
        <Button
          mode="secondary"
          onClick={() => {
            inputImage.current.click();
          }}
          sx={{
            color: colors.black,
            textTransform: "none",
            border: "solid 1px",
            borderColor: colors.foundationGrey,
            borderRadius: 5,
          }}
          variant="outlined"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <CameraAltOutlinedIcon sx={{ width: 16, height: 16 }} />
            <Typography variant="regularBold">{label}</Typography>
            <input
              ref={inputImage}
              type="file"
              accept="image/png, image/gif, image/jpeg"
              hidden
            />
          </Stack>
        </Button>
      </Box>
      <Typography variant="bodySmallMedium">
        *JPG or PNG file formats only. (File size limit is 4 MB)
      </Typography>
    </Stack>
  );
};
