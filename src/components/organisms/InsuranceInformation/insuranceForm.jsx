import {
  Box,
  Button,
  Collapse,
  Divider,
  Fade,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./InsuranceInformationNew.module.scss";
import { useForm, Controller } from "react-hook-form";
import { StyledInput } from "../../atoms/Input/input";
import { colors } from "../../../styles/theme";
import FormLabel from "@mui/material/FormLabel";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";
import { ImageUploader } from "../../molecules/ImageUploader/imageUploader";
import AutoCompleteInput from "../../molecules/AutoCompleteInput";
import { DEFAULT_INSURANCE_DATA } from "../../../store/user";
import { useEffect, useState } from "react";
import FormMessage from "../../molecules/FormMessage/formMessage";

export default function InsuranceForm({
  formData = null, // later will be used for edit
  isEditing = true,
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelClicked = () => {
    // This is intended
  },
}) {
  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: DEFAULT_INSURANCE_DATA,
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  // Later will be used for edit
  useEffect(() => {
    if (formData) reset(formData);
  }, [formData]);

  const providerList = [
    { id: 0, label: "Provider 1" },
    { id: 1, label: "Provider 2" },
  ];

  const planList = [
    { id: 0, label: "Plan 1" },
    { id: 1, label: "Plan 2" },
  ];

  const isSubscriberOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const priorityOptions = [
    { label: "Primary", value: "Primary" },
    { label: "Secondary", value: "Secondary" },
    { label: "Tertiary", value: "Tertiary" },
  ];

  const relationshipList = ["Spouse", "Father", "Mother", "Self", "Son"];

  const [formCardFrontState, setFormCardFrontState] = useState({
    success: false,
    title: null,
    content: null,
  });
  const onFormCardFrontError = (payload) => {
    setFormCardFrontState(payload);
  };
  const [formCardBackState, setFormCardBackState] = useState({
    success: false,
    title: null,
    content: null,
  });
  const onFormCardBackError = (payload) => {
    setFormCardBackState(payload);
  };

  const requiredIfSubscriber = (v) => {
    if (watchedSubscriber === "No" && !v) {
      return "This field is required";
    }
  };

  const handleCancel = () => {
    OnCancelClicked();
  };

  const watchedSubscriber = watch("isSubscriber", "");

  const onSubmit = (data) => {
    OnSaveClicked(data);
    reset(DEFAULT_INSURANCE_DATA);
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
                <RowRadioButtonsGroup
                  error={!!error}
                  value={value}
                  onChange={onChange}
                  label="Are you the Subscriber?"
                  options={isSubscriberOptions}
                  helperText={error ? error.message : null}
                  tooltipContent="The person who pays for health insurance premiums. For example, if you have health insurance through your spouse’s health insurance plan, he or she is the primary subscriber."
                />
              );
            }}
            rules={{ required: "This field is required" }}
          />

          <Collapse in={watchedSubscriber === "No"}>
            <Stack spacing={3}>
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
                      rules={{
                        validate: {
                          requiredIfSubscriber,
                        },
                      }}
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
                      rules={{
                        validate: {
                          requiredIfSubscriber,
                        },
                      }}
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
                              disableFuture
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
                      rules={{
                        validate: {
                          requiredIfSubscriber,
                        },
                      }}
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
            </Stack>
          </Collapse>

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
            <Grid item xs={12} md={4} sx={{ position: "relative", pl: "-8px" }}>
              <div
                style={{ position: "absolute", width: "100%", top: "-25px" }}
              >
                <Collapse in={formCardFrontState.content}>
                  <FormMessage
                    success={formCardFrontState.success}
                    title={formCardFrontState.title}
                  >
                    {formCardFrontState.content}
                  </FormMessage>
                </Collapse>
              </div>
              <Controller
                name="frontCard"
                control={control}
                render={({
                  field: { onChange, _value },
                  fieldState: { _error },
                }) => {
                  return (
                    <ImageUploader
                      OnUpload={onChange}
                      OnInputError={onFormCardFrontError}
                      source={formData ? formData.frontCard : null}
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
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  width: "calc(100% - 16px)",
                  top: "-25px",
                }}
              >
                <Collapse in={formCardBackState.content}>
                  <FormMessage
                    success={formCardBackState.success}
                    title={formCardBackState.title}
                  >
                    {formCardBackState.content}
                  </FormMessage>
                </Collapse>
              </div>
              <Controller
                name="backCard"
                control={control}
                render={({
                  field: { onChange, _value },
                  fieldState: { _error },
                }) => {
                  return (
                    <ImageUploader
                      OnUpload={onChange}
                      OnInputError={onFormCardBackError}
                      source={formData ? formData.backCard : null}
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
                  );
                }}
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

          <Divider />

          <Stack
            direction="row"
            justifyContent="flex-end"
            spacing={2}
            sx={{
              width: { xs: "100%", md: "fit-content" },
              alignSelf: { xs: "center", md: "flex-end" },
              p: 2,
              mt: 2,
            }}
          >
            <Button
              onClick={handleCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
              sx={{ width: { xs: "100%", md: "fit-content" } }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className={[styles.formButton, styles.primary].join(" ")}
              sx={{ width: { xs: "100%", md: "fit-content" } }}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
    </Fade>
  );
}
