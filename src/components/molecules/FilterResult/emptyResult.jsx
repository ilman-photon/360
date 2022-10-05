import { Box } from "@mui/system";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";

export const EmptyResult = ({ message = "", isEmpty = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "50px",
        width: "100%",
      }}
    >
      {isEmpty ? (
        <CalendarTodayIcon
          sx={{ alignSelf: "center", width: 38.5, height: 38.5 }}
        />
      ) : (
        <SearchIcon sx={{ alignSelf: "center", width: 38.5, height: 38.5 }} />
      )}
      <Typography
        variant="bodyLarge"
        sx={{
          fontWeight: 500,
          color: "#191919",
          textAlign: "center",
          marginTop: "8px",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default EmptyResult;
