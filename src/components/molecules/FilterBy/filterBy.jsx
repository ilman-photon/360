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
  isDoctorSearch = false,
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
      if (isPrescription && value === "All") {
        setActiveFilter([{ name: "All", type: "general", checked: true }]);
      } else {
        const data = activeFilter;
        data.push({
          name: value,
          type: type,
          checked: true,
        });
        const dataFilter = data.filter((e) => e.name !== "All");
        setActiveFilter(isPrescription ? dataFilter : data);
      }
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
            !isDoctorSearch && !isPrescription && !expand
              ? styles.checkBoxGroup
              : styles.checkBoxGroupExpand
          }
          sx={
            isDoctorSearch && {
              height: {
                sm: "calc((100vh - 335px)/2) !important",
                md: "280px !important",
              },
              flexWrap: "nowrap",
              overflow: "scroll",

              "& .MuiFormControlLabel-root": {
                marginLeft: "unset",
              },
            }
          }
        >
          {isMultiple ? (
            category.checklist.map((item, index) => {
              if (index > 5 && !expand && !isDoctorSearch) return <></>;
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
        {isShowSeeMore && !isDoctorSearch && (
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
        {isDoctorSearch && (
          <Typography
            variant="h2"
            sx={{
              position: "absolute",
              margin: "16px",
              fontSize: "26px",
            }}
          >
            Filters
          </Typography>
        )}
        <IconButton
          aria-label="close"
          tabIndex={0}
          component="label"
          role="button"
          className={styles.closeButton}
          onClick={onClose}
        >
          <CloseIcon className={styles.closeImage}></CloseIcon>
        </IconButton>
        <Divider
          className={styles.topDivider}
          sx={
            isDoctorSearch && {
              display: "block !important",
              margin: "10px 16px 0 16px",
            }
          }
        ></Divider>
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
          data-testId="filter-reset-button"
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
          data-testId="filter-done-button"
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
