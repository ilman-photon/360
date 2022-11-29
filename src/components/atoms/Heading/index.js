import { Typography } from "@mui/material";

export const HeadingTitle = ({ title, ...props }) => {
  return (
    <Typography
      tabIndex={0}
      aria-label={`${title}`}
      aria-level="1"
      role="heading"
      {...props}
    >
      {title}
    </Typography>
  );
};
