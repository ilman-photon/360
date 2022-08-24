import { Box, Button, Stack, Typography } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useRef, useState } from "react";
import { colors } from "../../../styles/theme";
import Image from "next/image";

export const ImageUploader = ({
  label,
  helperText = false,
  source = "",
  OnUpload = () => {
    // This is intended
  },
}) => {
  const [previewPhoto, setPreviewPhoto] = useState("");
  const inputImage = useRef(null);

  const handleInputChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      // const blobFile = URL.createObjectURL(event.target.files[0]);
      setPreviewPhoto(blobFile);
      OnUpload(blobFile);
    }
  };
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
        <>
          {previewPhoto || source ? (
            <Stack>
              <Image
                src={previewPhoto || source}
                width={275}
                height={173}
                style={{ borderRadius: 4 }}
                alt="photo"
              />
            </Stack>
          ) : (
            <Button
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
              </Stack>
            </Button>
          )}
          <input
            ref={inputImage}
            type="file"
            accept="image/png, image/gif, image/jpeg"
            hidden
            onChange={handleInputChange}
          />
        </>
      </Box>
      {helperText ? (
        <Typography variant="bodySmallMedium">
          *JPG or PNG file formats only. (File size limit is 4 MB)
        </Typography>
      ) : (
        ""
      )}

      {source ? (
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: "14px",
            textDecoration: "underline",
            width: "fit-content",
            alignSelf: "center",
          }}
          onClick={() => {
            inputImage.current.click();
          }}
        >
          Change File
        </Button>
      ) : (
        ""
      )}
    </Stack>
  );
};
