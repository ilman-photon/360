import { Box, Link } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./styles.module.scss";

export default function SubNavigation({ backTitle, onClick }) {
  return (
    <Box className={styles.backHeader}>
      <ChevronLeftIcon className={styles.arrowIcon} />
      <Link
        className={styles.link}
        onClick={() => {
          onClick();
        }}
      >
        {backTitle}
      </Link>
    </Box>
  );
}
