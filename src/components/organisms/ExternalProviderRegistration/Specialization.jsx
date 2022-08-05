import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import globalStyles from "../../../styles/Global.module.scss";
import { styles } from "./style";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import validator from "validator";
import { useRouter } from "next/router";

const Specialization = ({
  nextStep,
  prevStep,
  sendTaxonomyCodeValue,
  sendSpecialization,
  sendClassification,
  providerUserData,
}) => {
  const [taxonomyCode, setTaxonomyCode] = useState("");
  const [classification, setClassification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [showText, setShowText] = useState(false);
  const [taxonomyHelperText, setTaxonomyHelperText] = useState("*Required");
  const router = useRouter();

  useEffect(() => {
    setTaxonomyCode(providerUserData.taxonomycode);
    setClassification(providerUserData.classifications);
    setSpecialization(providerUserData.specialization);
    sendTaxonomyCodeValue(providerUserData.taxonomycode);
    sendSpecialization(providerUserData.specialization);
    sendClassification(providerUserData.classifications);
  }, [
    providerUserData,
    sendTaxonomyCodeValue,
    sendSpecialization,
    sendClassification,
  ]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    if (validator.isAlphanumeric(event.target.value)) {
      setError(false);
      setTaxonomyHelperText("");
    } else {
      setError(true);
      setTaxonomyHelperText("Invalid Format");
    }
    if (event.target.value == "") {
      setClassification("");
      setSpecialization("");
      setFilteredData([]);
      setShowText(false);
    }
    setTaxonomyCode(searchWord);
    axios
      .get(
        "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/provider/registration/gettaxonomydetails/" +
          searchWord
      )
      .then((response) => {
        const newFilter = response.data.filter((value) => {
          return value.taxonomyCode
            .toLowerCase()
            .includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
          setFilteredData([]);
          setShowText(false);
        } else {
          setFilteredData(newFilter);
          setShowText(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTaxonomyCode = (value) => {
    setShowText(false);
    setTaxonomyCode(value.taxonomyCode);
    let taxonomyCodeValue = value.code;
    sendTaxonomyCodeValue(taxonomyCodeValue);
    value.classification !== ""
      ? setClassification(value.classification)
      : setClassification("");
    value.specialization !== ""
      ? setSpecialization(value.specialization)
      : setSpecialization("");
    sendSpecialization(value.specialization);
    sendClassification(value.classification);
  };

  const submitFormData = (e) => {
    e.preventDefault();
    if (!taxonomyCode) {
      setError(true);
      setTaxonomyHelperText("This is a required field");
    } else {
      nextStep();
    }
  };

  return (
    <Box className={globalStyles.container}>
      <Stack spacing={3}>
        <div onClick={prevStep}>
          <KeyboardBackspaceIcon sx={{ fontSize: 12 }} />{" "}
          <span style={styles.backToPage}>Back To Personal Information</span>
        </div>
        <div style={styles.titleStyles}>Register Account</div>
        <div style={styles.specializationStyles}>Specialization</div>
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
                id="taxonomy"
                label="Taxonomy Code*"
                name="taxonomy"
                style={styles.textField}
                autoComplete="off"
                size="small"
                value={taxonomyCode}
                onChange={handleFilter}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                inputProps={{
                  maxLength: 10,
                  style: { fontSize: 14 },
                }}
                variant="outlined"
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
                error={error}
                helperText={taxonomyHelperText}
              />
              {showText && (
                <div className="dataResult" style={styles.dataResult}>
                  {filteredData.map((value) => {
                    return (
                      <div
                        className="dataItem"
                        style={styles.dataItem}
                        key={value.taxonomyCode}
                      >
                        <p onClick={() => handleTaxonomyCode(value)}>
                          {value.taxonomyCode}{" "}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </Grid>
            <Grid item md={12} xs={12} style={styles.gridItem}>
              <TextField
                id="classification"
                label="Classifications"
                name="classification"
                style={styles.classificationTextField}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                type={"text"}
                value={classification}
                size="small"
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
                InputProps={{ style: { fontSize: 14 } }}
                disabled={true}
              />
            </Grid>
            <Grid item md={12} xs={12} style={styles.gridItem}>
              <TextField
                id="specialization"
                label="Specialization"
                name="specialization"
                style={styles.textField}
                margin="normal"
                variant="outlined"
                autoComplete="off"
                value={specialization}
                size="small"
                type={"text"}
                InputLabelProps={{ style: { fontSize: 13, color: "grey" } }}
                InputProps={{ style: { fontSize: 14 } }}
                disabled={true}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={styles.containedButton}>
            Next: Office Details
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

export default Specialization;
