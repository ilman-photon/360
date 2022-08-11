import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import validator from "validator";
import Button from "@mui/material/Button";
import globalStyles from "../../../styles/Global.module.scss";
import { styles } from "./style";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import { useRouter } from "next/router";

const OfficeDetails = ({
  nextStep,
  prevStep,
  registrationSubmit,
  sendOfficeDetails,
}) => {
  const [addressLine, setAddressLine] = useState("");
  const router = useRouter();
  const [officeDetails, setOfficeDetails] = useState([
    {
      primaryPractice: "",
      practiceName: "",
      addressLine1: "",
      addressLine2: "",
      state: "",
      city: "",
      zip: "",
      office: "",
      fax: "",
      cell: "",
      email: "",
    },
  ]);

  const [emailError, setEmailError] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");

  const handleOfficeDetailsChange = (e, index) => {
    if (e.target.name == "email") {
      let inputValue = e.target.value;
      if (validator.isEmail(inputValue)) {
        setEmailError(false);
        setEmailHelper("Valid Format");
      } else {
        setEmailError(true);
        setEmailHelper("Invalid Format");
      }
    }
    const { name, value } = e.target;
    const officeDetailsList = [...officeDetails];
    officeDetailsList[index][name] = value;
    setOfficeDetails(officeDetailsList);
    console.log(officeDetailsList);
  };

  const handleOfficeDetailsRemove = (index) => {
    const officeDetailsList = [...officeDetails];
    officeDetailsList.splice(index, 1);
    setOfficeDetails(officeDetailsList);
  };

  const handleOfficeDetailsAdd = () => {
    setOfficeDetails([
      ...officeDetails,
      {
        primaryPractice: "primary",
        practiceName: "",
        addressLine1: "",
        addressLine2: "",
        state: "",
        city: "",
        zip: "",
        office: "",
        fax: "",
        cell: "",
        email: "",
      },
    ]);
  };

  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
    sendOfficeDetails(officeDetails);
  };

  useEffect(() => {
    fetch(
      "https://stg.eyecare360plus.eyecare-partners.com/ecp-stg-apps/address-validation/address-validation/address/v1/auto-completion?search=30"
    )
      .then((response) => response.json())
      .then((actualData) => setAddressLine(actualData.response.suggestions))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleAddressLine = (value, index) => {
    let addressValue = value.target.innerText;
    let addressDetails = addressValue.split(",");
    let [street, city, state, zip] = addressDetails;
    axios
      .get(
        "https://stg.eyecare360plus.eyecare-partners.com/ecp-stg-apps/address-validation/address-validation/address/v1/validation?",
        {
          params: {
            street: street,
            city: city,
            state: state,
            zipcode: zip,
          },
        }
      )
      .then((response) => {
        const addressUpdate = officeDetails.filter((obj, i) => {
          console.log(obj);
          return i === index;
        });
        addressUpdate[0].addressLine1 =
          response.data.response[0].delivery_line_1 +
          response.data.response[0].components.city_name +
          response.data.response[0].components.state_abbreviation +
          response.data.response[0].components.zipcode;
        addressUpdate[0].city = response.data.response[0].components.city_name;
        addressUpdate[0].state =
          response.data.response[0].components.state_abbreviation;
        addressUpdate[0].zip = response.data.response[0].components.zipcode;
        const officeDetailsList = [...officeDetails];
        setOfficeDetails(officeDetailsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box className={globalStyles.container}>
      <Stack spacing={3}>
        <div onClick={prevStep}>
          <KeyboardBackspaceIcon sx={{ fontSize: 12 }} />{" "}
          <span style={styles.backToPage}>Back To Specialization</span>
        </div>
        <div style={styles.titleStyles}>Register Account</div>
        <div style={styles.subtitleStyles}>Office Details</div>
        <form onSubmit={submitFormData} style={styles.form}>
          {officeDetails.map((officeInput, index) => (
            <div key={index} className="office-details">
              <div className="addForm">
                <div style={{ marginBottom: "10px" }}>
                  <input
                    type="radio"
                    onChange={(e) => handleOfficeDetailsChange(e, index)}
                    value={officeInput.primaryPractice}
                    name="primaryPractice"
                  />{" "}
                  Primary Practice
                </div>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item md={12} xs={12} style={styles.gridItem}>
                    <TextField
                      id="practiceName"
                      label="Practice Name"
                      name="practiceName"
                      margin="normal"
                      style={styles.textField}
                      variant="outlined"
                      type="text"
                      size="small"
                      autoComplete="off"
                      required
                      InputProps={{ style: { fontSize: 14 } }}
                      value={officeInput.practiceName}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
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
                  <Grid item md={6} xs={6} style={styles.gridItem}>
                    <Autocomplete
                      freeSolo
                      id="addressLine1"
                      disableClearable
                      options={addressLine}
                      getOptionLabel={(option) =>
                        option.street_line +
                        option.city +
                        option.state +
                        option.zipcode
                      }
                      onChange={(newValue) =>
                        handleAddressLine(newValue, index)
                      }
                      renderOption={(props, option) => (
                        <Box component="li" {...props}>
                          {option.street_line} , {option.city} , {option.state},{" "}
                          {option.zipcode}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Address Line1*"
                          name="addressLine1"
                          InputProps={{
                            ...params.InputProps,
                            type: "search",
                            style: { fontSize: 14 },
                          }}
                          size="small"
                          value={officeInput.addressLine1}
                          InputLabelProps={{
                            style: { fontSize: 15, color: "grey" },
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item md={6} xs={6} style={styles.gridItem}>
                    <TextField
                      id="addressLine2"
                      label="Address Line2"
                      name="addressLine2"
                      margin="normal"
                      variant="outlined"
                      autoComplete="off"
                      type="text"
                      size="small"
                      value={officeInput.addressLine2}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
                      InputProps={{ style: { fontSize: 14 } }}
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
                  <Grid item md={6} xs={6} style={styles.gridItem}>
                    <TextField
                      id="state"
                      label="State"
                      name="state"
                      margin="normal"
                      variant="outlined"
                      type="text"
                      size="small"
                      autoComplete="off"
                      required
                      value={officeInput.state}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
                      InputProps={{ style: { fontSize: 14 } }}
                    />
                  </Grid>
                  <Grid item md={6} xs={6} style={styles.gridItem}>
                    <TextField
                      id="city"
                      label="City"
                      name="city"
                      margin="normal"
                      variant="outlined"
                      type="text"
                      size="small"
                      autoComplete="off"
                      required
                      value={officeInput.city}
                      InputProps={{ style: { fontSize: 14 } }}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
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
                  <Grid item md={6} xs={6} style={styles.gridItem}>
                    <TextField
                      id="zip"
                      label="Zip"
                      name="zip"
                      margin="normal"
                      variant="outlined"
                      type="number"
                      size="small"
                      autoComplete="off"
                      required
                      inputProps={{
                        maxLength: 5,
                      }}
                      value={officeInput.zip}
                      InputProps={{ style: { fontSize: 14 } }}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={6} style={styles.gridItem}>
                    <TextField
                      id="office"
                      label="Office (optional)"
                      name="office"
                      margin="normal"
                      variant="outlined"
                      type="text"
                      autoComplete="off"
                      size="small"
                      value={officeInput.office}
                      InputProps={{ style: { fontSize: 14 } }}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
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
                  <Grid item md={6} xs={6} style={styles.gridItem}>
                    <TextField
                      id="fax"
                      label="Fax (XXX)XXX-XXXX"
                      name="fax"
                      margin="normal"
                      variant="outlined"
                      type="text"
                      size="small"
                      required
                      autoComplete="off"
                      InputProps={{ style: { fontSize: 14 } }}
                      value={officeInput.fax}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={6} style={styles.gridItem}>
                    <TextField
                      id="cell"
                      label="Cell (XXX)XXX-XXXX"
                      name="cell"
                      margin="normal"
                      variant="outlined"
                      type="text"
                      size="small"
                      required
                      autoComplete="off"
                      value={officeInput.cell}
                      InputProps={{ style: { fontSize: 14 } }}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
                    />
                  </Grid>
                  <Grid item md={12} xs={12} style={styles.gridItem}>
                    <TextField
                      id="email"
                      label="Email"
                      style={styles.textField}
                      name="email"
                      value={officeInput.email}
                      margin="normal"
                      variant="outlined"
                      size="small"
                      type="email"
                      autoComplete="off"
                      error={emailError}
                      helperText={emailHelper}
                      required
                      InputProps={{ style: { fontSize: 14 } }}
                      onChange={(e) => handleOfficeDetailsChange(e, index)}
                      InputLabelProps={{
                        style: { fontSize: 13, color: "grey" },
                      }}
                    />
                  </Grid>
                </Grid>
                {officeDetails.length - 1 === index &&
                  officeDetails.length < 5 && (
                    <div
                      onClick={() => handleOfficeDetailsAdd()}
                      style={styles.addPractice}
                    >
                      <span>
                        <AddIcon sx={{ fontSize: 16 }} />
                      </span>
                      <span style={styles.addPracticeTitle}>Add Practice</span>
                    </div>
                  )}
              </div>
              <div className="removeForm">
                {officeDetails.length !== 1 && (
                  <div
                    onClick={() => handleOfficeDetailsRemove(index)}
                    style={styles.removePractice}
                  >
                    <span>
                      <RemoveIcon sx={{ fontSize: 16 }} />
                    </span>
                    <span style={styles.removePracticeTitle}>
                      Remove Practice
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}

          <Button
            variant="contained"
            sx={styles.containedButton}
            onClick={registrationSubmit}
            type="submit"
          >
            Register
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

export default OfficeDetails;
