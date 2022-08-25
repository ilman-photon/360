import React from "react";
import styles from "./filterHeading.module.scss";
import {
  Autocomplete,
  Box,
  Divider,
  InputAdornment,
  MenuItem,
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
import { render } from "@testing-library/react";

const FilterHeading = ({ isDesktop = true }) => {
  const imageSrcState = "/bx_insurance_card.png";
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [open, setOpen] = React.useState(false);
  const mapsData = ["Use my current location"];

  const purposeOfVisitData = [
    { title: "Eye exam", subtitle: "Test the health of your eye" },
    { title: "Follow up", subtitle: "See your doctor today" },
    { title: "Comprehensive", subtitle: "Get a detailed eye exam" },
    { title: "Contacts only", subtitle: "Get fitted for the right contacts" },
  ];

  const sxTextField = {
    width: "323px",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px",
    ["& .MuiFilledInput-root"]: {
      border: "0px solid #ffff",
      borderTopRightRadius: "50px",
      borderBottomRightRadius: "50px",
    },
  };

  const menuListUI = (option, idx) => {
    return (
      <MenuItem
        key={idx}
        value={option.subtitle}
        sx={{
          fontSize: "16px",
          ["& li"]: {
            display: "block",
          },
        }}
      >
        <Typography
          variant="bodySmallRegular"
          sx={{ display: "block", color: colors.darkGreen }}
        >
          {option.title}
        </Typography>
        <Typography variant="bodySmallMedium" sx={{ color: colors.darkGreen }}>
          {option.subtitle}
        </Typography>
      </MenuItem>
    );
  };

  function renderLocationFilter() {
    return (
      <Controller
        name="location"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Autocomplete
              freeSolo
              id="location"
              value={value}
              onChange={onChange}
              disableClearable={true}
              options={mapsData}
              sx={{
                width: "347px",
                background: "#FFF",
                borderRadius: "100%",
              }}
              renderInput={(params) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    paddingLeft: "15px",
                  }}
                >
                  <LocationOnOutlinedIcon
                    sx={{
                      margin: "auto",
                      width: "20px",
                      height: "20px",
                      color: colors.darkGreen,
                    }}
                  />
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
                      ["& .MuiFilledInput-root"]: {
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
        defaultValue=""
        sx={{ paddingTop: "16px" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                background: "#fff",
                width: isDesktop ? "210px" : "auto",
                paddingLeft: "15px",
                borderRadius: isDesktop ? 0 : "50px",
                marginTop: isDesktop ? "0px" : "16px",
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
                inputProps={{ readOnly: true }}
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                disableFuture
                type="dob"
                id="dob"
                label="Date"
                isFilter={true}
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
                sx={{
                  margin: 0,
                  ["& .MuiFilledInput-root"]: {
                    border: "0px solid #ffff",
                  },
                }}
                onClick={(e) => setOpen(true)}
                components={{
                  OpenPickerIcon: function () {
                    return null;
                  },
                }}
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
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => {
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
                  "& .MuiFilledInput-root": {
                    border: "0px solid #bbb",
                    backgroundColor: "#fff",
                  },
                }}
                label={"Purposes of Visit"}
                labelId={`purposes-of-visit`}
                id={`purposes-of-visit`}
                options={purposeOfVisitData}
                value={value}
                onChange={(event) => {
                  onChange(event.target.value);
                }}
                renderMenuListUI={menuListUI}
              />
            </Box>
          );
        }}
      />
    );
  }

  function renderInsuranceCarrier() {
    return (
      <Controller
        name="insuranceCarrier"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <Autocomplete
              freeSolo
              id="insurance-carrier"
              disableClearable={true}
              options={mapsData}
              sx={{
                width: isDesktop ? "320px" : "auto",
                background: "#FFF",
                marginTop: isDesktop ? "0px" : "16px",
              }}
              renderInput={(params) => (
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
                    type="search"
                    variant="filled"
                    {...params}
                    label="Insurance Carrier"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    sx={{
                      ["& .MuiFilledInput-root"]: {
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
                height: "52px",
                background: "#BFE4E8",
                border: "0px",
              }}
            >
              <SearchIcon sx={{ color: colors.darkGreen, width: 26 }} />
            </StyledButton>
          </form>
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
    return (
      <Box>
        <Controller
          name={controllerName}
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, fieldState: { error } }) => {
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
                }}
              >
                {icon}
                {textField(onChange, value)}
              </Box>
            );
          }}
        />
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
        />
      );
    };
    const locationIcon = (
      <LocationOnOutlinedIcon
        sx={{
          margin: "auto",
          width: "20px",
          height: "20px",
          color: colors.darkGreen,
        }}
      />
    );
    return renderMobileField(locationIcon, locationInput, "location");
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
      </Box>
    );
  }

  return <>{isDesktop ? renderDekstopView() : renderMobileView()}</>;
};

export default FilterHeading;
