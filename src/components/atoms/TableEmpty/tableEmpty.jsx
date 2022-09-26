import { Box, Typography } from "@mui/material";

export const TableEmpty = ({ text = "Empty Data" }) => {
  return (
    <Box sx={{ background: "#F2F7F7", p: "10px" }}>
      <Typography variant="headlineH4">{text.replace(/-/g, " ")}</Typography>
    </Box>
  );
};

export default TableEmpty;
