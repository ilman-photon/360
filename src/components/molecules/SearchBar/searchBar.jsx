import {
  Autocomplete,
  Badge,
  Box,
  Button,
  Dialog,
  Divider,
  IconButton,
  Popper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { StyledButton } from "../../atoms/Button/button";
import StyledInput from "../../atoms/Input/input";
import SearchIcon from "@mui/icons-material/Search";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import styles from "./styles.module.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useState } from "react";
import { Regex } from "../../../utils/regex";

export const AutoCompleteField = ({
  id,
  options,
  sx,
  label,
  testId,
  textfieldId,
  isMobile,
  value,
  onChange,
}) => {
  return (
    <Autocomplete
      disablePortal
      id={id}
      options={options}
      sx={sx}
      freeSolo
      PopperComponent={(props) => (
        <Popper
          {...props}
          sx={
            isMobile
              ? {
                  "& .MuiAutocomplete-paper": {
                    border: "1px solid #DDDBDA",
                    boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.16)",
                    borderRadius: "4px",
                    margin: "16px -2px 0",
                  },
                  "& .MuiAutocomplete-option": {
                    fontSize: "14px",
                  },
                }
              : {
                  "& .MuiAutocomplete-option": {
                    fontSize: "14px",
                  },
                }
          }
        />
      )}
      inputValue={value}
      onInputChange={onChange}
      renderInput={(params) => (
        <StyledInput
          {...params}
          tabIndex={0}
          InputLabelProps={{ "aria-hidden": true }}
          aria-label={label}
          id={textfieldId}
          label={label}
          size="small"
          variant="filled"
          data-testid={testId}
          type="text"
          sx={{
            "& .MuiFilledInput-root": {
              border: "none",
              backgroundColor: !isMobile && "#F4F4F4 !important",
            },
          }}
        />
      )}
    />
  );
};

