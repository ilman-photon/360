import { Button, Box } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import styles from "./styles.module.scss";

const iconLinkEcomm = "/icon-link-ecomm.png";

export default function EcommerceButton({
  startIcon = <Image alt="" src={iconLinkEcomm} width={18} height={18} />,
  endIcon = <ArrowRightAltIcon />,
  children = "",
  onClick = () => {
    window.open("https://www.clarksoneyecare.com/");
  },
  wrapperStyle,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        ...wrapperStyle,
      }}
    >
      <Button
        variant="contained"
        endIcon={endIcon}
        startIcon={startIcon}
        onClick={onClick}
        className={styles.ecommerceButton}
        data-testid="ecommerce-button"
      >
        {children}
      </Button>
    </Box>
  );
}
