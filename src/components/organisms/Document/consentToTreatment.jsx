import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";
import StyledInput from "../../atoms/Input/input";
import SignForm from "../../molecules/SignForm/signForm";
import styles from "./styles.module.scss";

export default function ConsentToTreatment({
  defaultDataValue = {},
  disableInput = false,
  isSubmitForm = false,
  useFormProps = null,
  controlName = {
    patientName: "patientName",
    patientName2: "patientName2",
    guardian: "guradian",
    phoneNumber: "phoneNumber",
    contactEmergency1: "contactEmergency1",
    contactEmergency2: "contactEmergency2",
    emergency1: "emergency1",
    emergency2: "emergency2",
    medicalConcern: "medicalConcern",
    knownAlergies: "knownAlergies",
    insurancePlan: "insurancePlan",
    faterName: "faterName",
    motherName: "motherName",
    fatherBusinessPhone: "fatherBusinessPhone",
    motherBusinessPhone: "motherBusinessPhone",
    fatherHomePhone: "fatherHomePhone",
    motherHomePhone: "motherHomePhone",
    fatherAddress: "fatherAddress",
    motherAddress: "motherAddress",
    fatherCity: "fatherCity",
    motherCity: "motherCity",
    sign: "sign",
    signDate: "signDate",
  },
}) {
  const isDesktop = useMediaQuery("(min-width: 900px)");
  const { errors, isSubmitting, control } = useFormProps;

  useEffect(() => {
    if (Object.keys(errors).length === 1 && errors.sign) {
      const signBtn = document.getElementById("signBtn");
      signBtn.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  const renderDefaultInput = (
    mandatory,
    label,
    controlname,
    testId,
    maxWidthDesktop = "300px",
    marginRight = "0",
    marginVertical = "10px",
    readOnly = false,
    customError = {}
  ) => {
    return (
      <Controller
        name={controlname}
        control={control}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => {
          return (
            <StyledInput
              inputRef={ref}
              value={value}
              onChange={onChange}
              maxLength={50}
              disabled={disableInput || isSubmitForm}
              error={!!error}
              helperText={error ? error.message : null}
              type="default"
              variant="filled"
              label={label}
              data-testid={testId}
              inputProps={{
                "aria-label": `${label} field`,
              }}
              required={mandatory}
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", md: maxWidthDesktop },
                marginLeft: "10px",
                marginRight: marginRight,
                marginTop: marginVertical,
                marginBottom: marginVertical,
                ".MuiFilledInput-root.MuiInputBase-root.MuiInputBase-colorPrimary":
                  {
                    border: "1px solid #BDBDBD",
                  },
                ".MuiFilledInput-root.Mui-error": {
                  borderColor: "#B93632 !important",
                },
                ".MuiFormHelperText-root.Mui-error": {
                  margin: 0,
                  padding: "0 14px",
                  ...customError,
                },
              }}
              InputProps={{
                readOnly: readOnly,
              }}
            />
          );
        }}
        rules={
          !disableInput && mandatory
            ? {
                required: "Please update all required fields.",
              }
            : {}
        }
      />
    );
  };

  const renderPhoneInput = (
    mandatory,
    label,
    controlname,
    testId,
    widthDesktop = "300px",
    customError = {}
  ) => {
    return (
      <Controller
        name={controlname}
        control={control}
        render={({
          field: { onChange, value, ref },
          fieldState: { error },
        }) => {
          return (
            <StyledInput
              inputRef={ref}
              value={value}
              widthPhone={widthDesktop}
              centerAlign={true}
              onChange={onChange}
              maxLength={50}
              disabled={disableInput || isSubmitForm}
              error={!!error}
              helperText={error ? error.message : null}
              type="phone"
              variant="filled"
              label={label}
              data-testid={testId}
              inputProps={{
                "aria-label": `${label} field`,
              }}
              required={mandatory}
              sxContainer={{
                width: { xs: "100%", md: widthDesktop },
                m: 1,
              }}
              sx={{
                "&.MuiFormControl-root": {
                  margin: "0",
                  ...customError,
                },
              }}
            />
          );
        }}
        rules={
          !disableInput && mandatory
            ? {
                required: "Please update all required fields.",
              }
            : {}
        }
      />
    );
  };

  return (
    <Stack className={styles.textContainer}>
      <Grid
        container
        spacing={2}
        sx={{
          margin: "24px 0",
          background: "#F4F4F4",
          width: "100%",
          padding: "16px 16px 32px 16px",
          ".MuiGrid-item:first-of-type": {
            pl: 0,
          },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Typography className={styles.minorText} tabIndex={0}>
            The undersigned parent(s) or guardian(s) of
          </Typography>
          {renderDefaultInput(
            true,
            "patient's name",
            controlName.patientName,
            "patient-name-field",
            "300px",
            "0",
            "10px",
            true,
            { backgroundColor: "#F4F4F4" }
          )}
          <Stack
            direction={"row"}
            sx={{
              display: { xs: "none !important", md: "flex !important" },
              flex: { xs: "0 !important", md: "1 !important" },
              margin: "auto 10px !important",
            }}
          >
            <Typography
              className={styles.minorText}
              tabIndex={0}
              sx={{
                margin: "auto 0px !important",
              }}
            >
              , a minor, authorizes
            </Typography>
            {renderDefaultInput(
              false,
              "babysitter, guardian, etc.",
              controlName.guardian,
              "guardian-field",
              "320px",
              "0",
              "10px",
              false,
              { backgroundColor: "#F4F4F4" }
            )}
          </Stack>
        </Grid>
        {!isDesktop && (
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: "flex", md: "none" },
              paddingLeft: "0px !important",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
            }}
          >
            <Typography className={styles.minorText} tabIndex={0}>
              , a minor, authorizes
            </Typography>
            {renderDefaultInput(
              false,
              "babysitter, guardian, etc.",
              controlName.guardian,
              "guardian-field",
              "320px",
              "0",
              "10px",
              false,
              { backgroundColor: "#F4F4F4" }
            )}
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={24}
          sx={{
            display: "flex",
            paddingLeft: "0px !important",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Typography className={styles.minorText} tabIndex={0}>
            to consent to treatment of minor
          </Typography>
          {renderDefaultInput(
            true,
            "patient's name",
            controlName.patientName2,
            "patient-name2-field",
            "325px",
            "10px",
            "10px",
            true,
            { backgroundColor: "#F4F4F4" }
          )}
          <Typography
            className={styles.minorText}
            sx={{ display: { xs: "none", md: "block" } }}
            tabIndex={0}
          >
            including, but not limited to, instilling drops, testing,or minor
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={24}
          sx={{
            display: "flex",
            paddingLeft: "0px !important",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Typography
            className={styles.minorText}
            sx={{ display: { xs: "none", md: "block" } }}
            tabIndex={0}
          >
            procedures, when I am not available in person, or immediately by a
            telephonecall, to
          </Typography>
          <Typography
            className={styles.minorText}
            sx={{ display: { xs: "block", md: "none" } }}
            tabIndex={0}
          >
            including, but not limited to, instilling drops, testing,or minor
            procedures, when I am not available in person, or immediately by a
            telephonecall, to
          </Typography>
          {renderPhoneInput(
            false,
            "patient's telephone number",
            controlName.phoneNumber,
            "patient-number-field",
            "300px",
            { backgroundColor: "#F4F4F4" }
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography tabIndex={0} className={styles.minorTextInput}>
            1. Persons to contact in an emergency:
          </Typography>
        </Grid>
        <Grid
          item
          xs={5.5}
          md={6.95}
          sx={{ marginRight: { xs: "2.5px", md: "5px" } }}
        >
          {renderDefaultInput(
            true,
            "Name",
            controlName.emergency1,
            "emergency-name-field",
            "100%"
          )}
        </Grid>
        <Grid
          item
          xs={5.95}
          md={4.95}
          sx={{ marginLeft: { xs: "2.5px", md: "5px" } }}
        >
          {renderPhoneInput(
            true,
            "Phone Number",
            controlName.contactEmergency1,
            "emergency1-number-field",
            "100%"
          )}
        </Grid>
        <Grid
          item
          xs={5.95}
          md={6.95}
          sx={{ marginRight: { xs: "2.5px", md: "5px" } }}
        >
          {renderDefaultInput(
            false,
            "Name",
            controlName.emergency2,
            "emergency-name2-field",
            "100%"
          )}
        </Grid>
        <Grid
          item
          xs={5.5}
          md={4.95}
          sx={{ marginLeft: { xs: "2.5px", md: "5px" } }}
        >
          {renderPhoneInput(
            false,
            "Phone Number",
            controlName.contactEmergency2,
            "emergency2-number-field",
            "100%"
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography tabIndex={0} className={styles.minorTextInput}>
            2. Medical concerns or any learning disabilities
          </Typography>
          {renderDefaultInput(
            false,
            "Medical Concern",
            controlName.medicalConcern,
            "medical-concern-field",
            "100%"
          )}
          <Typography tabIndex={0} className={styles.minorTextInput}>
            3. Known allergies
          </Typography>
          {renderDefaultInput(
            false,
            "Known Allergies",
            controlName.knownAlergies,
            "known-allergies-field",
            "100%"
          )}
          <Typography tabIndex={0} className={styles.minorTextInput}>
            4. Health Insurance Plan (name and number)
          </Typography>
          {renderDefaultInput(
            false,
            "Health Insurance Plan",
            controlName.insurancePlan,
            "insurance-plan-field",
            "100%"
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography tabIndex={0} className={styles.minorTextInput}>
            Parent(s) Name
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.9}
          sx={{ marginRight: { xs: "0", md: "10px" } }}
        >
          {renderDefaultInput(
            false,
            "Father Name",
            controlName.faterName,
            "father-name-field",
            "100%"
          )}
          {renderPhoneInput(
            true,
            "Business Phone",
            controlName.fatherBusinessPhone,
            "fatherBusiness-number-field",
            "100%"
          )}
          {renderPhoneInput(
            true,
            "Home Phone",
            controlName.fatherHomePhone,
            "fatherHome-number-field",
            "100%"
          )}
          {renderDefaultInput(
            true,
            "Address",
            controlName.fatherAddress,
            "father-address-field",
            "100%"
          )}
          {renderDefaultInput(
            true,
            "City/State/Zip",
            controlName.fatherCity,
            "father-city-field",
            "100%"
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={5.9}
          sx={{ marginLeft: { xs: "0", md: "10px" } }}
        >
          {renderDefaultInput(
            false,
            "Mother Name",
            controlName.motherName,
            "mother-name-field",
            "100%"
          )}
          {renderPhoneInput(
            false,
            "Business Phone",
            controlName.motherBusinessPhone,
            "motherBusiness-number-field",
            "100%"
          )}
          {renderPhoneInput(
            false,
            "Home Phone",
            controlName.motherHomePhone,
            "motherHome-number-field",
            "100%"
          )}
          {renderDefaultInput(
            false,
            "Address",
            controlName.motherAddress,
            "emergency-name2-field",
            "100%"
          )}
          {renderDefaultInput(
            false,
            "City/State/Zip",
            controlName.motherCity,
            "mother-city-field",
            "100%"
          )}
        </Grid>
      </Grid>
      <SignForm
        isSigned={defaultDataValue?.sign}
        isEdit={disableInput}
        isSubmitForm={isSubmitForm}
        useFormProps={useFormProps}
        showRelationship={false}
        isReadOnlyDate={true}
        textInfoPosition="none"
        controlName={{
          sign: controlName.sign,
          date: controlName.signDate,
        }}
      />
      <Typography className={styles.minorNoteTxt} tabIndex={0}>
        This Consent shall remain effective until written revocation, signed by
        the minor’s parent(s), of theConsent is received by the
        physician/clinic.
      </Typography>
    </Stack>
  );
}
