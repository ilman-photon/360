import * as React from "react";
import {
  Drawer,
  Box,
  FormGroup,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import * as styles from "./styles.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { StyledButton } from "../../atoms/Button/button";
import CustomCheckbox from "./customCheckbox";
import { TEST_ID } from "../../../utils/constants";

const constants = require("../../../utils/constants");

const FilterBy = ({
  isOpen,
  onClose,
  onDone,
  filter,
  activedFilter = [],
  isPrescription = false,
}) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [activeFilter, setActiveFilter] = React.useState([]);

  React.useEffect(() => {
    setOpenDrawer(isOpen);
    setActiveFilter(activedFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const onFilterChecked = (target, type) => {
    const value = target.value;
    if (target.checked) {
      const data = activeFilter;
      data.push({
        name: value,
        type: type,
        checked: true,
      });
      setActiveFilter(data);
    } else {
      const dataIndex = activeFilter.findIndex((x) => x.name === value);
      if (dataIndex > -1) {
        const data = activeFilter;
        data.splice(dataIndex, 1);
        setActiveFilter(data);
      }
    }
  };

  const renderCheckbox = (category, idx, isMultiple, showDivider) => {
    const isShowSeeMore = category.checklist && category.checklist.length > 6;
    return (
      <Box
        className={
          showDivider
            ? styles.checkBoxContainerDivider
            : styles.checkBoxContainer
        }
        key={idx}
      >
        <Typography className={styles.checkBoxTitle} tabIndex={0}>
          {isMultiple ? category.name : "Filter By"}
        </Typography>
        <FormGroup
          className={
            !isPrescription && !expand
              ? styles.checkBoxGroup
              : styles.checkBoxGroupExpand
          }
        >
          {isMultiple ? (
            category.checklist.map((item, index) => {
              if (index > 5 && !expand) return false;
              return (
                <CustomCheckbox
                  label={item.name}
                  key={index}
                  onChange={(target) => {
                    onFilterChecked(target, item?.type);
                  }}
                  checked={() => {
                    return (
                      activeFilter.findIndex((x) => x.name === item.name) > -1
                    );
                  }}
                />
              );
            })
          ) : (
            <CustomCheckbox
              label={category.name}
              onChange={(target) => {
                onFilterChecked(target);
              }}
              checked={() => {
                return (
                  activeFilter.findIndex((x) => x.name === category.name) > -1
                );
              }}
            />
          )}
        </FormGroup>
        {isShowSeeMore && (
          <Box marginTop={"10px"} className={styles.buttonLinkContainer}>
            <Button
              role={"link"}
              onClick={() => {
                setExpand(!expand);
              }}
              sx={{
                padding: 0,
              }}
            >
              <Typography variant="link" className={styles.link}>
                {expand ? "See Less" : "See more"}
              </Typography>
            </Button>
          </Box>
        )}
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
          aria-hidden
          tabIndex="0"
          component="label"
          role="button"
          className={styles.closeButton}
          onClick={onClose}
        >
          <CloseIcon className={styles.closeImage}></CloseIcon>
        </IconButton>
        <Divider className={styles.topDivider}></Divider>
        <Box className={styles.checBoxListContainer} id="checkboxGroup">
          {filter.map((item, index) => {
            const isLastIndex = index === filter.length - 1;
            const isMultiple = item.checklist !== undefined;
            return renderCheckbox(item, index, isMultiple, !isLastIndex);
          })}
        </Box>
      </>
      <Box className={styles.buttonContainer}>
        <StyledButton
          date-testId="filter-reset-button"
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
          Reset
        </StyledButton>
        <StyledButton
          date-testId="filter-done-button"
          theme={constants.PATIENT}
          mode={constants.PRIMARY}
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
