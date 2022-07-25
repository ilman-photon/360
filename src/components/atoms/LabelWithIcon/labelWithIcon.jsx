import { Label } from "@mui/icons-material";
import { Box } from "@mui/system";
import React from "react";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

const labelStyle = {};

export const LabelWithIcon = ({ error = false, label = "" }) => (
  <Box sx={{ display: "flex", flexDirection: "row", marginTop: "15px" }}>
    {error ? (
      <RemoveCircleRoundedIcon sx={{ color: "#FF0000" }} />
    ) : (
      <CheckCircleRoundedIcon sx={{ color: "#008000" }} />
    )}
    <span style={{ marginLeft: "15px", color: error ? "#FF0000" : "#008000" }}>
      {label}
    </span>
  </Box>
);
