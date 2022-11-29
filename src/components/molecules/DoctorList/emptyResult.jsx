import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function EmptyResult() {
  return (
    <Box
      sx={{
        background: "white",
        padding: "52px 24px 24px 24px",
        margin: "0 auto 0 auto",

        "& span": {
          width: "100% !important",
          "& img": {
            minWidth: "51px !important",
          },
        },
      }}
    >
      <Image
        src={"/doctor-icon.png"}
        alt="doctor-icon"
        width="51px"
        height="56px"
      />
      <Typography
        variant="h3"
        component="p"
        sx={{
          padding: "16px 10px",
          fontWeight: 700,
          fontSize: "18px",
          lineHeight: "28px",
          textAlign: "center",
          color: "#191919",
        }}
      >
        No results found. Please try again with a different search criteria.
      </Typography>
    </Box>
  );
}
