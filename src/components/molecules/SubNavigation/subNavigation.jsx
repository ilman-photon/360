import { Box, Link } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./styles.module.scss";
import constants from "../../../utils/constants";

export default function SubNavigation({ backTitle, onClick, sxSubNavigation }) {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.backHeader} style={sxSubNavigation}>
        <ChevronLeftIcon className={styles.arrowIcon} />
        <Link
          className={styles.link}
          data-testid={constants.TEST_ID.SUBNAVIGATION}
          role="Link"
          aria-label={`${backTitle} link`}
          tabIndex={0}
          onClick={() => {
            onClick();
          }}
        >
          {backTitle}
        </Link>
      </Box>
    </Box>
  );
}
