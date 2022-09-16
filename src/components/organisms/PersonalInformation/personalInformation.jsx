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
import Image from "next/image";
import FormMessage from "../../molecules/FormMessage/formMessage";

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
  const { handleSubmit, control, reset } = useForm({
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
          <LabelWithInfo label="Photo">
            {userData.profilePhoto ? (
              <Image
                src={userData.profilePhoto.source}
                width={122}
                height={122}
                style={{ borderRadius: "50%" }}
                alt="image"
                aria-label="Image"
              ></Image>
            ) : (
              <Avatar
                {...stringAvatar(userData.name)}
                sx={{ width: 122, height: 122, border: "solid 1px black" }}
              ></Avatar>
            )}
          </LabelWithInfo>
          <LabelWithInfo
            label="Name"
            ariaLabel="Name"
            tooltipContent={tooltipContentDefault}
          >
            <div tabIndex={0} aria-label={userData.name}>
              {userData.name}
            </div>
          </LabelWithInfo>

          <LabelWithInfo label="Preferred Name" ariaLabel={"Preferred Name"}>
            <div tabIndex={0} aria-label={userData.preferredName}>
              {userData.preferredName || "---"}
            </div>
          </LabelWithInfo>

          <LabelWithInfo label="Title" ariaLabel={"Title"}>
            <div tabIndex={0} aria-label={userData.preferredName}>
              {userData.title}
            </div>
          </LabelWithInfo>

          <LabelWithInfo
            label="Date of Birth"
            ariaLabel={"Date of Birth"}
            tooltipContent={tooltipContentDefault}
          >
            <div
              tabIndex={0}
              aria-label={new Date(userData.dob).toLocaleDateString()}
            >
              {new Date(userData.dob).toLocaleDateString()}
            </div>
          </LabelWithInfo>

          <LabelWithInfo
            label="Age"
            ariaLabel={"Age"}
            tooltipContent={tooltipContentDefault}
          >
            <div tabIndex={0} aria-label={userData.age}>
              {userData.age}
            </div>
          </LabelWithInfo>

          <LabelWithInfo label="Gender" ariaLabel={"Gender"}>
            <div tabIndex={0} aria-label={userData.gender}>
              {userData.gender}
            </div>
          </LabelWithInfo>

          <LabelWithInfo
            label="SSN"
            ariaLabel={"SSN"}
            tooltipContent={tooltipContentDefault}
          >
            <div
              tabIndex={0}
              aria-label={formatSocialSecurity(String(userData.ssn))}
            >
              {formatSocialSecurity(String(userData.ssn))}
            </div>
          </LabelWithInfo>

          <div>
            <Typography variant="h3" sx={{ pb: 2, color: colors.black }}>
              State Issued ID
            </Typography>
            <Typography
              variant="bodyRegular"
              sx={{ pb: 3 }}
              tabIndex={0}
              aria-label={`Please upload a photo of government-issued ID, such as Driver’s License or State-issued ID.`}
              component="div"
            >
              Please upload a photo of government-issued ID, such as Driver’s
              License or State-issued ID.
            </Typography>

            <Stack spacing={6}>
              <LabelWithInfo
                label="Front Card"
                tabIndex={0}
                ariaLabel="Front Card"
                helperText="JPG or PNG file formats only. (File size limit is 4 MB)"
              >
                <div className={styles.issuedCardContainer}>
                  <Image
                    width={267}
                    height={175}
                    src={userData.issuedCardFront || "/transparent.png"}
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
                helperText="JPG or PNG file formats only. (File size limit is 4 MB)"
              >
                <div className={styles.issuedCardContainer}>
                  <Image
                    tabIndex={0}
                    width={267}
                    height={175}
                    src={userData.issuedCardBack || "/transparent.png"}
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
          <Stack spacing={3}>
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
                field: { onChange, _value },
                fieldState: { _error },
              }) => {
                return (
                  <>
                    <ProfilePhotoUploader
                      username={userData.name}
                      source={userData.profilePhoto}
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
              name="preferedName"
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
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
                  <StyledSelect
                    id="title"
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
                    value={formatSocialSecurity(String(value))}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                  />
                );
              }}
            />

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
                          helperText
                          OnUpload={onChange}
                          OnInputError={onFormIssuedFrontError}
                          source={userData.issuedCardFront}
                          preview={value}
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
                          helperText
                          OnUpload={onChange}
                          OnInputError={onFormIssuedBackError}
                          source={userData.issuedCardBack}
                          preview={value}
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
              data-testid={testIds.btnCancel}
              variant="contained"
              className={[styles.formButton, styles.outlined].join(" ")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              data-testid={testIds.btnSave}
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
