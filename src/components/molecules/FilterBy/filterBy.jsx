import * as React from "react";
import {
  Drawer,
  Box,
  FormGroup,
  Typography,
  IconButton,
  Link,
  Divider,
} from "@mui/material";
import * as styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from "../../atoms/Button/button";
import CustomCheckbox from "./customCheckbox";

const constants = require("../../../utils/constants");

const FilterBy = ({ isOpen, onClose, onDone, filter, activedFilter = [] }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState([]);

  React.useEffect(() => {
    setOpenDrawer(isOpen);
    setActiveFilter(activedFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const renderCheckbox = (title, items, showDivider) => {
    const isShowSeeMore = items.length > 6;
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
              <CustomCheckbox
                label={item}
                key={index}
                onChange={(target) => {
                  const value = target.value;
                  if (target.checked) {
                    const data = activeFilter;
                    data.push(value);
                    setActiveFilter(data);
                  } else {
                    const id = activeFilter.indexOf(value);
                    if (id > -1) {
                      const data = activeFilter;
                      data.splice(id, 1);
                      setActiveFilter(data);
                    }
                  }
                }}
                checked={() => {
                  return activeFilter.indexOf(item) > -1;
                }}
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
        <Divider className={styles.topDivider}></Divider>
        <Box className={styles.checBoxListContainer} id="checkboxGroup">
          {filter.map((item, index) => {
            const isLastIndex = index - 1;
            return renderCheckbox(item.title, item.filter, !isLastIndex);
          })}
        </Box>
      </>
      <Box className={styles.buttonContainer}>
        <StyledButton
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
          size={constants.SMALL}
          gradient={false}
          onClick={() => {
            setActiveFilter([]);
          }}
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
          onClick={() => {
            onDone(activeFilter);
          }}
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
