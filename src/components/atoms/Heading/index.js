import { Typography } from "@mui/material";

export const HeadingTitle = ({ title, ...props }) => {
  return (
    <Typography
      tabIndex={0}
      aria-label={`${title} Heading`}
      aria-roledescription=""
      role="heading"
      {...props}
    >
      {title}
    </Typography>
  );
};