export default function SearchBar({
  locationList = [],
  specialtyList = [],
  activeFilter = [],
  onRemoveFilter = () => {
    //this is intentional
  },
  onSearchDoctor = () => {
    //this is intentional
  },
  openFilter = () => {
    //this is intentional
  },
}) {
  const [openMobileForm, setOpenMobileForm] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [specialty, setSpecialty] = useState("");

  const validateInput = (e) => {
    const spaceValidation =
      name.length > 0 && !Regex.noWhitespaceRegex.test(e.key);
    const charValidation =
      !Regex.alphabethOnly.test(e.key) &&
      !Regex.numberRegex.test(e.key) &&
      !spaceValidation;
    const keyboardValidation = e.key != "Backspace" && e.key != "Tab";

    if (charValidation && keyboardValidation) {
      e.preventDefault();
    }
  };

  const mobileForm = () => (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          border: "1px solid #0095A9",
          borderRadius: "50px",
          margin: "8px 0 8px 0",
          backgroundColor: "white",
          "& .MuiTextField-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          onClick={() => {
            setOpenMobileForm(true);
          }}
          data-testid="open-form-mobile"
          sx={{
            flex: 1,
            height: "56px",
            paddingLeft: "16px",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={
              name === ""
                ? {
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#193138",
                  }
                : {
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "12px",
                    color: "#003B4A",
                  }
            }
          >
            Doctor Name or practice name
          </Typography>
          {name !== "" && (
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "24px",
                color: "#303030",
              }}
            >
              {name}
            </Typography>
          )}
        </Box>
        <IconButton
          onClick={() => {
            openFilter();
          }}
          sx={{
            padding: 0,
            width: "31px",
            height: "31px",
            background: "#ECECEC",
            borderRadius: "24px",
            marginRight: "12.5px",
          }}
        >
          {activeFilter.length > 0 ? (
            <Badge
              color="error"
              badgeContent={""}
              overlap="circular"
              sx={{
                ".MuiBadge-badge": {
                  minWidth: 12,
                  height: 12,
                  background: "#008294",
                },
              }}
            >
              <FilterListOutlinedIcon sx={{ fill: "#000000" }} />
            </Badge>
          ) : (
            <FilterListOutlinedIcon sx={{ fill: "#000000" }} />
          )}
        </IconButton>
      </Box>
      <Dialog fullScreen open={openMobileForm}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            margin: "24px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: "18px !important",
              lineHeight: "26px !important",
            }}
          >
            Doctor Search
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              border: "1px solid #0095A9",
              borderRadius: "50px",
              margin: "8px 0 24px 0",
            }}
          >
            <IconButton
              sx={{
                padding: 0,
              }}
              onClick={() => {
                setOpenMobileForm(false);
              }}
            >
              <ArrowBackOutlinedIcon sx={{ marginLeft: "16px" }} />
            </IconButton>
            <StyledInput
              tabIndex={0}
              InputLabelProps={{ "aria-hidden": true }}
              aria-label={"Doctor name, practice name"}
              id="doctor"
              label="Doctor Name or practice name"
              variant="filled"
              data-testid="doctor-name"
              type="text"
              value={name}
              onKeyDown={(e) => {
                validateInput(e);
              }}
              onChange={(event) => {
                setName(event.target.value);
              }}
              sx={{
                flex: 1,
                marginRight: "25px",
                "& .MuiFilledInput-root": {
                  border: "none",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 400,
                fontSize: "18px !important",
                lineHeight: "26px !important",
              }}
            >
              Filter by
            </Typography>

            <AutoCompleteField
              id="location"
              options={locationList}
              sx={{
                width: "auto",
                background: "#FFFFFF",
                border: "1px solid #BDBDBD",
                borderRadius: "4px",
              }}
              label="City or Zip"
              testId="location-field"
              textfieldId="location-field"
              isMobile
              value={location}
              onChange={(_event, newValue) => {
                if (Regex.alphaNumericRegex.test(newValue) || newValue === "") {
                  setLocation(newValue);
                }
              }}
            />

            <AutoCompleteField
              id="specialty"
              options={specialtyList}
              sx={{
                width: "auto",
                background: "#FFFFFF",
                border: "1px solid #BDBDBD",
                borderRadius: "4px",
              }}
              label="Specialty"
              testId="specialty-field"
              textfieldId="specialty-field"
              isMobile
              value={specialty}
              onChange={(_event, newValue) => {
                setSpecialty(newValue);
              }}
            />

            <StyledButton
              aria-label={"Search"}
              type="submit"
              onClick={() => {
                setOpenMobileForm(false);
                onSearchDoctor({
                  name,
                  location,
                  specialty,
                });
              }}
              size="small"
              gradient={false}
              data-testid={"search-btn"}
            >
              Search
            </StyledButton>
          </Box>
        </Box>
      </Dialog>
    </>
  );

  const desktopForm = () => (
    <Box
      sx={{
        display: "flex",
        background: "#fff",
        borderRadius: "50px",
        flex: 1,
        margin: "16px 0",
        border: "1px solid #0095A9",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <SearchIcon sx={{ width: 18, marginLeft: "21px", fill: "#757575" }} />
        <StyledInput
          tabIndex={0}
          InputLabelProps={{ "aria-hidden": true }}
          aria-label={"Doctor name, practice name"}
          id="doctor"
          label="Doctor Name or practice name"
          variant="filled"
          data-testid="doctor-name"
          type="text"
          value={name}
          onKeyDown={(e) => {
            validateInput(e);
          }}
          onChange={(event) => {
            setName(event.target.value);
          }}
          sx={{
            flex: 1,
            "& .MuiFilledInput-root": {
              border: "none",
              height: "56px",
            },
          }}
        />
      </Box>
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          borderColor: "#D4D4D4",
        }}
      />
      <AutoCompleteField
        id="location"
        options={locationList}
        sx={{
          width: {
            sm: "25%",
            md: "224px",
          },
          "& .MuiFilledInput-root": {
            height: "56px !important",
          },
        }}
        label="City or Zip"
        testId="location-field"
        textfieldId="location-field"
        value={location}
        onChange={(_event, newValue) => {
          if (Regex.alphaNumericRegex.test(newValue) || newValue === "") {
            setLocation(newValue);
          }
        }}
      />
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          borderColor: "#D4D4D4",
        }}
      />
      <AutoCompleteField
        id="specialty"
        options={specialtyList}
        sx={{
          width: {
            sm: "25%",
            md: "262px",
          },
          "& .MuiFilledInput-root": {
            height: "56px",
          },
        }}
        label="Specialty"
        testId="specialty-field"
        textfieldId="specialty-field"
        value={specialty}
        onChange={(_event, newValue) => {
          setSpecialty(newValue);
        }}
      />
      <StyledButton
        aria-label={"Search"}
        type="button"
        mode="filter"
        size="small"
        gradient={false}
        data-testid={"search-btn"}
        onClick={() => {
          onSearchDoctor({
            name,
            location,
            specialty,
          });
        }}
        sx={{
          height: "52px",
          background: "#BFE4E8",
          border: "0px",
          cursor: "pointer",
        }}
      >
        <SearchIcon sx={{ width: 32, fill: "#003B4A" }} />
      </StyledButton>
    </Box>
  );

  const filterPil = () => (
    <Box flexDirection={"row"} display={"flex"} gap={"10px"} flexWrap={"wrap"}>
      <Button
        onClick={() => {
          openFilter();
        }}
        sx={{
          border: "1px solid #0095A9",
          borderRadius: "24px",
          textTransform: "none",
          color: "#0095A9",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "18px",
          height: "30px",
          width: "112px",
        }}
        startIcon={<FilterListOutlinedIcon sx={{ fill: "black" }} />}
        endIcon={
          <KeyboardArrowDownOutlinedIcon sx={{ fill: "rgba(0, 0, 0, 0.54)" }} />
        }
      >
        Filters
      </Button>
      {activeFilter.map((item, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #003B4A",
            borderRadius: "24px",
            textTransform: "none",
            color: "#6D6F73",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "18px",
            padding: "0 8px",
            height: "30px",
            whiteSpace: "nowrap",
          }}
        >
          {item.name}
          <IconButton
            sx={{ padding: 0 }}
            onClick={() => {
              onRemoveFilter(item);
            }}
            data-testid={`remove-${item.name}`}
          >
            <CloseOutlinedIcon
              sx={{
                width: "18px",
                padding: 0,
              }}
            />
          </IconButton>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box
      padding={!isMobile ? "24px 21px" : "8px"}
      className={styles.searchDoctor}
    >
      <Typography
        tabIndex={0}
        variant="h2"
        aria-label="Doctor Search"
        sx={{
          fontWeight: 400,
          fontSize: "26px",
          lineHeight: "32px",
        }}
      >
        Doctor Search
      </Typography>
      {!isMobile ? desktopForm() : mobileForm()}
      {!isMobile && filterPil()}
    </Box>
  );
}
