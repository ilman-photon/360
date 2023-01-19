import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import {
  Autocomplete,
  Button,
  Divider,
  Fade,
  Grid,
  MenuItem,
  Stack,
  useMediaQuery,
} from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./contactInformation.module.scss";
import { useForm, Controller } from "react-hook-form";
import { StyledInput, StyledRedditField } from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { colors } from "../../../styles/theme";
import { useEffect } from "react";
import { Regex } from "../../../utils/regex";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

export default function ContactInformation({
  googleAPIKey = " ",
  userData = {},
  isEditing = true,
  usStatesList = [],
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
  OnEditClicked = () => {
    // This is intended
  },
}) {
  const {
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm({
    // defaultValues: DEFAULT_CONTACT_INFO,
    defaultValues: userData, // Object.assign({}, userData),
  });

  const isDesktop = useMediaQuery("(min-width: 769px)");

  const communicationOptions = [
    { label: "Email", value: "email" },
    { label: "Phone", value: "phone" },
    { label: "Both", value: "both" },
  ];

  const [watchedEmail, watchedMobile, watchedPreferredCommunication] = watch([
    "email",
    "mobile",
    "preferredCommunication",
  ]);

  useEffect(() => {
    const firstErrorKey = Object.keys(errors).find((key) => errors[key]);
    if (firstErrorKey) {
      setFocus(firstErrorKey);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  useEffect(() => {
    if (userData) reset(userData);
  }, [userData, reset]);

  const handleCancel = () => {
    reset(userData);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    OnSaveClicked({ ...data, mobile: data.mobile.replace(/\D/g, "") });
  };

  // GAPI autocomplete
  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesService({
      apiKey: googleAPIKey,
      options: { componentRestrictions: { country: ["us", "ca"] } },
    });
  const resetAddressForm = () => {
    setValue("address", "");
    setValue("city", "");
    setValue("state", "");
    setValue("zip", "");
  };

  /** GET Place Details */
  const getPlaceDetails = (indexValue) => {
    return new Promise(function (resolve) {
      placesService.getDetails(
        {
          placeId: placePredictions[indexValue].place_id,
        },
        (placeDetails) => {
          resolve(placeDetails);
        }
      );
    });
  };

  const assignAddressFormValue = async (oldValue) => {
    const indexValue = placePredictions.findIndex(
      (item) => item.description === oldValue
    );
    let placesResponse = await getPlaceDetails(indexValue);

    if (!placesResponse) return;
    const addressComponents = placesResponse.address_components;
    if (!addressComponents) return;
    resetAddressForm();
    let address1 = "";
    try {
      for (const component of addressComponents) {
        const componentType = component.types[0];
        switch (componentType) {
          case "street_number": {
            address1 = component.long_name;
            break;
          }

          case "route": {
            address1 += component.short_name;
            break;
          }

          case "postal_code": {
            setValue("zip", component.long_name);
            break;
          }

          case "administrative_area_level_1": {
            const isStateValid = usStatesList.find(
              (v) => v.label === component.short_name
            );
            if (isStateValid) {
              setValue("state", component.short_name);
            }
            break;
          }

          case "administrative_area_level_2": {
            setValue("city", component.long_name);
            break;
          }
        }
      }
    } catch {
    } finally {
      if (address1) {
        setValue("address", address1);
      } else {
        setValue("address", oldValue);
      }
    }
  };

  useEffect(() => {
    const isMobileInputEmpty = watchedMobile == "(" || !watchedMobile;
    if (watchedEmail && isMobileInputEmpty) {
      setValue("preferredCommunication", "email");
    } else if (!watchedEmail && isMobileInputEmpty) {
      setValue("preferredCommunication", "phone");
    } else {
      setValue("preferredCommunication", "both");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchedEmail, watchedMobile]);

  const showOrReturnEmpty = (data) => {
    return data || "-";
  };

  const accountCardActionContent = () => {
    return isDesktop ? (
      <Button
        onClick={OnEditClicked}
        variant="text"
        className={styles.editButton}
        tabIndex={0}
        aria-label="Edit option"
      >
        <EditOutlinedIcon sx={{ width: 20, height: 20, color: colors.link }} />
        <div
          className={styles.actionText}
          style={{ marginLeft: 4, color: "#008294" }}
          tabIndex={0}
          aria-label="Edit option"
        >
          Edit
        </div>
      </Button>
    ) : (
      <StyledButton
        mode="primary"
        size="small"
        onClick={OnEditClicked}
        sx={{ my: 4 }}
        tabIndex={0}
        aria-label="Edit option"
      >
        Edit
      </StyledButton>
    );
  };

  const checkFormat = (value) => {
    if (value) {
      return (
        Regex.atLeastOneAlphabet.test(value) ||
        "The selected field is not formatted correctly. Please try again."
      );
    } else return true;
  };

  return (
    <AccountCard
      tabIndex={0}
      title="Contact Information"
      titleIcon={<PermContactCalendarOutlinedIcon />}
      textStyle={{ fontWeight: 500 }}
      isEditing={isEditing}
      actionContent={accountCardActionContent()}
      label={"Contact Information heading"}
      ariaLabel={"Contact Information heading"}
    >
      <Fade in={!isEditing} unmountOnExit sx={{ fontFamily: "Museo Sans" }}>
        <Stack spacing={3} divider={<Divider />}>
          <LabelWithInfo
            tabIndex={0}
            ariaLabel="Phone Number"
            label="Phone Number"
            required
          >
            {showOrReturnEmpty(userData.mobile)}
          </LabelWithInfo>

          <LabelWithInfo
            tabIndex={0}
            ariaLabel="Email ID"
            label="Email ID"
            required
          >
            <div tabIndex={0} aria-label={showOrReturnEmpty(userData.email)}>
              {showOrReturnEmpty(userData.email)}
            </div>
          </LabelWithInfo>

          <LabelWithInfo
            tabIndex={0}
            ariaLabel="Address"
            label="Address"
            required
          >
            <div tabIndex={0} aria-label={showOrReturnEmpty(userData.address)}>
              {showOrReturnEmpty(userData.address)}
            </div>
          </LabelWithInfo>

          <LabelWithInfo tabIndex={0} ariaLabel="City" label="City" required>
            <div tabIndex={0} aria-label={showOrReturnEmpty(userData.city)}>
              {showOrReturnEmpty(userData.city)}
            </div>
          </LabelWithInfo>

          <Grid container>
            <Grid item xs={6} sm={4} lg={6} p={0}>
              <LabelWithInfo
                tabIndex={0}
                ariaLabel="State"
                label="State"
                required
              >
                <div
                  tabIndex={0}
                  aria-label={showOrReturnEmpty(userData.state)}
                >
                  {showOrReturnEmpty(userData.state)}
                </div>
              </LabelWithInfo>
            </Grid>

            <Grid item xs={6} sm={4} lg={6} p={0}>
              <LabelWithInfo label="Zip" tabIndex={0} ariaLabel="Zip" required>
                <div tabIndex={0} aria-label={showOrReturnEmpty(userData.zip)}>
                  {showOrReturnEmpty(userData.zip)}
                </div>
              </LabelWithInfo>
            </Grid>
          </Grid>

          <LabelWithInfo
            tabIndex={0}
            ariaLabel={"Prefered Mode(s) of communication"}
            label="Prefered Mode(s) of communication"
          >
            <span style={{ textTransform: "capitalize" }}>
              <div
                tabIndex={0}
                aria-label={
                  userData.preferredCommunication === "both"
                    ? "Mobile, Email"
                    : showOrReturnEmpty(userData.preferredCommunication)
                }
              >
                {userData.preferredCommunication === "both"
                  ? "Mobile, Email"
                  : showOrReturnEmpty(userData.preferredCommunication)}
              </div>
            </span>
          </LabelWithInfo>
        </Stack>
      </Fade>
      <Fade in={isEditing} unmountOnExit>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2} divider={<Divider />}>
            <Controller
              name="mobile"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="phone"
                    inputRef={ref}
                    id="mobile"
                    label="Phone Number"
                    inputProps={{
                      "aria-label": "Phone Number field",
                      "data-testid": "phone-input-test",
                    }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    xs={{ margin: 0 }}
                    sx={{
                      ".MuiFilledInput-root": {
                        backgroundColor: "#FFF",
                      },
                    }}
                    required
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (!value) {
                      if (watchedPreferredCommunication != "email") {
                        if (watchedPreferredCommunication == "phone") {
                          return "This field is required to proceed.";
                        } else if (
                          watchedPreferredCommunication == "both" &&
                          watchedEmail
                        ) {
                          return "This field is required to proceed.";
                        } else {
                          return "Either Email or Mobile number is required to proceed";
                        }
                      }
                    }
                  },
                },
                pattern: {
                  value: Regex.isValidPhoneFormat,
                  message:
                    "The selected field is not formatted correctly. Please try again.",
                },
              }}
            />
            <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    inputRef={ref}
                    id="email"
                    label="Email ID"
                    inputProps={{
                      "aria-label": "Email ID field",
                      "data-testid": "email-input-test",
                      maxLength: 50,
                    }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    sx={{
                      ".MuiFilledInput-root": {
                        backgroundColor: "#FFF",
                      },
                    }}
                    required
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (!value) {
                      if (watchedPreferredCommunication != "phone") {
                        if (watchedPreferredCommunication == "email") {
                          return "This field is required to proceed.";
                        } else if (
                          watchedPreferredCommunication == "both" &&
                          watchedMobile
                        ) {
                          return "This field is required to proceed.";
                        } else {
                          return "Either Email or Mobile number is required to proceed";
                        }
                      }
                    }
                  },
                },
                pattern: {
                  value: Regex.emailValidation,
                  message:
                    "The selected field is not formatted correctly. Please try again.",
                },
              }}
            />

            <Controller
              name="address"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <Autocomplete
                    freeSolo
                    options={placePredictions.map(
                      (option) => option.description
                    )}
                    onChange={(_e, val) => {
                      if (val) {
                        assignAddressFormValue(val);
                      }
                    }}
                    value={value}
                    autoComplete={false}
                    data-testid="address-autocomplete-test"
                    renderInput={(params) => (
                      <StyledRedditField
                        {...params}
                        id="address"
                        label="Address"
                        sx={{
                          width: "100%",
                          ".MuiFilledInput-root": {
                            backgroundColor: "#FFF",
                          },
                          ".MuiFormHelperText-root.Mui-error": {
                            fontSize: "0.75rem",
                          },
                        }}
                        inputRef={ref}
                        value={value}
                        onChange={(event) => {
                          onChange(event.target.value);
                          getPlacePredictions({ input: event.target.value });
                        }}
                        inputProps={{
                          ...params.inputProps,
                          "aria-label": "Address field",
                          "data-testid": "address-input-test",
                        }}
                        placeholder="Start typing your address, e.g. 123 United States..."
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        required
                      />
                    )}
                  />
                );
              }}
              rules={{
                required: "This field is required to proceed.",
                validate: {
                  incorrectFormat: checkFormat,
                },
              }}
            />

            <Controller
              name="city"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    inputRef={ref}
                    id="city"
                    label="City"
                    inputProps={{
                      "aria-label": "City field",
                      "data-testid": "city-input-test",
                    }}
                    autoComplete="address-level2"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                    sx={{
                      ".MuiFilledInput-root": {
                        backgroundColor: "#FFF",
                      },
                    }}
                    required
                  />
                );
              }}
              rules={{
                required: "This field is required to proceed.",
                validate: {
                  incorrectFormat: checkFormat,
                },
              }}
            />

            <Grid container columnSpacing={2}>
              <Grid item xs={5.5} md={7} style={{ paddingLeft: 0 }}>
                <Controller
                  name="state"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        select
                        inputRef={ref}
                        label="State"
                        autoComplete="address-level1"
                        data-testid="styled-select-state"
                        size="small"
                        variant="filled"
                        value={value}
                        onChange={(e) => {
                          onChange(e);
                        }}
                        error={!!error}
                        helperText={error ? error.message : null}
                        sx={{
                          width: "100%",
                          "&.MuiFormControl-root": {
                            m: 0,
                          },
                          ".MuiFilledInput-root": {
                            backgroundColor: "#FFF",
                          },
                          ".MuiOutlinedInput-root.Mui-focused": {
                            backgroundColor: "#efefef",
                            ".MuiOutlinedInput-notchedOutline": {
                              borderWidth: "1px",
                              borderColor: "#BDBDBD",
                            },
                          },
                          ".MuiInputBase-root": {
                            ".MuiOutlinedInput-notchedOutline": {
                              background: "transparent",
                              borderColor: "#BDBDBD",
                            },
                          },
                        }}
                        required
                      >
                        {usStatesList.map((item, idx) => (
                          <MenuItem key={idx} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </StyledInput>
                    );
                  }}
                  rules={{
                    required: "This field is required to proceed.",
                  }}
                />
              </Grid>

              <Grid item xs={6} md={4} p={0}>
                <Controller
                  name="zip"
                  control={control}
                  render={({
                    field: { onChange, value, ref },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        inputRef={ref}
                        onKeyDown={(e) => {
                          if (
                            !Regex.numberOnly.test(e.key) &&
                            e.key != "Backspace" &&
                            e.key != "Tab"
                          ) {
                            e.preventDefault();
                          }
                        }}
                        id="zip"
                        label="Zip"
                        inputProps={{
                          "aria-label": "Zip field",
                          maxLength: 5,
                          "data-testid": "zip-input-test",
                        }}
                        autoComplete="postal-code"
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                        sx={{
                          "&.MuiFormControl-root": {
                            height: "100%",
                          },
                          ".MuiFilledInput-root": {
                            height: "100%",
                            backgroundColor: "#FFF",
                          },
                        }}
                        required
                      />
                    );
                  }}
                  rules={{
                    required: "This field is required to proceed.",
                    pattern: {
                      value: Regex.isZip,
                      message:
                        "The selected field is not formatted correctly. Please try again.",
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Controller
              name="preferredCommunication"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <>
                    <RowRadioButtonsGroup
                      error={!!error}
                      inputRef={ref}
                      value={value}
                      onChange={onChange}
                      label="Preferred mode(s) of Communication"
                      options={communicationOptions}
                      helperText={error ? error.message : null}
                      textSx={{ justifyContent: "space-between" }}
                      isCancelSchedule={true}
                    />
                  </>
                );
              }}
              rules={{ required: "This field is required to proceed." }}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent={{ xs: "space-between", md: "flex-end" }}
            spacing={2}
            sx={{ p: 2, mt: 2 }}
          >
            <Button
              onClick={handleCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
              sx={{
                width: { xs: "100%", md: "unset" },
                fontSize: "14px",
                fontWeight: 600,
              }}
              data-testid="cancel-button"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className={[styles.formButton, styles.primary].join(" ")}
              sx={{
                width: { xs: "100%", md: "unset" },
                fontSize: "14px",
                fontWeight: 600,
              }}
              data-testid="save-button"
            >
              Save
            </Button>
          </Stack>
        </form>
      </Fade>
    </AccountCard>
  );
}
