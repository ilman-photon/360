import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Fade,
  Stack,
  Typography,
} from "@mui/material";
import LabelWithInfo from "../../atoms/LabelWithInfo/labelWithInfo";
import AccountCard from "../../molecules/AccountCard/accountCard";
import styles from "./personalInformation.module.scss";
import { colors } from "../../../styles/theme";

import * as React from "react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { ProfilePhotoUploader } from "../../molecules/ProfilePhotoUploader/profilePhotoUploader";
import { stringAvatar } from "../../../utils/avatar";
import StyledInput from "../../atoms/Input/input";
import { ImageUploader } from "../../molecules/ImageUploader/imageUploader";

export default function PersonalInformation({
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
  const DEFAULT_PERSONAL_INFO = {
    photo: "",
    name: "John Doe",
    preferredName: "John",
    title: "Mr",
    dob: new Date(),
    age: 49,
    gender: "Male",
    ssn: "***-***-1823",
    card: {
      front: "/login-bg.png",
      back: "/login-bg.png",
    },
  };

  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: DEFAULT_PERSONAL_INFO,
  });

  const handleCancel = () => {
    reset(DEFAULT_PERSONAL_INFO);
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
      OnEditClicked={OnEditClicked}
    >
      <Fade in={!isEditing} unmountOnExit>
        <Stack spacing={3} divider={<Divider />}>
          <LabelWithInfo label="Photo">
            <Avatar
              {...stringAvatar("Remy Sharp")}
              sx={{ width: 122, height: 122, border: "solid 1px black" }}
            ></Avatar>
          </LabelWithInfo>

          <LabelWithInfo label="Name" tooltipContent="Test">
            John Doe
          </LabelWithInfo>

          <LabelWithInfo label="Preferred Name">---</LabelWithInfo>

          <LabelWithInfo label="Title">Mr</LabelWithInfo>

          <LabelWithInfo label="Date of Birth" tooltipContent="Test">
            01/10/1987
          </LabelWithInfo>

          <LabelWithInfo label="Age" tooltipContent="Test">
            49
          </LabelWithInfo>

          <LabelWithInfo label="Gender">Male</LabelWithInfo>

          <LabelWithInfo label="SSN" tooltipContent="Test">
            ***-***-1989
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
                  <Image width="100%" height={183} src="/login-bg.png" alt="" />
                </div>
              </LabelWithInfo>
              <LabelWithInfo
                label="Back Card"
                helperText="JPG or PNG file formats only. (File size limit is 4 MB)"
              >
                <div className={styles.issuedCardContainer}>
                  <Image width="100%" height={183} src="/login-bg.png" alt="" />
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
            <ProfilePhotoUploader />

            <Stack direction="row" justifyContent="flex-end" spacing={2}>
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

            <Divider />

            <Controller
              name="name"
              control={control}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => {
                return (
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
                  <StyledInput
                    type="text"
                    id="title"
                    label="Title"
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
                  <StyledInput
                    type="text"
                    id="gender"
                    label="Gender"
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
                <ImageUploader
                  OnUpload={() => {}}
                  label="Upload Front"
                  width="100%"
                  src="/login-bg.png"
                  alt=""
                />
              </Stack>
              <Stack spacing={2}>
                <Typography
                  variant="regularBold"
                  sx={{ color: colors.black, fontWeight: 600 }}
                >
                  Back Card
                </Typography>
                <ImageUploader
                  OnUpload={() => {}}
                  label="Upload Back"
                  width="100%"
                  src="/login-bg.png"
                  alt=""
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
