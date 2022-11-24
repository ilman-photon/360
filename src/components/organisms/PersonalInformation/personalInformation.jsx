import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  Avatar,
  Button,
  Divider,
  Fade,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./personalInformation.module.scss";
import { colors } from "../../../styles/theme";
import { Controller, useForm } from "react-hook-form";
import { ProfilePhotoUploader } from "../../molecules/ProfilePhotoUploader/profilePhotoUploader";
import { stringAvatar } from "../../../utils/avatar";
import StyledInput from "../../atoms/Input/input";
import { StyledButton } from "../../atoms/Button/button";
import { ImageUploader } from "../../molecules/ImageUploader/imageUploader";
import { useEffect, useState } from "react";
import { StyledSelect } from "../../atoms/Select/select";
import { formatSocialSecurity } from "../../../utils/ssnFormatter";
import { GENDER_LIST, TITLE_LIST } from "../../../utils/constantData";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ImageFallback from "../../atoms/Image/image";
import FormMessage from "../../molecules/FormMessage/formMessage";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function PersonalInformation({
  userData = {},
  isEditing = true,
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
  OnEditClicked = () => {
    // This is intended
  },
  testIds,
}) {
  const {
    handleSubmit,
    control,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: userData,
  });

  const [formProfilePhotoState, setFormProfilePhotoState] = useState({
    success: false,
    title: null,
    content: null,
  });
  const onFormProfilePhotoError = (payload) => {
    setFormProfilePhotoState(payload);
  };

  const [formIssuedFrontState, setFormIssuedFrontState] = useState({
    success: false,
    title: null,
    content: null,
  });
  const onFormIssuedFrontError = (payload) => {
    setFormIssuedFrontState(payload);
  };

  const [formIssuedBackState, setFormIssuedBackState] = useState({
    success: false,
    title: null,
    content: null,
  });
  const onFormIssuedBackError = (payload) => {
    setFormIssuedBackState(payload);
  };

  const isDesktop = useMediaQuery("(min-width: 769px)");
  const tooltipContentDefault =
    "If you wish to change this information, please contact Customer Support";

  const genderOptions = GENDER_LIST.map((gender) => {
    return { label: gender, value: gender };
  });

  const userTitleOptions = TITLE_LIST.map((title) => {
    return { label: title, value: title };
  });

  useEffect(() => {
    if (userData) reset(userData);
  }, [userData, reset]);

  useEffect(() => {
    const firstErrorKey = Object.keys(errors).find((key) => errors[key]);
    if (firstErrorKey) {
      setFocus(firstErrorKey);
    }
  }, [Object.keys(errors)]);

  const handleCancel = () => {
    reset(userData);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    OnSaveClicked(data);
  };
  return (
    <AccountCard
      titleIcon={<AccountCircleOutlinedIcon />}
      title="Personal Information"
      isEditing={isEditing}
      textStyle={{
        fontWeight: "700",
      }}
      // OnEditClicked={OnEditClicked}
      actionContent={
        isDesktop ? (
          <Button
            onClick={OnEditClicked}
            variant="text"
            className={styles.editButton}
            aria-label="Edit option"
          >
            <EditOutlinedIcon
              sx={{ width: 20, height: 20, color: colors.link }}
            />
            <div
              className={styles.actionText}
              style={{ marginLeft: 4, color: "#008294" }}
            >
              Edit
            </div>
          </Button>
        ) : (
          <StyledButton
            mode="primary"
            size="small"
            onClick={OnEditClicked}
            data-testid={"loc_edit"}
            sx={{ my: 4 }}
            aria-label={"Edit option"}
          >
            Edit
          </StyledButton>
        )
      }
    >
      <Fade in={!isEditing} unmountOnExit sx={{ fontFamily: "Libre Franklin" }}>
        <Stack spacing={3} divider={<Divider />}>
          <LabelWithInfo
            label="Photo"
            alignItems={isDesktop ? "unset" : "center"}
          >
            {userData.profilePhoto ? (
              <ImageFallback
                source={userData.profilePhoto}
                width={122}
                height={122}
                style={{ borderRadius: "50%" }}
                alt="image"
                aria-label="Image"
              />
            ) : (
              <Avatar
                {...stringAvatar(userData.name)}
                sx={{ width: 93, height: 93, border: "solid 1px black" }}
              ></Avatar>
            )}
          </LabelWithInfo>
          <LabelWithInfo
            label="Name"
            ariaLabel="Name"
            tooltipContent={tooltipContentDefault}
            value={userData.name || ""}
          >
            <div aria-hidden={true}>{userData.name || "-"}</div>
          </LabelWithInfo>

          <LabelWithInfo label="Preferred Name" ariaLabel={"Preferred Name"}>
            <div tabIndex={0}>{userData.preferredName || "---"}</div>
          </LabelWithInfo>

          <LabelWithInfo label="Title" ariaLabel={"Title"}>
            <div aria-label={userData.title} tabIndex={0}>
              {userData.title || "-"}
            </div>
          </LabelWithInfo>

          <LabelWithInfo
            label="Date of Birth"
            ariaLabel={"Date of Birth"}
            tooltipContent={tooltipContentDefault}
            value={
              userData.dob ? new Date(userData.dob).toLocaleDateString() : ""
            }
          >
            <div aria-hidden={true}>
              {userData.dob ? new Date(userData.dob).toLocaleDateString() : "-"}
            </div>
          </LabelWithInfo>

          <LabelWithInfo
            label="Age"
            ariaLabel={"Age"}
            tooltipContent={tooltipContentDefault}
            value={userData.age || ""}
          >
            <div aria-hidden={true}>{userData.age || "-"}</div>
          </LabelWithInfo>

          <LabelWithInfo label="Gender" ariaLabel={"Gender"}>
            <div tabIndex={0} aria-label={userData.gender}>
              {userData.gender || "-"}
            </div>
          </LabelWithInfo>

          <LabelWithInfo
            label="SSN"
            ariaLabel={"SSN"}
            tooltipContent={tooltipContentDefault}
            value={formatSocialSecurity(String(userData.ssn))}
          >
            <div aria-hidden={true}>{userData.ssn}</div>
          </LabelWithInfo>

          <div>
            <Typography
              sx={{
                pb: 2,
                fontSize: "26px",
                fontWeight: 500,
              }}
              tabIndex={0}
            >
              State Issued ID
            </Typography>
            <Typography
              variant="bodyRegular"
              sx={{ pb: 3, fontWeight: 500 }}
              tabIndex={0}
              aria-label={`Please upload a photo of government-issued ID, such as Driver’s License or State-issued ID.`}
              component="div"
            >
              Please upload a photo of government-issued ID, such as Driver’s
              License or State-issued ID.
            </Typography>

            <Stack spacing={6} sx={{ maxWidth: { sm: "415px" } }}>
              <LabelWithInfo
                label="Front Card"
                tabIndex={0}
                ariaLabel="Front Card"
                helperText={
                  userData.issuedCardFront === null
                    ? "JPG or PNG file formats only. (File size limit is 4 MB)"
                    : ""
                }
              >
                <div className={styles.issuedCardContainer}>
                  <ImageFallback
                    width={267}
                    height={175}
                    source={userData.issuedCardFront}
                    tabIndex={0}
                    alt="Front image"
                    aria-label="Front image"
                  />
                </div>
              </LabelWithInfo>
              <LabelWithInfo
                label="Back Card"
                ariaLabel="Back Card"
                tabIndex={0}
                helperText={
                  userData.issuedCardBack === null
                    ? "JPG or PNG file formats only. (File size limit is 4 MB)"
                    : ""
                }
              >
                <div className={styles.issuedCardContainer}>
                  <ImageFallback
                    tabIndex={0}
                    width={267}
                    height={175}
                    source={userData.issuedCardBack}
                    alt="Back image"
                    aria-label="Back Image"
                  />
                </div>
              </LabelWithInfo>
            </Stack>
          </div>
        </Stack>
      </Fade>
      <Fade in={isEditing} unmountOnExit>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <div className={styles.labelForm}>Photo</div>
            {formProfilePhotoState.content ? (
              <FormMessage
                success={formProfilePhotoState.success}
                title={formProfilePhotoState.title}
              >
                {formProfilePhotoState.content}
              </FormMessage>
            ) : (
              ""
            )}
            <Controller
              name="profilePhoto"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { _error },
              }) => {
                return (
                  <>
                    <ProfilePhotoUploader
                      username={userData.name}
                      source={value}
                      OnPhotoChange={onChange}
                      OnInputError={onFormProfilePhotoError}
                    />
                  </>
                );
              }}
            />

            <Divider />

            <Controller
              name="name"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <>
                    <StyledInput
                      disabled
                      type="text"
                      inputRef={ref}
                      id="name"
                      label="Name"
                      value={value}
                      data-testid={testIds.txtName}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                    />
                  </>
                );
              }}
            />

            <Controller
              name="preferredName"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    inputRef={ref}
                    id="preferredName"
                    label="Preferred Name"
                    inputProps={{
                      "aria-label": "Preferred Name field",
                    }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                  />
                );
              }}
            />

            <Controller
              name="title"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <StyledSelect
                    id="title"
                    inputRef={ref}
                    label="Title"
                    inputProps={{
                      "aria-label": "Title dropdown menu",
                    }}
                    options={userTitleOptions}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{
                      ".MuiInputBase-root": {
                        color: "#A5A5AC",
                      },
                    }}
                    SelectProps={{
                      IconComponent: KeyboardArrowDownIcon,
                    }}
                  />
                );
              }}
            />

            <Controller
              name="dob"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    disabled
                    disableFuture
                    type="dob"
                    id="dob"
                    label="Date of Birth"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : "Month, date, year"}
                  />
                );
              }}
              rules={{
                required: "This field is required",
              }}
            />

            <Controller
              name="age"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    disabled
                    type="text"
                    id="age"
                    label="Age"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                  />
                );
              }}
            />

            <Controller
              name="gender"
              control={control}
              render={({
                field: { onChange, value, ref },
                fieldState: { error },
              }) => {
                return (
                  <StyledSelect
                    id="gender"
                    label="Gender"
                    inputRef={ref}
                    inputProps={{
                      "aria-label": "Gender dropdown menu",
                    }}
                    options={genderOptions}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    sx={{
                      ".MuiInputBase-root": {
                        color: "#A5A5AC",
                        fontWeight: "700",
                        fontFamily: "Roboto",
                      },
                    }}
                    SelectProps={{
                      IconComponent: KeyboardArrowDownIcon,
                    }}
                  />
                );
              }}
            />

            <Controller
              name="ssn"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    disabled
                    id="ssn"
                    label="SSN"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                  />
                );
              }}
            />

            <Typography
              sx={{
                mb: 2,
                fontSize: "26px",
                fontWeight: 500,
              }}
            >
              State Issued ID
            </Typography>
            <Typography variant="regularBold" sx={{ mb: 3 }}>
              Please upload a photo of government-issued ID, such as Driver’s
              License or State-issued ID.
            </Typography>

            <Stack spacing={3}>
              <Stack spacing={2}>
                <Typography
                  variant="regularBold"
                  sx={{
                    color: colors.black,
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Front Card
                </Typography>
                {formIssuedFrontState.content ? (
                  <FormMessage
                    success={formIssuedFrontState.success}
                    title={formIssuedFrontState.title}
                  >
                    {formIssuedFrontState.content}
                  </FormMessage>
                ) : (
                  ""
                )}
                <Controller
                  name="issuedCardFront"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { _error },
                  }) => {
                    return (
                      <>
                        <ImageUploader
                          helperText={
                            isDesktop
                              ? true
                              : userData.issuedCardFront
                              ? false
                              : true
                          }
                          OnUpload={onChange}
                          OnInputError={onFormIssuedFrontError}
                          source={value}
                          label="Upload Front"
                          changeLabel="Change file"
                        />
                      </>
                    );
                  }}
                />
              </Stack>
              <Stack spacing={2}>
                <Typography
                  variant="regularBold"
                  sx={{
                    color: colors.black,
                    fontSize: "18px",
                    fontWeight: 700,
                  }}
                >
                  Back Card
                </Typography>
                {formIssuedBackState.content ? (
                  <FormMessage
                    success={formIssuedBackState.success}
                    title={formIssuedBackState.title}
                  >
                    {formIssuedBackState.content}
                  </FormMessage>
                ) : (
                  ""
                )}
                <Controller
                  name="issuedCardBack"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { _error },
                  }) => {
                    return (
                      <>
                        <ImageUploader
                          helperText={
                            isDesktop
                              ? true
                              : userData.issuedCardBack
                              ? false
                              : true
                          }
                          OnUpload={onChange}
                          OnInputError={onFormIssuedBackError}
                          source={value}
                          label="Upload Back"
                          changeLabel="Change file"
                        />
                      </>
                    );
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            justifyContent="space-between"
            gap={2}
            sx={{ flexDirection: { sm: "row" }, p: 2, mt: 2 }}
          >
            <Button
              onClick={handleCancel}
              data-testid={testIds.btnCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
              sx={{ fontSize: "14px", fontWeight: 600 }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              data-testid={testIds.btnSave}
              variant="contained"
              className={[styles.formButton, styles.primary].join(" ")}
              sx={{ fontSize: "14px", fontWeight: 600 }}
            >
              Save
            </Button>
          </Stack>
        </form>
      </Fade>
    </AccountCard>
  );
}
