import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { colors } from "../../../styles/theme";
import { stringAvatar } from "../../../utils/avatar";

export const ProfilePhotoUploader = () => {
  return (
    <Stack spacing={1}>
      <Box sx={{ border: "solid 1px #DDDBDA", px: 2, py: 3 }}>
        <Stack direction="row" spacing={4} alignItems="center">
          <Avatar
            {...stringAvatar("John Doe")}
            sx={{ width: 80, height: 80 }}
          ></Avatar>
          <Button
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
                upload photo
              </span>
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
