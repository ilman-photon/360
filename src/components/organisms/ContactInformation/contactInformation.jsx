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
import { useEffect, useState } from "react";
import { Regex } from "../../../utils/regex";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";

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
  const { handleSubmit, control, watch, reset, setValue } = useForm({
    defaultValues: userData,
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

  const isOneOfPreferredValid = (name, value) => {
    switch (name) {
      case "email":
        if (watchedPreferredCommunication == "phone") return true;
        else if (watchedPreferredCommunication == "email" && !value)
          return false;
        else if (watchedEmail || watchedMobile) return true;
        break;
      case "phone":
        if (watchedPreferredCommunication == "email") return true;
        else if (watchedPreferredCommunication == "phone" && !value)
          return false;
        else if (watchedEmail || watchedMobile) return true;
        break;
      default:
        return false;
    }
  };

  useEffect(() => {
    if (userData) reset(userData);
  }, [userData, reset]);

  const handleCancel = () => {
    reset(userData);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    OnSaveClicked(data);
  };

  // GAPI autocomplete
  const { placesService, placePredictions, getPlacePredictions } =
    usePlacesService({
      apiKey: googleAPIKey,
    });

  const resetAddressForm = () => {
    setValue("address", "");
    setValue("city", "");
    setValue("state", "");
    setValue("zip", "");
  };

  const assignAddressFormValue = (oldValue) => {
    if (!placeDetailsState) return;
    const addressComponents = placeDetailsState.address_components;
    if (addressComponents) {
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
              setValue("state", component.short_name);
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
    }
  };

  const [placeDetailsState, setPlaceDetailsState] = useState(null);
  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length)
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        (placeDetails) => {
          setPlaceDetailsState(placeDetails);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placePredictions]);

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

  return (
    <AccountCard
      tabIndex={0}
      title="Contact Information"
      titleIcon={<PermContactCalendarOutlinedIcon />}
      isEditing={isEditing}
      textStyle={{
        fontWeight: "700",
      }}
      actionContent={accountCardActionContent}
      label={"Contact Information heading"}
      ariaLabel={"Contact Information heading"}
    >
      <Fade in={!isEditing} unmountOnExit sx={{ fontFamily: "Libre Franklin" }}>
        <Stack spacing={3} divider={<Divider />}>
          <LabelWithInfo
            tabIndex={0}
            ariaLabel="Phone Number"
            label="Phone Number"
          >
            {userData.mobile && <PhoneNumber phone={userData.mobile} />}
          </LabelWithInfo>

          <LabelWithInfo tabIndex={0} ariaLabel="Email ID" label="Email ID">
            <div tabIndex={0} aria-label={showOrReturnEmpty(userData.email)}>
              {showOrReturnEmpty(userData.email)}
            </div>
          </LabelWithInfo>

          <LabelWithInfo tabIndex={0} ariaLabel="Address" label="Address">
            <div tabIndex={0} aria-label={showOrReturnEmpty(userData.address)}>
              {showOrReturnEmpty(userData.address)}
            </div>
          </LabelWithInfo>

          <LabelWithInfo tabIndex={0} ariaLabel="City" label="City">
            <div tabIndex={0} aria-label={showOrReturnEmpty(userData.city)}>
              {showOrReturnEmpty(userData.city)}
            </div>
          </LabelWithInfo>

          <Grid container>
            <Grid item xs={6} sm={4} lg={6} p={0}>
              <LabelWithInfo tabIndex={0} ariaLabel="State" label="State">
                <div
                  tabIndex={0}
                  aria-label={showOrReturnEmpty(userData.state)}
                >
                  {showOrReturnEmpty(userData.state)}
                </div>
              </LabelWithInfo>
            </Grid>

            <Grid item xs={6} sm={4} lg={6} p={0}>
              <LabelWithInfo label="Zip" tabIndex={0} ariaLabel="Zip">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} divider={<Divider />}>
            <Controller
              name="mobile"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="phone"
                    id="mobile"
                    label="Phone Number"
                    inputProps={{
                      "aria-label": "Phone Number field",
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
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (!isOneOfPreferredValid("phone", value))
                      return "Email ID or Mobile Number is required";
                  },
                },
                pattern: {
                  value: Regex.isValidPhoneFormat,
                  message: "Incorrect format",
                },
              }}
            />
            <Controller
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    id="email"
                    label="Email ID"
                    inputProps={{
                      "aria-label": "Email ID field",
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
                  />
                );
              }}
              rules={{
                validate: {
                  required: (value) => {
                    if (!isOneOfPreferredValid("email", value))
                      return "Email ID or Mobile Number is required";
                  },
                },
                pattern: {
                  value: Regex.emailValidation,
                  message: "Incorrect format",
                },
              }}
            />

            <Controller
              name="address"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <Autocomplete
                    freeSolo
                    options={placePredictions.map(
                      (option) => option.description
                    )}
                    onChange={(e, value) => {
                      assignAddressFormValue(value);
                    }}
                    value={value}
                    autoComplete={false}
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
                        }}
                        value={value}
                        onChange={(event) => {
                          onChange(event.target.value);
                          getPlacePredictions({ input: event.target.value });
                        }}
                        placeholder="Start typing your address, e.g. 123 United States..."
                        error={!!error}
                        size="small"
                        variant="filled"
                        helperText={error ? error.message : null}
                      />
                    )}
                  />
                );
              }}
            />

            <Controller
              name="city"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    id="city"
                    label="City"
                    inputProps={{
                      "aria-label": "City field",
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
                  />
                );
              }}
            />

            <Grid container columnSpacing={2}>
              <Grid item xs={5.5} md={7} style={{ paddingLeft: 0 }}>
                <Controller
                  name="state"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        select
                        label="State"
                        autoComplete="address-level1"
                        data-testid="styled-select-state"
                        value={value}
                        onChange={onChange}
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
                        }}
                      >
                        {usStatesList.map((item, idx) => (
                          <MenuItem key={idx} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </StyledInput>
                    );
                  }}
                />
              </Grid>

              <Grid item xs={6} md={4} p={0}>
                <Controller
                  name="zip"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => {
                    return (
                      <StyledInput
                        type="text"
                        onKeyDown={(e) => {
                          if (
                            !Regex.numberOnly.test(e.key) &&
                            e.key != "Backspace"
                          ) {
                            e.preventDefault();
                          }
                        }}
                        id="zip"
                        label="Zip"
                        inputProps={{
                          "aria-label": "Zip field",
                          maxLength: 5,
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
                      />
                    );
                  }}
                  rules={{
                    pattern: {
                      value: Regex.isZip,
                      message: "Incorrect format",
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Controller
              name="preferredCommunication"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <>
                    <RowRadioButtonsGroup
                      error={!!error}
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
              rules={{ required: "This field is required" }}
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
            >
              Save
            </Button>
          </Stack>
        </form>
      </Fade>
    </AccountCard>
  );
}
