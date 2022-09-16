import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
export default function StyledRating({ value }) {
  return (
    <Rating
      name="read-only"
      value={value}
      precision={0.5}
      readOnly
      size="small"
      tabindex={"0"}
      emptyIcon={<StarIcon fontSize="inherit" />}
      icon={<StarIcon fontSize="inherit" />}
      sx={{
        ".MuiRating-iconFilled": {
          color: "#0095A9",
          marginLeft: "2px",
          marginRight: "2px",
        },
        ".MuiRating-iconEmpty": {
          color: "#B5B5B5;",
          marginLeft: "2px",
          marginRight: "2px",
        },
      }}
    ></Rating>
  );
}
