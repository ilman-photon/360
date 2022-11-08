import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useRef, useState, useEffect } from "react";
import { colors } from "../../../styles/theme";
import { Regex } from "../../../utils/regex";
import DigitalAssetsHandler from "../../../utils/digitalAssetsHandler";
import Image from "next/image";

export const ImageUploader = ({
  label,
  changeLabel,
  helperText = false,
  source,
  OnUpload = () => {
    // This is intended
  },
  OnInputError = () => {
    // This is intended
  },
  testIds,
  labelVariant = "bodyRegular",
}) => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [imageSource, setImageSource] = useState(null);
  const inputImage = useRef(null);
  const digitalAsset = new DigitalAssetsHandler();
  const isDesktop = useMediaQuery("(min-width: 769px)");

  useEffect(() => {
    setImageSource(preview);
  }, [preview]);

  const fetchImageURL = async () => {
    digitalAsset.setSource(source);
    const src = await digitalAsset.fetchSourceURL();
    if (src) setImageSource(src.presignedUrl);
  };

  useEffect(() => {
    if (source) fetchImageURL();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  const shimmer = (w, h) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#eee" offset="20%" />
          <stop stop-color="#ddd" offset="50%" />
          <stop stop-color="#eee" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#eee" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`;

  const toBase64 = (str) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  const renderBasedOnImgSource = () => {
    return !!imageSource ? (
      <Image
        src={imageSource}
        width={275}
        height={173}
        style={{ borderRadius: 4 }}
        alt="image"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
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
          {isDesktop ? (
            <FileUploadOutlinedIcon sx={{ width: 16, height: 16 }} />
          ) : (
            <CameraAltOutlinedIcon sx={{ width: 16, height: 16 }} />
          )}
          <Typography variant={labelVariant} sx={{ fontWeight: 500 }}>
            {label}
          </Typography>
        </Stack>
      </Button>
    );
  };

  const handleInputChange = async (event) => {
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
        setLoading(true);
        try {
          digitalAsset.setFile(file);
          await digitalAsset.upload();
          if (digitalAsset.status === "success") {
            OnUpload(digitalAsset.source);
            setPreview(digitalAsset.source.presignedUrl);
          }
        } catch (error) {
          console.error("Error when uploading", error);
        } finally {
          setLoading(false);
        }
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
          background: "#F9F9F9",
        }}
      >
        <>
          {loading ? <CircularProgress /> : renderBasedOnImgSource()}
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
          JPG or PNG file formats only. (File size limit is 4 MB)
        </Typography>
      ) : (
        ""
      )}

      {imageSource ? (
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            fontSize: "14px",
            fontWeight: "400",
            textDecoration: "underline",
            width: "fit-content",
            alignSelf: "center",
            color: "#008294",
          }}
          data-testid={testIds}
          onClick={() => {
            inputImage.current.click();
          }}
        >
          {changeLabel}
        </Button>
      ) : (
        ""
      )}
    </Stack>
  );
};
