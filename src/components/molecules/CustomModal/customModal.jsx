import { Box } from "@mui/system";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

const constants = require("../../../utils/constants");

export default function CustomModal({
  children,
  buttonText,
  onClickButton,
  open,
  sx,
}) {
  return (
    <Dialog
      open={open}
      data-testid={"customModal"}
      aria-labelledby="no-inernet-dialog-title"
      aria-describedby="no-inernet-dialog-description"
      sx={{
        ".MuiPaper-root": {
          width: "500px",
          borderRadius: "8px",
        },
        ...sx,
      }}
    >
      <DialogContent>
        <Box>{children}</Box>
        <Box className={styles.buttonContainer}>
          <StyledButton
            theme={constants.PATIENT}
            mode={constants.PRIMARY}
            type="button"
            size={constants.SMALL}
            gradient={false}
            onClick={onClickButton}
          >
            {buttonText}
          </StyledButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
