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
import { useForm, Controller, useFormState } from "react-hook-form";
import { StyledInput } from "../../atoms/Input/input";
import FormLabel from "@mui/material/FormLabel";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";
import { ImageUploader } from "../../molecules/ImageUploader/imageUploader";
import { DEFAULT_INSURANCE_DATA } from "../../../store/user";
import React, { useEffect, useState } from "react";
import FormMessage from "../../molecules/FormMessage/formMessage";
import { AutoCompleteCreatable } from "../../molecules/AutoCompleteCreatable";
import constants from "../../../utils/constants";
import { Regex } from "../../../utils/regex";
import { RELATIONSHIP_LIST } from "../../../utils/constantData";
import { colors } from "../../../styles/theme";
import { isDOB } from "../Register/register";
import { useTranslation } from "next-i18next";

export default function InsuranceForm({
  formData = DEFAULT_INSURANCE_DATA,
  providerList = [],
  planList = [],
  isEditing = true,
  isAutocompleteLoading = false,
  isSecondary = false,
  memberId,
  OnProviderChanged = () => {
    // this is intended
  },
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelClicked = () => {
    // This is intended
  },
  testIds = constants.TEST_ID.INSURANCE_TEST_ID,
}) {
  const { handleSubmit, control, watch, reset, setValue } = useForm({
    defaultValues: DEFAULT_INSURANCE_DATA,
  });
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const { t, ready } = useTranslation("translation", {
    keyPrefix: "insuranceForm",
    useSuspense: false,
  });

  const providerRef = React.useRef(null);
  const planRef = React.useRef(null);
  const memberIdRef = React.useRef(null);
  const subsFirstNameRef = React.useRef(null);
  const subsLastNameRef = React.useRef(null);
  const subsDobRef = React.useRef(null);

  const { errors, isSubmitting } = useFormState({
    control,
  });

  const resetFormData = () => {
    reset(formData);
    setValue("memberID", memberId);
  };

  // Later will be used for edit
  useEffect(() => {
    if (formData) {
      resetFormData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  useEffect(() => {
    if (isSecondary) {
      setValue("priority", "SECONDARY");
    }
  });

  useEffect(() => {
    console.log(errors);
    if (errors.provider) {
      providerRef.current?.focus();
    } else if (errors.plan) {
      planRef.current?.focus();
    } else if (errors.memberID) {
      memberIdRef.current?.focus();
    } else if (errors.subscriberData?.firstName) {
      subsFirstNameRef.current?.focus();
    } else if (errors.subscriberData?.lastName) {
      subsLastNameRef.current?.focus();
    } else if (errors.subscriberData?.dob) {
      subsDobRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  const isSubscriberOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const priorityOptions = [
    { label: "Primary", value: "PRIMARY" },
    { label: "Secondary", value: "SECONDARY" },
    { label: "Tertiary", value: "TERTIARY" },
  ];

  const DEFAULT_FORM_FIELD_STATE = {
    success: false,
    title: null,
    content: null,
  };

  const [formCardFrontState, setFormCardFrontState] = useState(
    DEFAULT_FORM_FIELD_STATE
  );
  const onFormCardFrontError = (payload) => {
    setFormCardFrontState(payload);
  };
  const [formCardBackState, setFormCardBackState] = useState(
    DEFAULT_FORM_FIELD_STATE
  );
  const onFormCardBackError = (payload) => {
    setFormCardBackState(payload);
  };

  const watchedSubscriber = watch("isSubscriber", "");
  const requiredIfSubscriber = (v) => {
    if (watchedSubscriber === "No" && !v) {
      return t("requiredField");
    }
  };

  const watchedProvider = watch("provider", "");
  useEffect(() => {
    if (watchedProvider) {
      OnProviderChanged(watchedProvider.id);
      if (watchedProvider.id !== formData?.provider?.id) {
        setValue("plan", null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedProvider]);

  useEffect(() => {
    setValue("memberID", memberId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memberId]);

  const handleCancel = () => {
    OnCancelClicked();
    resetFormData();
    setFormCardFrontState(DEFAULT_FORM_FIELD_STATE);
    setFormCardBackState(DEFAULT_FORM_FIELD_STATE);
  };

  const onSubmit = (data) => {
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
    <>
      {ready && (
        <Fade in={isEditing} unmountOnExit>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={3}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4}>
                  <Controller
                    name="provider"
                    aria-live="assertive"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => {
                      return (
                        <AutoCompleteCreatable
                          tabIndex={0}
                          isLoading={isAutocompleteLoading}
                          options={providerList}
                          testId={testIds.provider}
                          inputLabel="Insurance Provider"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                          required
                          isMobileOption={isDesktop ? false : true}
                          inputRef={providerRef}
                        />
                      );
                    }}
                    rules={{
                      required: t("requiredField"),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                  <Controller
                    name="plan"
                    aria-live="assertive"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => {
                      return (
                        <AutoCompleteCreatable
                          tabIndex={0}
                          isLoading={isAutocompleteLoading}
                          options={planList}
                          testId={testIds.planName}
                          inputLabel="Plan Name"
                          onChange={onChange}
                          value={value}
                          error={!!error}
                          helperText={error ? error.message : null}
                          required
                          inputRef={planRef}
                          isMobileOption={isDesktop ? false : true}
                        />
                      );
                    }}
                    rules={{
                      required: t("requiredField"),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                  <Controller
                    name="memberID"
                    aria-live="assertive"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => {
                      return (
                        <StyledInput
                          type="text"
                          label="Subscriber ID/ Member ID"
                          value={value}
                          onChange={onChange}
                          data-testid={testIds.subscriberId}
                          error={!!error}
                          size="small"
                          variant="filled"
                          helperText={error ? error.message : null}
                          sx={{ width: "100%" }}
                          required
                        />
                      );
                    }}
                    rules={{
                      required: t("requiredField"),
                      // REMINDER !! this validation is disabled for testing integration purpose, not based on story
                      // change back after solution are found
                      // validate: {
                      //   isNumber: (v) =>
                      //     Regex.numberOnly.test(v) || "Invalid format",
                      // },
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} lg={4}>
                  <Controller
                    name="groupID"
                    aria-live="assertive"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => {
                      return (
                        <StyledInput
                          type="text"
                          label="Group #"
                          value={value}
                          onChange={onChange}
                          data-testid={testIds.group}
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
                        isAlphaNumericIfFilled: (v) => {
                          if (v) {
                            return (
                              Regex.alphaNumericRegex.test(v) ||
                              "Invalid format"
                            );
                          }
                          return true;
                        },
                      },
                    }}
                  />
                  <DisclaimerText label="(Optional)" />
                </Grid>
              </Grid>

              <Divider />

              <Typography
                tabIndex={0}
                aria-label={"Policy Holder"}
                variant="grayscaleBlack"
              >
                Policy Holder
              </Typography>

              <Controller
                name="isSubscriber"
                // aria-live="assertive"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <RowRadioButtonsGroup
                      error={!!error}
                      value={value}
                      onChange={onChange}
                      label="Are you the Subscriber?"
                      options={isSubscriberOptions}
                      helperText={error ? error.message : null}
                      sx={{
                        ".MuiFormControlLabel-label": {
                          fontSize: "16px",
                        },
                      }}
                      isInsuranceForm={true}
                      tooltipContent="The person who pays for health insurance premiums. For example, if you have health insurance through your spouse’s health insurance plan, he or she is the primary subscriber."
                      customTooltipWidth="210px"
                      required
                      inputRef={memberIdRef}
                    />
                  );
                }}
                rules={{ required: t("requiredField") }}
              />

              <Collapse in={watchedSubscriber === "No"}>
                <Stack spacing={3}>
                  <Typography variant="bodyMedium">
                    Enter the subscriber’s details
                  </Typography>

                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Controller
                          name="subscriberData.firstName"
                          control={control}
                          aria-live="assertive"
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
                                required
                                inputRef={subsFirstNameRef}
                              />
                            );
                          }}
                          rules={{
                            pattern: {
                              value: Regex.nameValidation,
                              message: t("incorrectFormat"),
                            },
                            validate: {
                              requiredIfSubscriber,
                              isMin2Max50Length: (v) =>
                                watchedSubscriber === "No"
                                  ? Regex.isMin2Max50Length.test(v) ||
                                    t("firstNameValidation")
                                  : true,
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Controller
                          name="subscriberData.lastName"
                          aria-live="assertive"
                          control={control}
                          render={({
                            field: { onChange, value },
                            fieldState: { error },
                          }) => {
                            return (
                              <StyledInput
                                type="text"
                                label="Subscriber Last Name"
                                minLength={2}
                                maxLength={50}
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                size="small"
                                variant="filled"
                                helperText={error ? error.message : null}
                                sx={{ width: "100%" }}
                                required
                                inputRef={subsLastNameRef}
                              />
                            );
                          }}
                          rules={{
                            pattern: {
                              value: Regex.nameValidation,
                              message: t("incorrectFormat"),
                            },
                            validate: {
                              requiredIfSubscriber,
                              isMin2Max50Length: (v) =>
                                watchedSubscriber === "No"
                                  ? Regex.isMin2Max50Length.test(v) ||
                                    t("lastNameValidation")
                                  : true,
                            },
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: { xs: "none", md: "flex" } }}
                      />

                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ ".MuiFormControl-root": { width: "100%", m: 0 } }}
                      >
                        <Controller
                          name="subscriberData.dob"
                          aria-live="assertive"
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
                                  helperText={
                                    error ? error.message : "MM/DD/YYYY"
                                  }
                                  required
                                  inputRef={subsDobRef}
                                />
                              </>
                            );
                          }}
                          rules={{
                            validate: {
                              requiredIfSubscriber,
                              isValidDate: (value) => {
                                if (watchedSubscriber === "No") {
                                  if (!isDOB(value))
                                    return "Incorrect date format";
                                }
                                return true;
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: { xs: "none", md: "flex" } }}
                      />
                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{ display: { xs: "none", md: "flex" } }}
                      />

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
                                    fontWeight: 400,
                                    color: colors.darkGreen,
                                  },
                                }}
                                label="Relationship"
                                options={RELATIONSHIP_LIST}
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
                    <DisclaimerText label="(Optional)" />
                  </Box>
                </Stack>
              </Collapse>

              <Divider />

              <Typography
                variant="headlineH4"
                component="div"
                sx={{
                  fontFamily: "Libre Franklin",
                  fontWeight: 700,
                  color: colors.grayscaleBlack,
                  fontSize: { xs: "22px", md: "18px" },
                }}
              >
                Upload images of your insurance
              </Typography>

              <Grid
                container
                rowSpacing={{ sx: 2, md: 0 }}
                sx={{
                  ".MuiGrid-item:first-of-type": {
                    pt: 0,
                    pl: 0,
                    pr: { xs: 0, sm: 2 },
                  },
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={4}
                  sx={{
                    position: "relative",
                    pl: "-8px",
                    mb: { xs: 3, md: 0 },
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      top: "-25px",
                    }}
                  >
                    <Collapse in={!!formCardFrontState.content}>
                      <FormMessage
                        success={formCardFrontState.success}
                        title={formCardFrontState.title}
                      >
                        {formCardFrontState.content}
                      </FormMessage>
                    </Collapse>
                  </div>
                  <Typography
                    variant="bodyLarge"
                    component="div"
                    sx={{
                      display: { sm: "none" },
                      mb: "12px",
                      // color: colors.grayscaleBlack,
                    }}
                  >
                    Insurance Card - Front
                  </Typography>
                  <Controller
                    name="frontCard"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { _error },
                    }) => {
                      return (
                        <ImageUploader
                          OnUpload={onChange}
                          OnInputError={onFormCardFrontError}
                          testIds={testIds.uploadFrontImage}
                          source={value}
                          tabIndex={0}
                          // preview={value?.presignedUrl}
                          label="Upload Front"
                          changeLabel="Change photo"
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
                <Grid item xs={12} sm={5} lg={4} sx={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      width: "calc(100% - 16px)",
                      top: "-25px",
                    }}
                  >
                    <Collapse in={!!formCardBackState.content}>
                      <FormMessage
                        tabIndex={0}
                        success={formCardBackState.success}
                        title={formCardBackState.title}
                      >
                        {formCardBackState.content}
                      </FormMessage>
                    </Collapse>
                  </div>
                  <Typography
                    variant="bodyLarge"
                    component="div"
                    sx={{
                      display: { sm: "none" },
                      mb: "12px",
                      // color: colors.grayscaleBlack,
                    }}
                  >
                    Insurance Card - Back
                  </Typography>
                  <Controller
                    name="backCard"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { _error },
                    }) => {
                      return (
                        <ImageUploader
                          tabIndex={0}
                          OnUpload={onChange}
                          OnInputError={onFormCardBackError}
                          source={value}
                          // preview={value?.presignedUrl}
                          testIds={testIds.uploadBackImage}
                          label="Upload Back"
                          changeLabel="Change photo"
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
                {isDesktop ? (
                  <Grid item xs={12} sm={10} lg={8}>
                    <Typography
                      variant="bodySmallMedium"
                      component="div"
                      sx={{
                        fontStyle: "italic",
                        textAlign: "right",
                        marginLeft: "auto",
                        marginTop: "7px",
                      }}
                    >
                      JPG or PNG file formats only. (File size limit is 4 MB)
                    </Typography>
                  </Grid>
                ) : (
                  ""
                )}
              </Grid>

              <Divider />

              <Controller
                name="priority"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <>
                      <RowRadioButtonsGroup
                        row={isDesktop ? true : false}
                        error={!!error}
                        value={value}
                        onChange={onChange}
                        label="Insurance Priority"
                        options={priorityOptions}
                        helperText={error ? error.message : null}
                        isInsuranceForm={true}
                        tooltipContent={t("tooltipValue")}
                      />
                    </>
                  );
                }}
                rules={{ required: t("requiredField") }}
              />

              <Divider />

              <Stack
                justifyContent="flex-end"
                gap={2}
                sx={{
                  flexDirection: { sm: "row" },
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
                  data-testid={testIds.cancel}
                  sx={{
                    width: {
                      xs: "100%",
                      // md: "fit-content",
                      textTransform: "none",
                      borderRadius: 30,
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  className={[styles.formButton, styles.primary].join(" ")}
                  data-testid={testIds.save}
                  sx={{
                    width: {
                      xs: "100%",
                      // md: "fit-content",
                      textTransform: "none",
                      borderRadius: 30,
                    },
                  }}
                >
                  Save
                </Button>
              </Stack>
            </Stack>
          </form>
        </Fade>
      )}
    </>
  );
}
