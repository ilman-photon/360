import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { colors } from "../../../styles/theme";
import { stringAvatar } from "../../../utils/avatar";
import { Regex } from "../../../utils/regex";
import SwapIcon from "../../../assets/icons/SwapIcon";
import DigitalAssetsHandler from "../../../utils/digitalAssetsHandler";

export const ProfilePhotoUploader = ({
  username = "",
  source,
  // preview,
  OnPhotoChange = () => {
    // This is intended
  },
  OnInputError = () => {
    // This is intended
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [imageSource, setImageSource] = useState(null);
  const inputImage = useRef(null);
  const digitalAsset = new DigitalAssetsHandler();

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
      const isNotImage =
        !Regex.isImageFile.test(fileType) &&
        !Regex.isImageFile.test(slicedFileTypeFromFilePath);
      let error = {};

      if (file.size > maxSize) {
        error = {
          success: false,
          title: null,
          content: `File size limit is ${max} MB`,
        };
      } else if (isNotImage) {
        error = {
          success: false,
          title: null,
          content: "Invalid file type",
        };
      } else {
        setLoading(true);

        try {
          digitalAsset.setFile(file);
          await digitalAsset.upload();
          if (digitalAsset.status === "success") {
            OnPhotoChange(digitalAsset.source);
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

  const renderImg = () => {
    return loading ? (
      <CircularProgress />
    ) : (
      <Image
        src={imageSource}
        width={80}
        height={80}
        style={{ borderRadius: "50%" }}
        alt="photo"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    );
  };

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

  return (
    <Stack spacing={1}>
      <Box
        sx={{ border: "1px dashed #DDDBDA", px: 2, py: 3, borderRadius: "4px" }}
      >
        <Stack direction="row" spacing={4} alignItems="center">
          {imageSource ? (
            renderImg()
          ) : (
            <Avatar
              {...stringAvatar(username)}
              sx={{ width: 80, height: 80 }}
            ></Avatar>
          )}

          <Stack spacing={1}>
            {imageSource ? (
              <Typography
                sx={{ fontSize: "13px", fontWeight: 400, textAlign: "center" }}
              >
                {preview?.name || source?.name}
              </Typography>
            ) : (
              ""
            )}

            <Button
              onClick={() => {
                inputImage.current.click();
              }}
              sx={{
                border: "solid 1px #6B7789",
                borderRadius: "41px",
                p: 1,
                color: colors.foundationBlue,
                height: 40,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                {imageSource ? (
                  <SwapIcon style={{ width: 20, height: 20 }} />
                ) : (
                  <FileUploadOutlinedIcon sx={{ width: 20, height: 20 }} />
                )}
                <span style={{ fontSize: 16, textTransform: "none" }}>
                  {source ? "Change" : "upload"} photo
                </span>
                <input
                  ref={inputImage}
                  type="file"
                  data-testid={"loc_uploadProfileImage"}
                  accept="image/png, image/gif, image/jpeg"
                  hidden
                  onChange={handleInputChange}
                />
              </Stack>
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Typography
        variant="bodySmallMedium"
        sx={{ textAlign: "right", fontStyle: "italic", color: "#292929" }}
      >
        *JPG or PNG file formats only. (File size limit is 4 MB)
      </Typography>
    </Stack>
  );
};
