import React, { useState } from "react";
import styles from "./filterHeading.module.scss";
import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import StyledInput from "../../atoms/Input/input";
import { useForm, Controller } from "react-hook-form";
import constants from "../../../utils/constants";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { colors } from "../../../styles/theme";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";
import { StyledButton } from "../../atoms/Button/button";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import CustomizedDialogs from "../../molecules/FilterAppointmentDialog/dialog";
import { convertToDate } from "../../../utils/dateFormatter";
import { Regex } from "../../../utils/regex";

export const imageSrcState = "/bx_insurance_card.png";
export const muiInputRoot = "& .MuiFilledInput-root";

export function keyDownPress(e, handleCloseDialog) {
  const code = e.code || e.key;
  if (Regex.specialRegex.test(e.key)) {
    e.preventDefault();
  } else if (code.toLowerCase() === "enter" && e.target.value) {
    handleCloseDialog();
    e.preventDefault();
  }
}

export const locationIconUI = function (isDesktop) {
  return (
    <LocationOnOutlinedIcon
      sx={{
        margin: "auto 0",
        width: isDesktop ? "24px" : "20px",
        height: isDesktop ? "24px" : "20px",
        color: colors.darkGreen,
      }}
    />
  );
};

export const dateIcon = (
  <CalendarTodayIcon
    sx={{
      margin: "auto 0",
      width: "15px",
      height: "15px",
      color: colors.darkGreen,
    }}
  />
);

export const purposeIcon = (
  <VisibilityOutlinedIcon
    sx={{
      margin: "auto 0",
      width: "18px",
      height: "18px",
      color: colors.darkGreen,
    }}
  />
);

export const insuraceIcon = (
  <Box
    sx={{
      margin: "auto 0",
    }}
  >
    <Image alt="" src={imageSrcState} width={20} height={20} />
  </Box>
);

export function getMenuList(title, subtitle) {
  return (
    <Box className={styles.selectMenuContainer}>
      <Typography sx={{ lineHeight: "1" }}>
        <Typography
          variant="bodySmallRegular"
          sx={{ display: "block", color: colors.darkGreen, lineHeight: "18px" }}
        >
          {title}
        </Typography>
        <Typography
          variant="bodySmallMedium"
          sx={{ color: colors.darkGreen, fontWeight: "400" }}
        >
          {subtitle}
        </Typography>
      </Typography>
    </Box>
  );
}

export const menuListUI = (option, idx) => {
  return (
    <MenuItem
      key={idx}
      value={option.title}
      sx={{
        fontSize: "16px",
        ["& li"]: {
          display: "block",
        },
      }}
    >
      {getMenuList(option.title, option.subtitle)}
    </MenuItem>
  );
};

export const CustomPopper = function (props) {
  return (
    <Popper
      {...props}
      sx={{
        "& .MuiAutocomplete-listbox": {
          fontFamily: `"Libre Franklin", sans-serif`,
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "18px",
          height: "349px",
          color: colors.darkGreen,
          "& .MuiListSubheader-root": {
            paddingLeft: "8px",
            paddingRight: "8px",
            fontSize: "14px",
          },
          "& .MuiListSubheader-root:first-letter": {
            textTransform: "uppercase",
          },
          "& .MuiAutocomplete-option": {
            paddingLeft: "8px",
            paddingRight: "8px",
            minHeight: "auto",
            paddingTop: "3px",
            paddingBottom: "12px",
          },
        },
      }}
    />
  );
};

export function onGetInsuranceCarrierStyle(isDesktop = true) {
  return {
    width: {
      xs: "auto",
      sm: "60%",
      md: "70%",
      lg: "100%",
    },
    maxWidth: "100%",
    background: "#FFF",
    marginTop: "0px",
    border: !isDesktop ? "1px solid #BDBDBD" : "none",
    borderRadius: !isDesktop ? "4px" : "auto",
    backgroundColor: "#fff",
    overflow: "hidden",
  };
}

