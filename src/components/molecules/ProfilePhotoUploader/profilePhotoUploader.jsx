import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import { colors } from "../../../styles/theme";
import { stringAvatar } from "../../../utils/avatar";
import { Regex } from "../../../utils/regex";

export const ProfilePhotoUploader = ({
  username = "",
  source = "",
  OnPhotoChange = () => {
    // This is intended
  },
  OnInputError = () => {
    // This is intended
  },
}) => {
  const [previewPhoto, setPreviewPhoto] = useState("");
  const inputImage = useRef(null);

  const handleInputChange = (event) => {
    const max = 4;
    const maxSize = max * 1024 * 1024; // 4MB
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileType = file.type;
      const fileTypeDotIndexPosition = file.name.lastIndexOf(".") + 1;
      const slicedFileTypeFromFilePath = file.name.slice(
        fileTypeDotIndexPosition
      );
      let error = {};

      if (file.size > maxSize) {
        error = {
          success: false,
          title: null,
          content: `File size limit is ${max} MB`,
        };
      } else if (
        !Regex.isImageFile.test(fileType) &&
        !Regex.isImageFile.test(slicedFileTypeFromFilePath)
      ) {
        error = {
          success: false,
          title: null,
          content: "Invalid file type",
        };
      } else {
        const blobFile = URL.createObjectURL(event.target.files[0]);
        setPreviewPhoto(blobFile);
        OnPhotoChange(blobFile);
      }
      OnInputError(error);
    }
  };
  return (
    <Stack spacing={1}>
      <Box sx={{ border: "solid 1px #DDDBDA", px: 2, py: 3 }}>
        <Stack direction="row" spacing={4} alignItems="center">
          {source ? (
            <Image
              src={previewPhoto || source}
              width={80}
              height={80}
              style={{ borderRadius: "50%" }}
              alt="photo"
            />
          ) : (
            <Avatar
              {...stringAvatar(username)}
              sx={{ width: 80, height: 80 }}
            ></Avatar>
          )}

          <Button
            onClick={() => {
              inputImage.current.click();
            }}
            sx={{
              border: "solid 1px #6B7789",
              p: 1,
              color: colors.foundationBlue,
              height: 40,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <FileUploadOutlinedIcon sx={{ width: 20, height: 20 }} />
              <span style={{ fontSize: 16, textTransform: "none" }}>
                {source ? "change" : "upload"} photo
              </span>
              <input
                ref={inputImage}
                type="file"
                accept="image/png, image/gif, image/jpeg"
                hidden
                onChange={handleInputChange}
              />
            </Stack>
          </Button>
        </Stack>
      </Box>
      <Typography
        variant="bodySmallMedium"
        sx={{ textAlign: "right", fontStyle: "italic" }}
      >
        *JPG or PNG file formats only. (File size limit is 4 MB)
      </Typography>
    </Stack>
  );
};
