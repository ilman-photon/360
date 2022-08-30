import * as React from "react";
import {
  Drawer,
  Box,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Typography,
  Button,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import * as styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from "../../atoms/Button/button";

const constants = require("../../../utils/constants");

const FilterBy = ({ isOpen }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [expand, setExpand] = React.useState(false);

  const toggleDrawer = () => () => {
    setOpenDrawer(false);
  };

  React.useEffect(() => {
    setOpenDrawer(isOpen);
  }, [isOpen]);

  const renderCheckbox = (title, items, showDivider) => {
    const isShowSeeMore = items.length > 6;
    const isExpand = expand;
    return (
      <Box
        className={
          showDivider
            ? styles.checkBoxContainerDivider
            : styles.checkBoxContainer
        }
      >
        <Typography className={styles.checkBoxTitle}>{title}</Typography>
        <FormGroup
          className={
            !expand ? styles.checkBoxGroup : styles.checkBoxGroupExpand
          }
        >
          {items.map((item, index) => {
            if (index > 5 && !expand) return false;
            return (
              <FormControlLabel
                control={<Checkbox value={item.value} />}
                label={item.label}
                key={item.value}
              />
            );
          })}
        </FormGroup>
        {isShowSeeMore && (
          <Box marginTop={"10px"}>
            <Link
              className={styles.link}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? "See Less" : "See more"}
            </Link>
          </Box>
        )}
      </Box>
    );
  };

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={toggleDrawer}
      variant="temporary"
    >
      <>
        <IconButton
          aria-label="close"
          component="label"
          className={styles.closeButton}
        >
          <CloseIcon className={styles.closeImage}></CloseIcon>
        </IconButton>
        <Divider className={styles.topDivider}></Divider>
        <Box className={styles.checkboxGroup}>
          {renderCheckbox(
            "Filter by:",
            [
              {
                label: "Available today",
                value: "available-today",
              },
            ],
            true
          )}
          {renderCheckbox(
            "Languages spoken",
            [
              {
                label: "Arabic",
                value: "arabic",
              },
              {
                label: "Chinese",
                value: "Chinese",
              },
              {
                label: "English",
                value: "English",
              },
              {
                label: "Farsi",
                value: "Farsi",
              },
              {
                label: "French",
                value: "French",
              },
              {
                label: "Spanish",
                value: "Spanish",
              },
              {
                label: "Bahasa",
                value: "bahasa",
              },
            ],
            true
          )}
          {renderCheckbox(
            "Insurance",
            [
              {
                label: "In Network",
                value: "in-network",
              },
              {
                label: "Out of Network",
                value: "out-of-network",
              },
            ],
            true
          )}
          {renderCheckbox(
            "Gender",
            [
              {
                label: "Male",
                value: "male",
              },
              {
                label: "Female ",
                value: "female",
              },
              {
                label: "Non-Binary",
                value: "non-binary",
              },
            ],
            false
          )}
        </Box>
      </>
      <Box className={styles.buttonContainer}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          size={constants.SMALL}
          gradient={false}
          sx={{
            flex: 1,
          }}
        >
          Reset
        </StyledButton>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.SECONDARY}
          size={constants.SMALL}
          gradient={false}
          sx={{
            flex: 1,
          }}
        >
          Done
        </StyledButton>
      </Box>
    </Drawer>
  );
};

export default FilterBy;
