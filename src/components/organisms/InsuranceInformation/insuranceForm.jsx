import { Button, Fade, Grid, Stack, Typography } from "@mui/material";
import styles from "./InsuranceInformationNew.module.scss";
import { useForm, Controller } from "react-hook-form";
import { StyledInput } from "../../atoms/Input/input";
import { colors } from "../../../styles/theme";
import FormLabel from "@mui/material/FormLabel";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import SelectOptionButton from "../../atoms/SelectOptionButton/selectOptionButton";
import { ImageUploader } from "../../molecules/ImageUploader/imageUploader";

export default function InsuranceForm({
  userData = {},
  isEditing = true,
  OnSaveClicked = () => {
    // This is intended
  },
  OnCancelEditClicked = () => {
    // This is intended
  },
}) {
  const { handleSubmit, control } = useForm({
    defaultValues: {}, // Object.assign({}, userData),
  });

  console.log({ userData }, "from");

  const isSubsciberOptions = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const priorityOptions = [
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
    { label: "Tertiary", value: "tertiary" },
  ];

  const relationshipList = ["Single", "Double"];

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
          <Grid container>
            <Grid item xs={4} pr={2}>
              <Controller
                name="insuranceProvider"
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
                      label="Insurance Provider"
                      labelId="Insurance-Provider-Id"
                      id="Insurance-Provider-Id"
                      options={relationshipList}
                      value={value}
                      onChange={(event) => {
                        onChange(event);
                      }}
                    />
                  );
                }}
                rules={{ required: "This field is required" }}
              />
            </Grid>

            <Grid item xs={4} pr={2}>
              <Controller
                name="planName"
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
                      label="Plan Name"
                      labelId="Plan-Name-Id"
                      id="Plan-Name-Id"
                      options={relationshipList}
                      value={value}
                      onChange={(event) => {
                        onChange(event);
                      }}
                    />
                  );
                }}
              />
              <DisclaimerText label="optional" />
            </Grid>

            <Grid item xs={4} pr={2}>
              <Controller
                name="subscriberMember"
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
                      label="Insurance Subscriber ID/ Member ID"
                      labelId="Subscriber-Member-Id"
                      id="Subscriber-Member-Id"
                      options={relationshipList}
                      value={value}
                      onChange={(event) => {
                        onChange(event);
                      }}
                    />
                  );
                }}
                rules={{ required: "This field is required" }}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={4}>
              <Controller
                name="groupId"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      type="text"
                      id="groupId"
                      label="Group #"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sx={{ width: "358px" }}
                    />
                  );
                }}
              />
              <DisclaimerText label="optional" />
            </Grid>
            <Grid item xs={4} pr={2}></Grid>
            <Grid item xs={4} pr={2}></Grid>
          </Grid>

          <hr />
          <Typography
            variant="h3"
            sx={{ pb: 2, color: colors.black }}
            tooltipContent="Test"
          >
            Policy Holder
          </Typography>

          <Controller
            name="isSubscriber"
            control={control}
            tooltipContent="Test"
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <>
                  <RowRadioButtonsGroup
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    label="Are you the Subscriber?"
                    options={isSubsciberOptions}
                    helperText={error ? error.message : null}
                    tooltipContent="Test"
                  />
                </>
              );
            }}
            rules={{ required: "This field is required" }}
          />

          <Typography variant="bodyRegular" sx={{ pb: 3 }} component="div">
            Enter the subscriber’s details
          </Typography>

          <Grid container columnSpacing={2} style={{ width: "fit-content" }}>
            <Grid item xs={6} style={{ paddingLeft: 0 }}>
              <Controller
                name="firstName"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      type="text"
                      id="firstName"
                      label="Subscriber First Name"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sx={{ width: "358px" }}
                    />
                  );
                }}
                rules={{ required: "This field is required" }}
              />
            </Grid>

            <Grid item xs={6} p={0}>
              <Controller
                name="lastName"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => {
                  return (
                    <StyledInput
                      type="text"
                      id="lastName"
                      label="Subscriber Last Name"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      size="small"
                      variant="filled"
                      helperText={error ? error.message : null}
                      sx={{ width: "358px" }}
                    />
                  );
                }}
                rules={{ required: "This field is required" }}
              />
            </Grid>
          </Grid>

          <Controller
            name="dob"
            control={control}
            style={{ width: "358px" }}
            sx={{ width: "358px" }}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <>
                  <StyledInput
                    type="dob"
                    id="dob"
                    label="Subscriber Date of Birth"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    size="small"
                    variant="filled"
                    helperText={error ? error.message : null}
                  />
                  <DisclaimerText label="MM/DD/YYYY" />
                </>
              );
            }}
            rules={{ required: "This field is required" }}
          />

          <Controller
            name="relationship"
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
                  labelId="Relationship-Id"
                  id="relationship"
                  options={relationshipList}
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                  }}
                />
              );
            }}
          />
          <DisclaimerText label="optional" />

          <hr />
          <Typography variant="bodyRegular" component="div">
            Upload images of your insurance.
          </Typography>

          <Grid container>
            <Grid item xs={4} pr={2}>
              <ImageUploader
                OnUpload={() => {
                  // This is intended
                }}
                label="Upload Front"
                width="100%"
                src="/login-bg.png"
                alt=""
              />
            </Grid>
            <Grid item xs={4}>
              <ImageUploader
                OnUpload={() => {
                  // This is intended
                }}
                label="Upload Back"
                width="100%"
                src="/login-bg.png"
                alt=""
              />
            </Grid>
          </Grid>
          <hr />

          <Controller
            name="insurancePriority"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => {
              return (
                <>
                  <RowRadioButtonsGroup
                    error={!!error}
                    value={value}
                    onChange={onChange}
                    label="Insurance Priority"
                    options={priorityOptions}
                    helperText={error ? error.message : null}
                    tooltipContent="Test"
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
            sx={{ width: "fit-content", alignSelf: "flex-end", p: 2, mt: 2 }}
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
        </Stack>
      </form>
    </Fade>
  );
}
