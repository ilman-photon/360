import { Box, Link } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./styles.module.scss";
import constants from "../../../utils/constants";

export default function SubNavigation({ backTitle, onClick }) {
  return (
    <Box className={styles.backHeader}>
      <ChevronLeftIcon className={styles.arrowIcon} />
      <Link
        className={styles.link}
        data-testid={constants.TEST_ID.SUBNAVIGATION}
        aria-roledescription="Link"
        aria-label={`${backTitle} link`}
        onClick={() => {
          onClick();
        }}
      >
        {backTitle}
      </Link>
    </Box>
  );
}
