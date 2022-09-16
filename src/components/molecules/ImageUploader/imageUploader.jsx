import { Box, Button, Stack, Typography } from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useRef } from "react";
import { colors } from "../../../styles/theme";
import Image from "../../atoms/Image/image";
import { Regex } from "../../../utils/regex";

export const ImageUploader = ({
  label,
  preview,
  helperText = false,
  source = "",
  OnUpload = () => {
    // This is intended
  },
  OnInputError = () => {
    // This is intended
  },
  testIds,
}) => {
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
        event.target.value = null;
      } else if (
        !Regex.isImageFile.test(fileType) &&
        !Regex.isImageFile.test(slicedFileTypeFromFilePath)
      ) {
        error = {
          success: false,
          title: null,
          content: "Invalid file type",
        };
        event.target.value = null;
      } else {
        const blobFile = URL.createObjectURL(event.target.files[0]);
        OnUpload(blobFile);
      }
      OnInputError(error);
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
          {preview || source ? (
            <Stack>
              <Image
                src={preview || source}
                width={275}
                height={173}
                style={{ borderRadius: 4 }}
                alt="photo"
                placeholder="blur"
                blurDataURL="/transparent.png"
              />
            </Stack>
          ) : (
            <Button
              onClick={() => {
                inputImage.current.click();
              }}
              data-testid={testIds}
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
            data-testid={"loc_uploadImage"}
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

      {preview || source ? (
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: "14px",
            textDecoration: "underline",
            width: "fit-content",
            alignSelf: "center",
          }}
          data-testid={testIds}
          onClick={() => {
            inputImage.current.click();
          }}
        >
          Change photo
        </Button>
      ) : (
        ""
      )}
    </Stack>
  );
};
