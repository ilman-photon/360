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

const FilterHeading = () => {
  const imageSrcState = "/bx_insurance_card.png";
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  const { handleSubmit, control } = useForm();
  const onSubmit = ({}) => {};

  const [open, setOpen] = React.useState(false);
  const mapsData = ["Use my current location"];

  const purposeOfVisitData = [
    { title: "Eye exam", subtitle: "Test the health of your eye" },
    { title: "Follow up", subtitle: "See your doctor today" },
    { title: "Comprehensive", subtitle: "Get a detailed eye exam" },
    { title: "Contacts only", subtitle: "Get fitted for the right contacts" },
  ];

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
          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Autocomplete
                  freeSolo
                  id="location"
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
                        type="search"
                        variant="filled"
                        {...params}
                        label="City, state, or zip code"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
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
          <Divider orientation="vertical" flexItem />
          <Controller
            name="data"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    background: "#fff",
                    width: "210px",
                    paddingLeft: "15px",
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
          <Divider orientation="vertical" flexItem />
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
                    width: "312px",
                    paddingLeft: "15px",
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
                    inputPropsSx={{
                      "&.MuiInputLabel-shrink": {
                        color: "#303030",
                      },
                    }}
                  />
                </Box>
              );
            }}
          />
          <Divider orientation="vertical" flexItem />
          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <Autocomplete
                  freeSolo
                  id="insurance-carrier"
                  disableClearable={true}
                  options={mapsData}
                  sx={{ width: "320px", background: "#FFF" }}
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
                        <Image
                          alt=""
                          src={imageSrcState}
                          width={20}
                          height={20}
                        />
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
};

export default FilterHeading;
