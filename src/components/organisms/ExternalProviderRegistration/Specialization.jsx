import React, { useState } from "react";
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
}) => {
  const [taxonomyCode, setTaxonomyCode] = useState("");
  const [classification, setClassification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [showText, setShowText] = useState(false);
  const [taxonomyHelperText, setTaxonomyHelperText] = useState("*Required");
  const router = useRouter();

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
    const url =
      "https://stg.eyecare360plus.eyecare-partners.com/ecp-stg-apps/employee-management/employee-management/v1/taxonomy-type?search.query=((code=sw=as)OR(classification=sw=as))&pageSize=10&pageNo=0&";
    const bearer_token =
      "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwSlBjVUdTTndqUE5MR0RCOENIaVF1WkRGdDN2MUpTbHpfdzV4QlRkQk80In0.eyJleHAiOjE2NTk2MDIyMTAsImlhdCI6MTY1OTYwMDQxMCwianRpIjoiNTI0N2UyNzctNjhjZS00NDhmLThmODEtYjk3MTUwMjU3NmNhIiwiaXNzIjoiaHR0cHM6Ly9zdGcta2V5Y2xvYWsuZXllY2FyZTM2MHBsdXMuZXllY2FyZS1wYXJ0bmVycy5jb20vYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjoibWFzdGVyLXJlYWxtIiwic3ViIjoiNDQ3NjU3M2YtNThlMS00NGExLWI3YTMtMjZiZjM2MjdjMWQ0IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibWFzdGVyLXJlYWxtIiwic2Vzc2lvbl9zdGF0ZSI6ImRjYzJlOGE2LTcwNWMtNGQzNi1hOTJjLWY4MTc3YmE4OTYxNCIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cDovL2ludGVybmFsLWE5YzBkOTkwNjRjNWE0OTRjYWMwZTZiNjk0ODU2Yzk0LTYzMDI5MDQ2OC51cy1lYXN0LTEuZWxiLmFtYXpvbmF3cy5jb20vIiwiaHR0cDovL2xvY2FsaG9zdDozMDAzIiwiaHR0cDovL2xvY2FsaG9zdDozMDAyIiwiaHR0cHM6Ly9zdGcuZXllY2FyZTM2MHBsdXMuZXllY2FyZS1wYXJ0bmVycy5jb20iLCJodHRwOi8vc3RnLmV5ZWNhcmUzNjBwbHVzLmV5ZWNhcmUtcGFydG5lcnMuY29tIiwiaHR0cHM6Ly9pbnRlcm5hbC1hOWMwZDk5MDY0YzVhNDk0Y2FjMGU2YjY5NDg1NmM5NC02MzAyOTA0NjgudXMtZWFzdC0xLmVsYi5hbWF6b25hd3MuY29tLyIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSIsImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU3lzdGVtIEFkbWluIiwiU3VwZXIgYWRtaW4iXX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6ImRjYzJlOGE2LTcwNWMtNGQzNi1hOTJjLWY4MTc3YmE4OTYxNCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6InRlc3QucGhvdG9uIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidGVzdC5waG90b24iLCJnaXZlbl9uYW1lIjoidGVzdC5waG90b24ifQ.St4k67A8Gd2TWjpfS6cn_Nq60rHBsoZsREXh0byApzU7kAt22NcJkIvcuHBFP194lE7fOK0Sdm8VSqzGFYwTZ7xywwk6SuEBIXj4Fzsy8kEv1TCZL1gk8w4AvofCuuksT6UQNBf4PiG8ihhBihYfWl8o_us6zbOSvDa9BwvTtJ-PZ9T4wdUFp-eP90xIVOQvqo1B1wv1ueMAm0PiaJ46VuF5GXDSmJhBsDvZ4uscG00a9Snd__pqOGGfGOhEt6PXIE-RHcq5WkScHkBBBHq_BP56tGuU7SQcZnLspDNQLYlTFvWzmptOSkH8FPSMIO-ECNAaQkMHPPFPqGlavoG1eA";
    const bearer = "Bearer " + bearer_token;
    axios
      .get(url, {
        headers: {
          Authorization: bearer,
        },
      })
      .then((response) => {
        console.log(taxonomyCode);
        const newFilter = response.data.entities.filter((value) => {
          return value.code.toLowerCase().includes(searchWord.toLowerCase());
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
    setTaxonomyCode(value.code);
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
                        key={value.code}
                      >
                        <p onClick={() => handleTaxonomyCode(value)}>
                          {value.code}{" "}
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
