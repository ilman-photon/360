import { Typography } from "@mui/material";

export const HeadingTitle = ({ title, ...props }) => {
  return (
    <Typography
      aria-label={`${title} heading`}
      aria-roledescription=""
      role="heading"
      {...props}
    >
      {title}
    </Typography>
  );
};
