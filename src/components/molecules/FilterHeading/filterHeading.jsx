import React, { useState } from "react";
import styles from "./filterHeading.module.scss";
import {
  Autocomplete,
  Box,
  Divider,
  InputAdornment,
  Link,
  MenuItem,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@mui/material";
import StyledInput from "../../atoms/Input/input";
import { useForm, Controller } from "react-hook-form";
import constants from "../../../utils/constants";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { colors } from "../../../styles/theme";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";
import { StyledButton } from "../../atoms/Button/button";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import CustomizedDialogs from "../../atoms/Dialog/dialog";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const FilterHeading = ({
  isDesktop = true,
  filterData = {
    purposeOfVisit: "",
  },
  onSearchProvider = () => {
    // This is intentional
  },
  isGeolocationEnabled,
}) => {
  const imageSrcState = "/bx_insurance_card.png";
  const muiInputRoot = "& .MuiFilledInput-root";
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  const { handleSubmit, control } = useForm({
    defaultValues: filterData,
  });

  const [isEmptyLocation, setEmptyLocation] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [contentDialog, setContentDialog] = React.useState(<></>);
  const mapsData = isGeolocationEnabled ? ["Use my current location"] : [];

  const onSubmit = (data) => {
    if (!data.location) {
      setEmptyLocation(true);
    } else {
      onSearchProvider(data);
    }
  };

  const minDate = new Date();
  const maxDate = new Date(); // add arguments as needed
  maxDate.setMonth(maxDate.getMonth() + 3);

  const purposeOfVisitData = [
    { title: "Eye exam", subtitle: "Test the health of your eye" },
    { title: "Follow up", subtitle: "See your doctor today" },
    { title: "Comprehensive", subtitle: "Get a detailed eye exam" },
    { title: "Contacts only", subtitle: "Get fitted for the right contacts" },
  ];

  const insuranceCarrierData = [
    { category: "", name: "I’m paying out of pocket" },
    { category: "", name: "Skip and choose insurance later" },
    { category: "", name: "Other Insurance", divider: true },
    { category: "Popular carriers", name: "Aetna" },
    { category: "Popular carriers", name: "Blue Cross Blue Shield" },
    { category: "Popular carriers", name: "Cigna" },
    { category: "Popular carriers", name: "Kaiser" },
    { category: "all carriers", name: "Kaiser" },
  ];

  function onRenderInputInsurance(params) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          paddingLeft: "15px",
        }}
      >
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <Image alt="" src={imageSrcState} width={20} height={20} />
        </Box>
        <StyledInput
          variant="filled"
          {...params}
          label="Insurance Carrier"
          InputProps={{
            ...params.InputProps,
          }}
          sx={{
            [muiInputRoot]: {
              border: "0px solid #ffff",
            },
          }}
          onKeyDown={(e) => {
            if (
              e.code &&
              e.code.toLowerCase() === "enter" &&
              e.target.value &&
              setOpenDialog
            ) {
              setInsuranceCarrierValue(e.target.value);
              setOpenDialog(false);
              e.preventDefault();
              return false;
            }
          }}
        />
      </Box>
    );
  }

  function onGetInsuranceCarrierStyle() {
    return {
      width: isDesktop ? "320px" : "auto",
      background: "#FFF",
      marginTop: "0px",
      border: !isDesktop ? "1px solid #BDBDBD" : "none",
      borderRadius: !isDesktop ? "4px" : "auto",
    };
  }

  const sxTextField = {
    width: "323px",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    [muiInputRoot]: {
      border: "0px solid #ffff",
      borderTopRightRadius: "50px",
      borderBottomRightRadius: "50px",
    },
  };

  function getMenuList(title, subtitle) {
    return (
      <Box className={styles.selectMenuContainer}>
        <Typography
          variant="bodySmallRegular"
          sx={{ display: "block", color: colors.darkGreen }}
        >
          {title}
        </Typography>
        <Typography variant="bodySmallMedium" sx={{ color: colors.darkGreen }}>
          {subtitle}
        </Typography>
      </Box>
    );
  }

  const menuListUI = (option, idx) => {
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

  const CustomPopper = function (props) {
    return (
      <Popper
        {...props}
        sx={{
          "& .MuiAutocomplete-listbox": {
            fontFamily: "Libre Franklin",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "18px",
            height: "349px",
            color: colors.darkGreen,
            "& .MuiListSubheader-root": {
              textTransform: "capitalize",
            },
            "& .MuiAutocomplete-option": {
              paddingLeft: "16px",
            },
          },
        }}
      />
    );
  };

  const locationIconUI = function () {
    return (
      <LocationOnOutlinedIcon
        sx={{
          margin: "auto",
          width: "20px",
          height: "20px",
          color: colors.darkGreen,
        }}
      />
    );
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

  function renderLocationFilter() {
    return (
      <Controller
        name="location"
        control={control}
        render={({ field: { onChange, value }, fieldState: { _error } }) => {
          return (
            <Autocomplete
              freeSolo
              id="location"
              data-testid={APPOINTMENT_TEST_ID.locationInput}
              value={value}
              onChange={(_e, data) => {
                onHideMandatoryFieldError();
                onChange(data);
              }}
              onInputChange={(_e, newInputValue) => {
                onHideMandatoryFieldError();
                onChange(newInputValue);
              }}
              disableClearable={true}
              options={mapsData}
              sx={{
                width: "347px",
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
                >
                  {locationIconUI()}
                  <StyledInput
                    type="default"
                    variant="filled"
                    {...params}
                    label="City, state, or zip code"
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
                        border: "0px solid #ffff",
                      },
                    }}
                  />
                </Box>
              )}
            />
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
                width: "210px",
                paddingLeft: "15px",
                borderRadius: 0,
                marginTop: "0px",
              }}
            >
              <CalendarTodayIcon
                sx={{
                  margin: "auto",
                  width: "15px",
                  height: "15px",
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
                sx={{
                  margin: 0,
                  [muiInputRoot]: {
                    border: "0px solid #ffff",
                  },
                }}
                onClick={() => setOpen(true)}
                components={{
                  OpenPickerIcon: function () {
                    return null;
                  },
                }}
                inputFormat={"MMM dd, yyyy"}
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
                display: "flex",
                alignItems: "flex-end",
                background: "#fff",
                width: isDesktop ? "312px" : "auto",
                paddingLeft: "15px",
                marginTop: isDesktop ? "0px" : "16px",
              }}
            >
              <VisibilityOutlinedIcon
                sx={{
                  margin: "auto",
                  width: "18px",
                  height: "18px",
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
                    },
                  },
                }}
                label={"Purposes of Visit"}
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
              />
            </Box>
          );
        }}
      />
    );
  }

  function renderInsuranceCarrier(isOpenProps = {}) {
    return (
      <Controller
        name="insuranceCarrier"
        control={control}
        render={({ field: { onChange, value }, fieldState: { _error } }) => {
          return (
            <Autocomplete
              {...isOpenProps}
              freeSolo={true}
              id="insurance-carrier"
              data-testid={APPOINTMENT_TEST_ID.insuranceInput}
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
              sx={{ ...onGetInsuranceCarrierStyle() }}
              componentsProps={{
                popper: {
                  className: !isDesktop
                    ? "filter-heading-mobile"
                    : "filter-heading-dekstop",
                },
              }}
              value={value}
              onChange={(_e, data) => {
                onChange(data.name);
              }}
              onInputChange={(_e, newInputValue) => {
                onChange(newInputValue);
              }}
              renderInput={onRenderInputInsurance}
              PaperComponent={(props) => {
                return (
                  <Paper
                    {...props}
                    sx={{ height: isDesktop ? "auto" : "349px" }}
                  />
                );
              }}
              PopperComponent={CustomPopper}
              renderOption={(props, option) => {
                return (
                  <Box key={props["data-option-index"]}>
                    <li {...props}>{option.name}</li>
                    {option.divider ? (
                      <Divider className={styles.renderDivider} />
                    ) : (
                      <></>
                    )}
                  </Box>
                );
              }}
            />
          );
        }}
      />
    );
  }

  function renderDekstopView() {
    return (
      <Box className={styles.titleHeadingWrapper}>
        <Box className={styles.centeredElement}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              flexDirection: "row",
              display: "flex",
              background: "#fff",
              borderRadius: "50px",
            }}
          >
            {renderLocationFilter()}
            <Divider orientation="vertical" flexItem />
            {renderDateFilter()}
            <Divider orientation="vertical" flexItem />
            {renderPurposeOfVisit()}
            <Divider orientation="vertical" flexItem />
            {renderInsuranceCarrier()}
            <StyledButton
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
              }}
            >
              <SearchIcon sx={{ color: colors.darkGreen, width: 26 }} />
            </StyledButton>
          </form>
          <Box className={styles.centeredField}>
            {renderMandatoryFieldError()}
            <Typography
              className={styles.optionalPurposeText}
              variant={"bodyTinyRegular"}
            >
              (Optional)
            </Typography>
            <Typography
              className={styles.optionalInsuranceText}
              variant={"bodyTinyRegular"}
            >
              (Optional)
            </Typography>
          </Box>
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
          value={value}
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
    const dateIcon = (
      <CalendarTodayIcon
        sx={{
          margin: "auto",
          width: "15px",
          height: "15px",
          color: colors.darkGreen,
        }}
      />
    );
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
          label="Purposes of Visit"
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
    const purposeIcon = (
      <VisibilityOutlinedIcon
        sx={{
          margin: "auto",
          width: "18px",
          height: "18px",
          color: colors.darkGreen,
        }}
      />
    );
    return renderMobileField(purposeIcon, purposeInput, "purposeOfVisit", true);
  }

  function renderMobileInsuranceTextField() {
    const insuranceInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={value}
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
    const insuraceIcon = (
      <Box
        sx={{
          margin: "auto",
        }}
      >
        <Image alt="" src={imageSrcState} width={20} height={20} />
      </Box>
    );
    return renderMobileField(
      insuraceIcon,
      insuranceInput,
      "insuranceCarrier",
      true
    );
  }

  function handleOpenDialog(type) {
    let child = <></>;
    if (type === "date") {
      child = (
        <Controller
          name={"location"}
          control={control}
          render={({ field: { onChange, value }, fieldState: { _error } }) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  minDate={minDate}
                  maxDate={maxDate}
                  openTo="day"
                  value={value}
                  onChange={(newValue) => {
                    onChange(newValue);
                    handleCloseDialog();
                  }}
                  renderInput={(props) => <TextField {...props} />}
                />
              </LocalizationProvider>
            );
          }}
        />
      );
    } else if (type === "purposeInput") {
      child = (
        <Box>
          <Typography className={styles.dialogSelectMenuTitle}>
            Appointment Type
          </Typography>
          <Controller
            name={"purposeOfVisit"}
            control={control}
            render={({ field: { onChange } }) => {
              return purposeOfVisitData.map((option, idx) => {
                return (
                  <Box
                    key={idx}
                    className={styles.dialogSelectMenu}
                    onClick={() => {
                      onChange(option.title);
                      handleCloseDialog();
                    }}
                  >
                    {getMenuList(option.title, option.subtitle)}
                  </Box>
                );
              });
            }}
          />
        </Box>
      );
    } else if (type === "insuranceCarrier") {
      child = (
        <Box>
          <Typography
            className={[
              styles.dialogSelectMenuTitle,
              styles.dialogSelectMenuInsurance,
            ].join(", ")}
          >
            Enter your insurance information
          </Typography>
          {renderInsuranceCarrier({ open: true })}
        </Box>
      );
    } else if (type === "location") {
      child = (
        <Box>
          <Box
            className={isEmptyLocation ? styles.errorField : ""}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              paddingLeft: "15px",
              border: "1px solid #BDBDBD",
              borderRadius: "4px",
            }}
          >
            {locationIconUI()}
            <Controller
              name={"location"}
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { _error },
              }) => {
                return (
                  <StyledInput
                    autoFocus
                    value={value}
                    onChange={onChange}
                    type="default"
                    variant="filled"
                    label="City, state, or zip code"
                    sx={{
                      width: "100%",
                      [muiInputRoot]: {
                        border: "0px solid #ffff",
                        background: "#fff",
                      },
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.code &&
                        e.code.toLowerCase() === "enter" &&
                        e.target.value &&
                        setOpenDialog
                      ) {
                        setOpenDialog(false);
                        e.preventDefault();
                        return false;
                      }
                    }}
                  />
                );
              }}
            />
          </Box>
          {isGeolocationEnabled && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "6px",
              }}
            >
              <NearMeOutlinedIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  color: colors.darkGreen,
                }}
              />
              <Link className={styles.linkUseMyLocationStyle}>
                Use my current location
              </Link>
            </Box>
          )}
        </Box>
      );
    }
    setContentDialog(child);
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    //Reset data when cancel the dialog
    setOpenDialog(false);
  };

  function renderDialogFilter() {
    return (
      <CustomizedDialogs
        open={openDialog}
        handleClose={handleCloseDialog}
        child={contentDialog}
      />
    );
  }

  function renderMobileView() {
    return (
      <Box className={styles.mobileFilterContainer}>
        {/* <Box className={styles.masking}></Box> */}
        <Box className={styles.mobileContainer}>
          <Typography variant={"h2"} className={styles.mobileTitle}>
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
