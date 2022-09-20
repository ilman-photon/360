import { Box, Typography } from "@mui/material";

export const TableEmpty = () => {
  return (
    <Box sx={{ background: "#F2F7F7", p: "10px" }}>
      <Typography variant="headlineH4">There are no intake forms.</Typography>
    </Box>
  );
};

export default TableEmpty;