export function onRenderInputInsurance(
  params,
  handleCloseDialog = () => {
    // This is intentional
  }
) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
      }}
      aria-label="Insurance carrier field"
      tabIndex={0}
    >
      <Box
        sx={{
          margin: "auto",
          height: "22px",
        }}
      >
        <Image alt="" src={imageSrcState} width={24} height={24} />
      </Box>
      <StyledInput
        variant="filled"
        {...params}
        aria-hidden={true}
        label="Insurance Carrier"
        tabIndex={-1}
        InputProps={{
          ...params.InputProps,
        }}
        sx={{
          [muiInputRoot]: {
            border: "0px",
          },
          ".MuiInputLabel-filled": {
            fontStyle: "normal",
            fontWeight: "400",
            color: "#303030",
            fontSize: "16px",
            lineHeight: "18px",
          },
        }}
        onKeyDown={(e) => {
          keyDownPress(e, handleCloseDialog);
        }}
      />
    </Box>
  );
}

export function renderInsuranceCarrier(
  {
    control,
    isOpenProps = {},
    insuranceCarrierData = [],
    testid = "",
    isDesktop = true,
  },
  handleCloseDialog
) {
  return (
    <Controller
      name="insuranceCarrier"
      control={control}
      render={({ field: { onChange, value }, fieldState: { _error } }) => {
        return (
          <Box
            sx={{
              ...onGetInsuranceCarrierStyle(isDesktop),
            }}
          >
            <Autocomplete
              {...isOpenProps}
              sx={{
                paddingLeft: "15px",
              }}
              freeSolo={true}
              id="insurance-carrier"
              data-testid={testid}
              disableClearable={true}
              options={insuranceCarrierData}
              groupBy={(option) => option.category}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === "string") {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.name) {
                  return option.name;
                }
                // Regular option
                return option;
              }}
              componentsProps={{
                popper: {
                  className: !isDesktop
                    ? "filter-heading-mobile"
                    : "filter-heading-dekstop",
                },
              }}
              value={value}
              onChange={(_e, data) => {
                onChange(data);
                if (!isDesktop) {
                  handleCloseDialog();
                }
              }}
              onInputChange={(_e, newInputValue) => {
                onChange(newInputValue);
              }}
              renderInput={(params) =>
                onRenderInputInsurance(params, handleCloseDialog)
              }
              PaperComponent={(props) => {
                return (
                  <Paper
                    {...props}
                    sx={{
                      height: isDesktop ? "auto" : "349px",
                      marginTop: "2px",
                    }}
                  />
                );
              }}
              PopperComponent={CustomPopper}
              renderOption={(props, option) => {
                return (
                  <Box key={props["data-option-index"]}>
                    <li {...props} tabIndex={"0"}>
                      {option.name}
                    </li>
                    {option.divider ? (
                      <Divider
                        sx={{
                          marginRight: "12px",
                          marginLeft: "8px",
                        }}
                      />
                    ) : (
                      <></>
                    )}
                  </Box>
                );
              }}
            />
            <Typography
              className={styles.optionalPurposeText}
              variant={"bodyTinyRegular"}
              sx={{
                position: "absolute",
                bottom: "-25px",
                color: "#ffffff",
                opacity: "0.8",
              }}
            >
              (Optional)
            </Typography>
          </Box>
        );
      }}
    />
  );
}

