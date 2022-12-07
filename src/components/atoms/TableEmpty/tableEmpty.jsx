import { Box, Typography } from "@mui/material";

export const TableEmpty = ({ text = "Empty Data", sxContainer = {} }) => {
  return (
    <Box sx={{ background: "#F2F7F7", p: "10px", ...sxContainer }}>
      <Typography variant="headlineH4" aria-label={text} tabIndex={0}>
        {text.replace(/-/g, " ")}
      </Typography>
    </Box>
  );
};

export default TableEmpty;
