import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from "./styles.module.scss";
import Image from "next/image";
import { colors } from "../../../styles/theme";
import { Box } from "@mui/material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#323338",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function MenuList({
  pdfFile = "",
  onClickDownloadButton = () => {
    //this is intentional
  },
  onClickPrintButton = () => {
    //this is intentional
  },
  onClickShareButton = () => {
    //this is intentional
  },
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (callback) => {
    setAnchorEl(null);
  };
  const iconShare = "/icon-share.png";
  const iconDownload = "/icon-download.png";

  return (
    <div>
      <Box
        aria-label="More option"
        onClick={handleClick}
        tabIndex={0}
        data-testId="more-option-test"
      >
        <MoreHorizIcon
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          endicon={<KeyboardArrowDownIcon />}
          sx={{
            cursor: "pointer",
            "@media print": {
              display: "none !important",
            },
          }}
        />
      </Box>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
          "data-testId": "menu-list-test",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ top: "-15px" }}
      >
        <MenuItem
          className={styles.menuItem}
          disableRipple
          onClick={() => {
            onClickDownloadButton();
            handleClose();
          }}
          data-testId="menu-download-test"
        >
          <Box className={"MuiSvgIcon-root"}>
            <Image alt="" src={iconDownload} width={15} height={15} />
          </Box>
          Download
        </MenuItem>
        <MenuItem
          onClick={() => {
            onClickShareButton();
            handleClose();
          }}
          className={styles.menuItem}
          data-testId="menu-share-test"
          disableRipple
        >
          <Box className={"MuiSvgIcon-root"}>
            <Image alt="" src={iconShare} width={15} height={15} />
          </Box>
          Share
        </MenuItem>
        <MenuItem
          onClick={() => {
            onClickPrintButton();
            handleClose();
          }}
          data-testId="menu-print-test"
          className={styles.menuItem}
          disableRipple
        >
          <LocalPrintshopOutlinedIcon sx={{ color: colors.darkGreen }} />
          Print
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
