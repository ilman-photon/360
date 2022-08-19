import {
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./insuranceInformationNew.module.scss";
import { useForm, Controller } from "react-hook-form";
import { StyledInput } from "../../atoms/Input/input";
import { colors } from "../../../styles/theme";
import FormLabel from "@mui/material/FormLabel";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";
import { ImageUploader } from "../../molecules/ImageUploader/imageUploader";
import AutoCompleteInput from "../../molecules/AutoCompleteInput";
import { useEffect } from "react";

export default function InsuranceForm({
  insuranceData = {},
  isEditing = true,
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
}) {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: insuranceData
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  // useEffect(() => {
  //   if (insuranceData) reset(insuranceData);
  // }, [insuranceData]);

  const providerList = [
    { id: 0, label: "Provider 1" },
    { id: 1, label: "Provider 2" },
  ];

  const planList = [
    { id: 0, label: "Plan 1" },
    { id: 1, label: "Plan 2" },
  ];

  const isSubscriberOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const priorityOptions = [
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
    { label: "Tertiary", value: "tertiary" },
  ];

  const relationshipList = ["Spouse", "Father", "Mother", "Self", "Son"];

  const handleCancel = () => {
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    console.log({ data }, "subb");
    OnSaveClicked(data);
  };

  const DisclaimerText = (data) => {
    return (
      <FormLabel
        id="row-input-disclaimer"
        sx={{
          fontSize: 12,
          "&.Mui-focused": {
            color: "black",
          },
          paddingLeft: 2,
          display: "inline-flex",
          alignItems: "center",
          color: "#424747",
        }}
      >
        {data.label}
      </FormLabel>
    );
  };

  return (
    <Fade in={isEditing} unmountOnExit>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Controller
                name="provider"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <AutoCompleteInput
                      onFetch={(e) => {
                        console.log(e);
                      }}
                      onInputEmpty={(e) => {
                        console.log(e);
                      }}
                      options={providerList}
                      inputLabel="Insurance Provider"
                      onChange={(_e, data) => {
                        onChange(data);
                      }}
                      value={value}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  );
                }}
                rules={{ required: "This field is required" }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Controller
                name="plan"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <AutoCompleteInput
                      onFetch={(e) => {
                        console.log(e);
                      }}
                      // onInputEmpty={(e) => {
                      //   console.log(e);
                      // }}
                      options={planList}
                      inputLabel="Plan Name"
                      onChange={(_e, data) => {
                        onChange(data);
                      }}
                      value={value}
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  );
                }}
              />
              <DisclaimerText label="(Optional)" />
            </Grid>

            <Grid item xs={12} md={4}>
              <Controller
                name="memberID"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      type="number"
                      label="Subscriber ID/ Member ID"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sx={{ width: "100%" }}
                    />
                  );
                }}
                rules={{ required: "This field is required" }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Controller
                name="groupID"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      type="number"
                      label="Group #"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sx={{ width: "100%" }}
                    />
                  );
                }}
              />
              <DisclaimerText label="(Optional)" />
            </Grid>
          </Grid>

          <Divider />

          <Typography variant="h3" sx={{ pb: 2, color: colors.black }}>
            Policy Holder
          </Typography>

          <Controller
            name="isSubscriber"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <>
                  <RowRadioButtonsGroup
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    label="Are you the Subscriber?"
                    options={isSubscriberOptions}
                    helperText={error ? error.message : null}
                    tooltipContent="The person who pays for health insurance premiums. For example, if you have health insurance through your spouse’s health insurance plan, he or she is the primary subscriber."
                  />
                </>
              );
            }}
            rules={{ required: "This field is required" }}
          />

          <Typography variant="bodyRegular">
            Enter the subscriber’s details
          </Typography>

          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Controller
                  name="subscriberData.firstName"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        label="Subscriber First Name"
                        minLength={2}
                        maxLength={50}
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        sx={{ width: "100%" }}
                      />
                    );
                  }}
                  rules={{ required: "This field is required" }}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Controller
                  name="subscriberData.lastName"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        label="Subscriber Last Name"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        sx={{ width: "100%" }}
                      />
                    );
                  }}
                  rules={{ required: "This field is required" }}
                />
              </Grid>

              <Grid item xs={12} md={4} sx={{ display: "none" }} />

              <Grid
                item
                xs={12}
                md={4}
                sx={{ ".MuiFormControl-root": { width: "100%", m: 0 } }}
              >
                <Controller
                  name="subscriberData.dob"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <>
                        <StyledInput
                          type="dob"
                          label="Subscriber Date of Birth"
                          value={value}
                          onChange={onChange}
                          error={!!error}
                          size="small"
                          variant="filled"
                          helperText={error ? error.message : "MM/DD/YYYY"}
                        />
                      </>
                    );
                  }}
                  rules={{ required: "This field is required" }}
                />
              </Grid>

              <Grid item xs={12} md={4} sx={{ display: "none" }} />
              <Grid item xs={12} md={4} sx={{ display: "none" }} />

              <Grid
                item
                xs={12}
                md={4}
                sx={{ ".MuiFormControl-root": { width: "100%", m: 0 } }}
              >
                <Controller
                  name="subscriberData.relationship"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { _error },
                  }) => {
                    return (
                      <SelectOptionButton
                        sx={{
                          "& .MuiFilledInput-root": {
                            border: "1px solid #bbb",
                            backgroundColor: "#fff",
                            fontSize: "16px",
                          },
                        }}
                        label="Relationship"
                        options={relationshipList}
                        value={value}
                        onChange={(event) => {
                          onChange(event);
                        }}
                      />
                    );
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <DisclaimerText label="Optional" />

          <Divider />

          <Typography variant="bodyRegular" component="div">
            Upload images of your insurance.
          </Typography>

          <Grid
            container
            spacing={{ xs: 0, md: 2 }}
            rowSpacing={2}
            sx={{
              ".MuiGrid-item:first-child": { pt: { xs: 0, md: 2 }, pl: 0 },
            }}
          >
            <Grid item xs={12} md={4}>
              <ImageUploader
                OnUpload={() => {
                  // This is intended
                }}
                label="Upload Front"
                width="100%"
                src="/login-bg.png"
                alt=""
                helperText={
                  isMobile
                    ? "*JPG or PNG file formats only. (File size limit is 4 MB)"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <ImageUploader
                OnUpload={() => {
                  // This is intended
                }}
                label="Upload Back"
                width="100%"
                src="/login-bg.png"
                alt=""
                helperText={
                  isMobile
                    ? "*JPG or PNG file formats only. (File size limit is 4 MB)"
                    : ""
                }
              />
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: "none" }}>
              <Typography
                variant="bodySmallMedium"
                component="div"
                sx={{
                  fontStyle: "italic",
                  textAlign: "right",
                  marginLeft: "auto",
                }}
              >
                *JPG or PNG file formats only. (File size limit is 4 MB)
              </Typography>
            </Grid>
          </Grid>

          <Divider />

          <Controller
            name="priority"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <>
                  <RowRadioButtonsGroup
                    row={false}
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    label="Insurance Priority"
                    options={priorityOptions}
                    helperText={error ? error.message : null}
                    tooltipContent="You can legally have multiple insurances to cover your eyecare expenses. Picking a primary insurance will allow you to decide which insurance takes priority."
                  />
                </>
              );
            }}
            rules={{ required: "This field is required" }}
          />
          <hr />

          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            sx={{
              width: { xs: "100%", md: "fit-content" },
              alignSelf: "flex-end",
              p: 2,
              mt: 2,
            }}
          >
            <Button
              onClick={handleCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
              sx={{ width: "100%" }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className={[styles.formButton, styles.primary].join(" ")}
              sx={{ width: "100%" }}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
    </Fade>
  );
}
