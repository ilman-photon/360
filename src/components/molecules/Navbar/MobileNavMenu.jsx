import * as React from "react";
import { Drawer, Box, FormGroup, Typography, IconButton } from "@mui/material";
import * as styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from "../../atoms/Button/button";
import { TEST_ID } from "../../../utils/constants";
import Image from "next/image";

const constants = require("../../../utils/constants");

const MobileNavMenu = ({ isOpen, onClose, navMenu }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  React.useEffect(() => {
    setOpenDrawer(isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const renderMenuList = (category, idx) => {
    return (
      <Box
        className={styles.mobileNavContainerDivider}
        key={idx}
        onClick={() => alert(category?.name)}
      >
        <Image alt="" src={category.imgSrc} width={"20px"} height={"16px"} />
        <Typography className={styles.mobileNavTitle}>
          {category.name}
        </Typography>
        <FormGroup className={styles.mobileNavGroup}></FormGroup>
      </Box>
    );
  };

  return (
    <Drawer
      data-testid={TEST_ID.APPOINTMENT_TEST_ID.FILTER_COMPONENT.drawer}
      anchor="right"
      open={openDrawer}
      onClose={onClose}
      variant="temporary"
    >
      <>
        <IconButton
          aria-label="close"
          component="label"
          className={styles.closeButton}
          onClick={onClose}
        >
          <CloseIcon className={styles.closeImage}></CloseIcon>
        </IconButton>
        <Box className={styles.mobileNavListContainer}>
          {navMenu.map((item, index) => {
            return renderMenuList(item, index);
          })}
        </Box>
      </>
      <Box className={styles.buttonContainer}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.SECONDARY}
          size={constants.SMALL}
          gradient={false}
          onClick={() => {
            setActiveFilter([]);
          }}
          sx={{
            flex: 1,
          }}
        >
          LOG OUT
        </StyledButton>
      </Box>
    </Drawer>
  );
};

export default MobileNavMenu;
