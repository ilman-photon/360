import { Box } from "@mui/system";
import { StyledButton } from "../../atoms/Button/button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const constants = require("../../../utils/constants");

export default function CustomModal({
  children,
  buttonText,
  onClickButton,
  secondaryButtonText,
  onClickSecondaryButton,
  onClickCloseButton,
  ariaLabelledBy = "",
  ariaDescribedBy = "",
  open,
  sx,
  buttonSx = {},
}) {
  return (
    <Dialog
      open={open}
      data-testid={"customModal"}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      sx={{
        ".MuiPaper-root": {
          width: { xs: "auto", sm: "500px", md: "637px" },
          borderRadius: "8px",
          "& .MuiDialogContent-root": {
            padding: "18px",
          },
        },
        ...sx,
      }}
    >
      <DialogContent>
        {onClickCloseButton && (
          <IconButton
            data-testid="custom-modal-close-btn"
            onClick={onClickCloseButton}
            sx={{
              position: "absolute",
              right: "14px",
              top: "14px",
              padding: 0,
            }}
            aria-label="close"
          >
            <CloseIcon
              sx={{
                width: "24px",
                height: "24px",
                color: "#000000",
              }}
            ></CloseIcon>
          </IconButton>
        )}
        <Box>{children}</Box>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px",
            ...buttonSx,
          }}
        >
          {onClickSecondaryButton && (
            <StyledButton
              mode={constants.SECONDARY}
              type="button"
              tabIndex={1}
              size={constants.SMALL}
              gradient={false}
              onClick={onClickSecondaryButton}
            >
              {secondaryButtonText}
            </StyledButton>
          )}
          <StyledButton
            mode={constants.PRIMARY}
            type="button"
            tabIndex={0}
            size={constants.SMALL}
            gradient={false}
            aria-label={
              buttonText == "Update" ? buttonText + " password" : buttonText
            }
            onClick={onClickButton}
          >
            {buttonText}
          </StyledButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
