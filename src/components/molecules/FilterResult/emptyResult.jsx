import { Box } from "@mui/system";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Typography } from "@mui/material";

export const EmptyResult = ({ message = "" }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CalendarTodayIcon
        sx={{ alignSelf: "center", width: 38.5, height: 38.5 }}
      />
      <Typography
        variant="bodyLarge"
        sx={{ fontWeight: 500, color: "#191919", textAlign: "center" }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default EmptyResult;
