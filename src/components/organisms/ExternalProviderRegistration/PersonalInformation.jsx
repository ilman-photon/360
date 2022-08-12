import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import validator from "validator";
import Button from "@mui/material/Button";
import globalStyles from "../../../styles/Global.module.scss";
import { styles } from "./style";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/router";

const Information = ({
  nextStep,
  sendProviderUserData,
  sendNPIValue,
  sendDesignationValue,
  sendLastNameValue,
  sendFirstNameValue,
  sendMiddleNameValue,
  sendBirthDay,
  sendGenderValue,
}) => {
  const [npi, setNPI] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [birthDay, setBirthDay] = useState(new Date());
  const [gender, setGender] = useState("");
  const [designation, setDesignation] = useState("");
  const [npiError, setNPIError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(true);
  const [npiErrorHelper, setNPIErrorHelper] = useState("*Required");
  const [lastNameHelper, setLastNameHelper] = useState("*Required");
  const [firstNameHelper, setFirstNameHelper] = useState("*Required");
  const [middleNameError, setMiddleNameError] = useState(false);
  const [middleNameHelper, setMiddleNameHelper] = useState("");
  const router = useRouter();
  const genders = [
    {
      value: "1",
      label: "Male",
    },
    {
      value: "2",
      label: "Female",
    },
    {
      value: "3",
      label: "Transgender",
    },
    {
      value: "4",
      label: "Gender Neutral",
    },
    {
      value: "5",
      label: "Non-binary",
    },
    {
      value: "6",
      label: "Agender",
    },
    {
      value: "7",
      label: "Pangender",
    },
    {
      value: "8",
      label: "Genderqueer",
    },
    {
      value: "9",
      label: "Two spirit",
    },
    {
      value: "10",
      label: "Third gender",
    },
  ];

  const handleNPI = (e) => {
    let npiValue = e.target.value;
    setNPI(npiValue);
    sendNPIValue(npiValue);
    axios
      .get(
        "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/provider/registration/validatenpi/" +
          npiValue
      )
      .then((response) => {
        if (response.data.ResponseCode == 1) {
          setNPIErrorHelper("NPI # is valid");
          setNPIError(false);
          setInputDisabled(false);
          let userData = JSON.parse(response.data.UserData);
          sendProviderUserData(userData);
          setLastName(userData.lastname);
          setMiddleName(userData.middlename);
          setFirstName(userData.firstname);
          setBirthDay(userData.birthday);
          setGender(userData.gender);
          setDesignation(userData.designation);
          sendDesignationValue(userData.designation);
          sendLastNameValue(userData.lastname);
          sendFirstNameValue(userData.firstname);
          sendMiddleNameValue(userData.middlename);
          sendBirthDay(userData.birthday);
          sendGenderValue(userData.gender);
          setFirstNameHelper("");
          setLastNameHelper("");
          setFirstNameError(false);
          setLastNameError(false);
        } else {
          setNPIErrorHelper("NPI # is invalid");
          setNPIError(true);
          setInputDisabled(true);
        }
      })
      .catch((error) => {
        if (error.response.data.ResponseCode == 0) {
          setNPIErrorHelper("NPI # is invalid");
          setNPIError(true);
          setInputDisabled(true);
        }
      });
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
    sendDesignationValue(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    sendLastNameValue(e.target.value);
    if (validator.isAlpha(e.target.value)) {
      setLastNameError(false);
      setLastNameHelper("");
    } else {
      setLastNameError(true);
      setLastNameHelper("Invalid Format");
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    sendFirstNameValue(e.target.value);
    if (validator.isAlpha(e.target.value)) {
      setFirstNameError(false);
      setFirstNameHelper("");
    } else {
      setFirstNameError(true);
      setFirstNameHelper("Invalid Format");
    }
  };

  const handleMiddleNameChange = (e) => {
    setMiddleName(e.target.value);
    sendMiddleNameValue(e.target.value);
    if (validator.isAlpha(e.target.value)) {
      setMiddleNameError(false);
      setMiddleNameHelper("");
    } else {
      setMiddleNameError(true);
      setMiddleNameHelper("Invalid Format");
    }
  };

  const birthdayChange = (birthday) => {
    let formatBirthday = moment(birthday).format("MM/DD/YYYY");
    setBirthDay(formatBirthday);
    sendBirthDay(formatBirthday);
  };

  const genderChange = (event) => {
    setGender(event.target.value);
    sendGenderValue(event.target.value);
  };

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    if (!npi || !lastName || !firstName) {
      if (!npi) {
        setNPIError(true);
        setNPIErrorHelper("This is a required field");
      }
      if (!lastName) {
        setLastNameError(true);
        setLastNameHelper("This is a required field");
      }
      if (!firstName) {
        setFirstNameError(true);
        setFirstNameHelper("This is a required field");
      }
    } else {
      nextStep();
    }
  };

  return (
    <Box className={globalStyles.container}>
      <Stack spacing={3}>
        <div style={styles.titleStyles}>Register Account</div>
        <div style={styles.subtitleStyles}>Personal Information</div>
        <form onSubmit={submitFormData} style={styles.form}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item md={12} xs={12} style={styles.gridItem}>
              <TextField
                id="npi"
                label="NPI*"
                name="npi"
                style={styles.textField}
                margin="normal"
                variant="outlined"
                type={"number"}
                error={npiError}
                autoComplete="off"
                value={npi}
                onChange={handleNPI}
                helperText={npiErrorHelper}
                InputProps={{ style: { fontSize: 14 } }}
                size="small"
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
              />
            </Grid>
            <Grid item md={12} xs={12} style={styles.gridItem}>
              <TextField
                id="designation"
                label="Designation"
                name="designation"
                style={styles.textField}
                margin="normal"
                variant="outlined"
                type={"text"}
                autoComplete="off"
                value={designation}
                onChange={handleDesignationChange}
                InputProps={{ style: { fontSize: 14 } }}
                size="small"
                disabled={inputDisabled}
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
              />
            </Grid>
            <Grid item md={12} xs={12} style={styles.gridItem}>
              <TextField
                id="lastName"
                label="Last Name*"
                name="lastName"
                margin="normal"
                style={styles.textField}
                variant="outlined"
                error={lastNameError}
                value={lastName}
                autoComplete="off"
                onChange={handleLastNameChange}
                helperText={lastNameHelper}
                type={"text"}
                InputProps={{ style: { fontSize: 14 } }}
                disabled={inputDisabled}
                size="small"
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
              />
            </Grid>
            <Grid item md={12} xs={12} style={styles.gridItem}>
              <TextField
                id="middleName"
                label="Middle Name"
                name="middleName"
                style={styles.textField}
                margin="normal"
                variant="outlined"
                value={middleName}
                autoComplete="off"
                onChange={handleMiddleNameChange}
                error={middleNameError}
                type={"text"}
                size="small"
                helperText={middleNameHelper}
                InputProps={{ style: { fontSize: 14 } }}
                disabled={inputDisabled}
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
              />
            </Grid>
            <Grid item md={12} xs={12} style={styles.gridItem}>
              <TextField
                id="firstName"
                label="First Name*"
                name="firstName"
                margin="normal"
                variant="outlined"
                style={styles.textField}
                error={firstNameError}
                value={firstName}
                onChange={handleFirstNameChange}
                helperText={firstNameHelper}
                type={"text"}
                autoComplete="off"
                size="small"
                InputProps={{ style: { fontSize: 14 } }}
                disabled={inputDisabled}
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item md={6} xs={6} style={styles.dateGenderItems}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  label="Birth Day"
                  id="birthday"
                  name="birthday"
                  variant="outlined"
                  inputFormat="MM/dd/yyyy"
                  value={birthDay}
                  onChange={birthdayChange}
                  disabled={inputDisabled}
                  maxDate={new Date()}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      InputProps={{ style: { fontSize: 14 } }}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={6} xs={6} style={styles.dateGenderItems}>
              <TextField
                id="gender"
                select
                label="Gender"
                name="gender"
                margin="normal"
                variant="outlined"
                style={styles.textField}
                disabled={inputDisabled}
                value={gender}
                size="small"
                InputProps={{ style: { fontSize: 14 } }}
                onChange={genderChange}
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={styles.containedButton}>
            Next: Specialization
          </Button>
          <div
            style={styles.backToLogin}
            onClick={() => router.push("/provider/login")}
          >
            Back To Login
          </div>
        </form>
      </Stack>
    </Box>
  );
};

export default Information;
