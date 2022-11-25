import { Typography, useMediaQuery } from "@mui/material";
import { formatPhoneNumber } from "../../../utils/phoneFormatter";
import styles from "./styles.module.scss";

export default function PhoneNumber({ phone, sx = {}, isMap }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Typography
      variant="body2"
      tabIndex={0}
      aria-label={`Phone Number ${formatPhoneNumber(phone)}`}
      className={[
        isMobile ? styles.phoneLink : styles.phone,
        isMap ? styles.isMap : "",
      ].join(" ")}
      onClick={() => {
        isMobile && window.open(`tel:${phone}`);
      }}
      role={isMobile ? "link" : "text"}
      sx={sx}
    >
      {formatPhoneNumber(phone)}
    </Typography>
  );
}