const FilterHeading = ({
  isDesktop = true,
  isTablet = false,
  filterData = {},
  onSearchProvider = () => {
    // This is intentional
  },
  onSwapButtonClicked = () => {
    // This is intentional
  },
  onChangeLocation = () => {
    // This is intentional
  },
  isGeolocationEnabled,
  purposeOfVisitData = [],
  insuranceCarrierData = [],
  title = "",
  subtitle = "",
  isFixed = true,
  currentCity = "",
  isDashboard = false,
}) => {
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: { ...filterData },
  });

  const [isEmptyLocation, setEmptyLocation] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [contentTypeDialog, setContentTypeDialog] = React.useState("");
  const mapsData = isGeolocationEnabled ? ["Use my current location"] : [];

  const onSubmit = (data) => {
    if (!data.location.trim()) {
      setEmptyLocation(true);
    } else {
      onSearchProvider(data);
    }
  };

  React.useEffect(() => {
    if (currentCity) setValue("location", currentCity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity]);

  const minDate = new Date();
  const maxDate = new Date(); // add arguments as needed
  maxDate.setMonth(maxDate.getMonth() + 3);

  const sxTextField = {
    width: "100%",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    [muiInputRoot]: {
      border: "0px",
      borderTopRightRadius: "50px",
      borderBottomRightRadius: "50px",
      backgroundColor: "#fff",
    },
  };

  function renderMandatoryFieldError() {
    return (
      <Typography
        className={styles.errorText}
        variant={"bodyMedium"}
        sx={{
          visibility: isEmptyLocation ? "visible" : "hidden",
          fontSize: isDesktop ? "16px" : "14px",
        }}
      >
        This field is required
      </Typography>
    );
  }

  function onHideMandatoryFieldError() {
    if (isEmptyLocation) {
      setEmptyLocation(false);
    }
  }

  const handleCloseDialog = () => {
    //Reset data when cancel the dialog
    setOpenDialog(false);
  };

  function renderLocationFilter() {
    return (
      <Controller
        name="location"
        control={control}
        render={({ field: { onChange, value }, fieldState: { _error } }) => {
          return (
            <Box
              sx={{
                width: "75%",
                overflow: "hidden",
                width: "75%",
              }}
            >
              <Autocomplete
                freeSolo
                id="location"
                data-testid={APPOINTMENT_TEST_ID.locationInput}
                value={value}
                onChange={(_e, data) => {
                  onChange(data);
                }}
                onInputChange={(_e, newInputValue) => {
                  onHideMandatoryFieldError();
                  onChange(newInputValue);
                  if (newInputValue === "Use my current location") {
                    onChange("");
                    onChangeLocation();
                  }
                }}
                onKeyDown={(e) => {
                  if (Regex.specialRegex.test(e.key)) e.preventDefault();
                }}
                disableClearable={true}
                options={mapsData}
                sx={{
                  background: "#FFF",
                  borderRadius: "100%",
                }}
                renderInput={(params) => (
                  <Box
                    className={isEmptyLocation ? styles.errorField : ""}
                    sx={{
                      display: "flex",
                      alignItems: "flex-end",
                      paddingLeft: "15px",
                    }}
                    aria-label="City, state, or zip code field"
                    tabIndex={0}
                  >
                    {locationIconUI(isDesktop)}
                    <StyledInput
                      type="default"
                      variant="filled"
                      {...params}
                      aria-hidden={true}
                      label="City, state, or zip code"
                      tabIndex={-1}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <InputAdornment position="end">
                            <NearMeOutlinedIcon
                              sx={{
                                width: "18px",
                                height: "18px",
                                right: "10px",
                                margin: "0",
                                position: "absolute",
                                top: "38%",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        borderTopLeftRadius: "50px",
                        borderTopRightRadius: "50px",
                        [muiInputRoot]: {
                          border: "0px",
                          backgroundColor: "#fff",
                        },
                        ".MuiInputLabel-filled": {
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "18px",
                          color: "#303030",
                          width: "75%",
                        },
                      }}
                      maxLength={50}
                    />
                  </Box>
                )}
              />
              <Box sx={{ position: "absolute", bottom: "-30px" }}>
                {renderMandatoryFieldError()}
              </Box>
            </Box>
          );
        }}
      />
    );
  }

  function renderDateFilter() {
    return (
      <Controller
        name="date"
        control={control}
        sx={{ paddingTop: "16px" }}
        render={({ field: { onChange, value }, fieldState: { _error } }) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                background: "#fff",
                width: "60%",
                paddingLeft: "15px",
                borderRadius: 0,
                marginTop: "0px",
                overflow: "hidden",
              }}
            >
              <CalendarTodayIcon
                sx={{
                  margin: "auto 0",
                  width: "18px",
                  height: "18px",
                  color: colors.darkGreen,
                }}
              />
              <StyledInput
                open={open}
                minDate={minDate}
                maxDate={maxDate}
                data-testid={APPOINTMENT_TEST_ID.dateInput}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                type="dob"
                id="dob"
                label="Date"
                isFilter={true}
                value={value}
                onChange={onChange}
                inputProps={{
                  "aria-label": "Date field",
                  readOnly: true,
                  isTransparent: true,
                }}
                sx={{
                  margin: 0,
                  [muiInputRoot]: {
                    border: "0px",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                  },
                  ".MuiInputLabel-filled": {
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#303030",
                    lineHeight: "18px",
                    fontStyle: "normal",
                  },
                }}
                onClick={() => setOpen(true)}
                components={{
                  OpenPickerIcon: function () {
                    return null;
                  },
                }}
                inputFormat={"MMM dd, yyyy"}
                disableMaskedInput
              />
            </Box>
          );
        }}
      />
    );
  }

  function renderPurposeOfVisit() {
    return (
      <Controller
        name="purposeOfVisit"
        control={control}
        render={({ field: { onChange, value }, fieldState: { _error } }) => {
          return (
            <Box
              sx={{
                width: isDesktop ? "70%" : "auto",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  background: "#fff",
                  marginLeft: "15px",
                  marginTop: isDesktop ? "0px" : "16px",
                }}
              >
                <VisibilityOutlinedIcon
                  sx={{
                    margin: "auto",
                    width: "24px",
                    height: "24px",
                    color: colors.darkGreen,
                  }}
                />
                <SelectOptionButton
                  sx={{
                    fontSize: "16px",
                    [muiInputRoot]: {
                      border: "0px solid #bbb",
                      backgroundColor: "#fff",
                      "&.Mui-focused": {
                        boxShadow: "none",
                        color: "#003B4A",
                      },
                    },
                    ".MuiInputLabel-filled": {
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "18px",
                      fontStyle: "normal",
                      color: "#303030",
                    },
                    ".MuiInputLabel-shrink": {
                      color: "#003B4A !important",
                      fontWeight: "600",
                    },
                  }}
                  ariaLabel={"Purpose of Visit dropdown"}
                  role="menu"
                  label={"Purpose of Visit"}
                  labelId={`purposes-of-visit`}
                  id={`purposes-of-visit`}
                  options={purposeOfVisitData}
                  onChange={onChange}
                  value={value}
                  renderMenuListUI={menuListUI}
                  data-testid={APPOINTMENT_TEST_ID.purposeInput}
                  renderValue={(selected) => {
                    return selected;
                  }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 500,
                        width: 300,
                      },
                    },
                    getContentAnchorEl: null,
                  }}
                />
              </Box>
              <Typography
                className={styles.optionalPurposeText}
                variant={"bodyTinyRegular"}
                sx={{
                  position: "absolute",
                  bottom: "-25px",
                  color: "#ffffff",
                  opacity: "0.8",
                }}
              >
                (Optional)
              </Typography>
            </Box>
          );
        }}
      />
    );
  }

  function renderDekstopView() {
    return (
      <Box
        className={styles.titleHeadingWrapper}
        sx={{
          height: title && subtitle ? "200px" : "151px",
          position: "relative",
          marginTop: isDashboard ? "0px !important" : "-15px",
        }}
      >
        <Box
          className={styles.centeredElementNew}
          sx={{ top: title && subtitle ? "50%" : "58%" }}
        >
          {title && subtitle && (
            <Stack>
              <Typography tabIndex={0} className={styles.titleElement}>
                {title}
              </Typography>
              <Typography
                tabIndex={0}
                className={styles.subtitleElement}
                data-testid="filter-heading-subtitle"
              >
                {subtitle}
              </Typography>
            </Stack>
          )}
          <Stack direction={"row"} sx={{ position: "relative" }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex",
                background: "#fff",
                borderRadius: "50px",
                // width: isTablet ? "100%" : "85vw",
                width: "100%",
              }}
            >
              {renderLocationFilter()}
              <Divider orientation="vertical" flexItem />
              {renderDateFilter()}
              <Divider orientation="vertical" flexItem />
              {renderPurposeOfVisit()}
              <Divider orientation="vertical" flexItem />
              {renderInsuranceCarrier(
                {
                  control,
                  isOpenProps: {},
                  insuranceCarrierData,
                  testid: APPOINTMENT_TEST_ID.insuranceInput,
                  isDesktop,
                },
                handleCloseDialog
              )}
              <StyledButton
                aria-label={"Search"}
                type="submit"
                theme="patient"
                mode="filter"
                size="small"
                gradient={false}
                data-testid={APPOINTMENT_TEST_ID.searchbtn}
                sx={{
                  height: isEmptyLocation ? "54px" : "52px",
                  background: "#BFE4E8",
                  border: "0px",
                  cursor: "pointer",
                }}
              >
                <SearchIcon
                  sx={{ color: colors.darkGreen, width: 26, height: 26 }}
                />
              </StyledButton>
            </form>
            {isTablet && (
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                className={styles.swapButtonContainer}
                onClick={onSwapButtonClicked}
                tabIndex={0}
              >
                <SwapHorizIcon className={styles.swapIcon} />
                <Typography className={styles.swapLabel}>Map</Typography>
              </Stack>
            )}
          </Stack>
        </Box>
      </Box>
    );
  }

  function renderMobileField(
    icon,
    textField,
    controllerName,
    isOptional = false
  ) {
    const isErrorMandatoryField =
      controllerName === "location" && isEmptyLocation;
    return (
      <Box>
        <Controller
          name={controllerName}
          control={control}
          render={({ field: { onChange, value }, fieldState: { _error } }) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "15px",
                  marginTop: "15px",
                  width: "auto",
                  background: "#fff",
                  borderRadius: "50px",
                  border: isErrorMandatoryField
                    ? `2px solid ${colors.errorField}`
                    : "none",
                }}
              >
                {icon}
                {textField(onChange, value)}
              </Box>
            );
          }}
        />
        {isErrorMandatoryField && renderMandatoryFieldError()}
        {isOptional ? (
          <Typography
            variant={"bodyTinyMedium"}
            sx={{ paddingLeft: "16px", color: "#EDEDED" }}
          >
            (Optional)
          </Typography>
        ) : (
          <></>
        )}
      </Box>
    );
  }

  function renderMobileLocationTextField() {
    const locationInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={value}
          onChange={onChange}
          variant="filled"
          label="City, state, or zip code"
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <NearMeOutlinedIcon
                  sx={{
                    width: "18px",
                    height: "18px",
                    right: "15px",
                    margin: "0",
                    position: "absolute",
                    top: "35%",
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={sxTextField}
          onClick={() => {
            onHideMandatoryFieldError();
            handleOpenDialog("location");
          }}
        />
      );
    };
    return renderMobileField(locationIconUI(), locationInput, "location");
  }

  function renderMobileDateTextField() {
    const dateInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={convertToDate(value)}
          onChange={onChange}
          variant="filled"
          label="Date"
          sx={sxTextField}
          onClick={() => {
            handleOpenDialog("date");
          }}
          InputProps={{
            readOnly: true,
          }}
        />
      );
    };
    return renderMobileField(dateIcon, dateInput, "date");
  }

  function renderMobilePurposeTextField() {
    const purposeInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={value}
          onChange={onChange}
          variant="filled"
          label="Purpose of Visit"
          sx={sxTextField}
          onClick={() => {
            handleOpenDialog("purposeInput");
          }}
          InputProps={{
            readOnly: true,
          }}
        />
      );
    };
    return renderMobileField(purposeIcon, purposeInput, "purposeOfVisit", true);
  }

  function renderMobileInsuranceTextField() {
    const insuranceInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={value?.name || ""}
          onChange={onChange}
          variant="filled"
          label="Insurance Carrier"
          sx={sxTextField}
          InputProps={{
            readOnly: true,
          }}
          onClick={() => {
            handleOpenDialog("insuranceCarrier");
          }}
        />
      );
    };
    return renderMobileField(
      insuraceIcon,
      insuranceInput,
      "insuranceCarrier",
      true
    );
  }

  function handleOpenDialog(type) {
    setContentTypeDialog(type);
    setOpenDialog(true);
  }

  function renderDialogFilter() {
    return (
      <CustomizedDialogs
        open={openDialog}
        handleClose={handleCloseDialog}
        type={contentTypeDialog}
        closeLabel={"Cancel"}
        additionalProps={{
          control,
          isEmptyLocation,
          minDate,
          maxDate,
          purposeOfVisitData,
          insuranceCarrierData,
          isDesktop,
        }}
      />
    );
  }

  function renderMobileView() {
    return (
      <Box className={styles.mobileFilterContainer}>
        <Box className={styles.mobileContainer}>
          <Typography
            variant={"titleScheduleMobile"}
            className={styles.mobileTitle}
          >
            Schedule an eye exam
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderMobileLocationTextField()}
            {renderMobileDateTextField()}
            {renderMobilePurposeTextField()}
            {renderMobileInsuranceTextField()}
            <StyledButton
              className={styles.searchButton}
              type="submit"
              theme="patient"
              mode="primary"
              size="small"
              gradient={false}
              data-testid={APPOINTMENT_TEST_ID.searchbtn}
              sx={{
                marginTop: "16px",
                height: "52px",
                width: "100%",
                background: colors.primaryButton,
                border: "0px",
                borderRadius: "50px",
                transition: null,
              }}
            >
              Search
            </StyledButton>
          </form>
        </Box>
        {renderDialogFilter()}
      </Box>
    );
  }

  return <>{isDesktop ? renderDekstopView() : renderMobileView()}</>;
};

export default FilterHeading;
