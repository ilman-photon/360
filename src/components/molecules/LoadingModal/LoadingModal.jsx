import { Box, Modal, CircularProgress } from "@mui/material";
import React from "react";

export const LoadingModal = ({ open = false }) => {
  return (
    <Modal
      open={open}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          "&:focus-visible": {
            outline: "none",
          },
        }}
      >
        <CircularProgress />
      </Box>
    </Modal>
  );
};
