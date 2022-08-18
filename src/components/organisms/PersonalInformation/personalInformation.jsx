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
import { useEffect } from "react";
import { StyledSelect } from "../../atoms/Select/select";
import { formatSocialSecurity } from "../../../utils/ssnFormatter";
import { GENDER_LIST, TITLE_LIST } from "../../../utils/constantData";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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
}) {
  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: userData, // Object.assign({}, userData),
  });

  console.log({ userData }, "PersonalInformation");

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
  }, [userData]);

  const handleCancel = () => {
    reset(userData);
    OnCancelEditClicked();
  };

  const onSubmit = (data) => {
    console.log({ data }, "onSubmit");
    OnSaveClicked(data);
  };
  return (
    <AccountCard
      titleIcon={<AccountCircleOutlinedIcon />}
      title="Personal Information"
      isEditing={isEditing}
      // OnEditClicked={OnEditClicked}
      actionContent={
        isDesktop ? (
          <Button
            onClick={OnEditClicked}
            variant="text"
            className={styles.editButton}
          >
            <EditOutlinedIcon sx={{ width: 20, height: 20 }} />
            <div type="link" style={{ marginLeft: 4 }}>
              Edit
            </div>
          </Button>
        ) : (
          <StyledButton
            mode="primary"
            size="small"
            onClick={OnEditClicked}
            sx={{ my: 4 }}
          >
            Edit
          </StyledButton>
        )
      }
    >
      <Fade in={!isEditing} unmountOnExit>
        <Stack spacing={3} divider={<Divider />}>
          <LabelWithInfo label="Photo">
            {userData.profilePhoto ? (
              <img
                src={userData.profilePhoto}
                width={122}
                height={122}
                style={{ borderRadius: "50%" }}
              ></img>
            ) : (
              <Avatar
                {...stringAvatar(userData.name)}
                sx={{ width: 122, height: 122, border: "solid 1px black" }}
              ></Avatar>
            )}
          </LabelWithInfo>

          <LabelWithInfo label="Name" tooltipContent={tooltipContentDefault}>
            {userData.name}
          </LabelWithInfo>

          <LabelWithInfo label="Preferred Name">
            {userData.preferredName || "---"}
          </LabelWithInfo>

          <LabelWithInfo label="Title">{userData.title}</LabelWithInfo>

          <LabelWithInfo
            label="Date of Birth"
            tooltipContent={tooltipContentDefault}
          >
            {new Date(userData.dob).toLocaleDateString()}
          </LabelWithInfo>

          <LabelWithInfo label="Age" tooltipContent={tooltipContentDefault}>
            {userData.age}
          </LabelWithInfo>

          <LabelWithInfo label="Gender">{userData.gender}</LabelWithInfo>

          <LabelWithInfo label="SSN" tooltipContent={tooltipContentDefault}>
            {formatSocialSecurity(String(userData.ssn))}
          </LabelWithInfo>

          <div>
            <Typography variant="h3" sx={{ pb: 2, color: colors.black }}>
              State Issued ID
            </Typography>
            <Typography variant="bodyRegular" sx={{ pb: 3 }} component="div">
              Please upload a photo of government-issued ID, such as Driver’s
              License or State-issued ID.
            </Typography>

            <Stack spacing={6}>
              <LabelWithInfo
                label="Front Card"
                helperText="JPG or PNG file formats only. (File size limit is 4 MB)"
              >
                <div className={styles.issuedCardContainer}>
                  <img
                    width={267}
                    height={175}
                    src={userData.issuedCardFront}
                    alt="front-id"
                  />
                </div>
              </LabelWithInfo>
              <LabelWithInfo
                label="Back Card"
                helperText="JPG or PNG file formats only. (File size limit is 4 MB)"
              >
                <div className={styles.issuedCardContainer}>
                  <img
                    width={267}
                    height={175}
                    src={userData.issuedCardBack}
                    alt="back-id"
                  />
                </div>
              </LabelWithInfo>
            </Stack>
          </div>
        </Stack>
      </Fade>
      <Fade in={isEditing} unmountOnExit>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <div className={styles.labelForm}>Photo</div>
            <Controller
              name="profilePhoto"
              control={control}
              render={({
                field: { onChange, _value },
                fieldState: { _error },
              }) => {
                return (
                  <>
                    <ProfilePhotoUploader
                      username={userData.name}
                      source={userData.profilePhoto}
                      OnPhotoChange={onChange}
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
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <>
                    <StyledInput
                      disabled
                      type="text"
                      id="name"
                      label="Name"
                      value={value}
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
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledInput
                    type="text"
                    id="preferredName"
                    label="Preferred Name"
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
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledSelect
                    id="title"
                    label="Title"
                    options={userTitleOptions}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
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
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledSelect
                    id="gender"
                    label="Gender"
                    options={genderOptions}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
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
                    type="text"
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

            <Divider />

            <Typography variant="h3" sx={{ mb: 2, color: colors.black }}>
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
                  sx={{ color: colors.black, fontWeight: 600 }}
                >
                  Front Card
                </Typography>

                <Controller
                  name="issuedCardFront"
                  control={control}
                  render={({
                    field: { onChange, _value },
                    fieldState: { _error },
                  }) => {
                    return (
                      <>
                        <ImageUploader
                          OnUpload={onChange}
                          source={userData.issuedCardFront}
                          label="Upload Front"
                          width="100%"
                          src="/login-bg.png"
                          alt=""
                        />
                      </>
                    );
                  }}
                />
              </Stack>
              <Stack spacing={2}>
                <Typography
                  variant="regularBold"
                  sx={{ color: colors.black, fontWeight: 600 }}
                >
                  Back Card
                </Typography>
                <Controller
                  name="issuedCardBack"
                  control={control}
                  render={({
                    field: { onChange, _value },
                    fieldState: { _error },
                  }) => {
                    return (
                      <>
                        <ImageUploader
                          OnUpload={onChange}
                          source={userData.issuedCardBack}
                          label="Upload Back"
                          width="100%"
                          alt=""
                        />
                      </>
                    );
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={2}
            sx={{ p: 2, mt: 2 }}
          >
            <Button
              onClick={handleCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              className={[styles.formButton, styles.primary].join(" ")}
            >
              Save
            </Button>
          </Stack>
        </form>
      </Fade>
    </AccountCard>
  );
}
