import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useForm, Controller, useFormState } from "react-hook-form";
import RowRadioButtonsGroup from "../../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { StyledInput } from "../../../atoms/Input/input";
import styles from "./modalScheduling.module.scss";
import constants from "../../../../utils/constants";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Box, Stack, Typography, Button, Link } from "@mui/material";
import { formatRescheduleDate } from "../../../../utils/dateFormatter";
import { Regex } from "../../../../utils/regex";

export default function ModalCancelScheduling({
  isOpen,
  OnClickCancel,
  OnCancelClicked,
  choosenAppointment,
  appointmentData,
  onRescheduleClicked,
}) {
  const { handleSubmit, control, watch, reset } = useForm({
    defaultValues: {},
  });

  const cancelRef = React.useRef(null);

  const { errors, isSubmitting } = useFormState({
    control,
  });

  React.useEffect(() => {
    console.log(errors);
    if (errors.cancelOther) {
      cancelRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitting]);

  React.useEffect(() => {
    reset({
      cancelReason: "",
      cancelOther: "",
    });
  }, [isOpen, reset]);

  const watchedRadio = watch("cancelSchedule");
  const watchedOther = watch("cancelOther");

  const onSubmit = (data) => {
    OnCancelClicked(data);
  };

  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const { CANCEL_SCHEDULE_TEST_ID } = constants.TEST_ID;

  const options = [
    {
      label: "Appointment no longer needed",
      value: "noNeeded",
    },
    {
      label: "Patient passed away",
      value: "passedAway",
    },
    {
      label: "Family emergency",
      value: "familyEmergency",
    },
    {
      label: "Not covered by insurance",
      value: "notCovered",
    },
    {
      label: "Rescheduled appointment",
      value: "rescheduled",
    },
    {
      label: "Patient hospitalized",
      value: "PatientHospitalized",
    },
    {
      label: "Patient illness",
      value: "patientIllness",
    },
    {
      label: "Transportation issues",
      value: "transportationIssues",
    },
    {
      label: "Weather",
      value: "weather",
    },
    {
      label: "Homebound",
      value: "homebound",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  let rescheduleLink = `/patient/appointments/${choosenAppointment?.appointmentId}/reschedule`;
  if (typeof window !== "undefined") {
    /* we're on the server */
    rescheduleLink = `${window.location.origin}${rescheduleLink}`;
  }

  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      aria-describedby="alert-dialog-description"
      open={isOpen}
      className={styles.modalDialog}
      sx={{
        ".MuiDialog-container .MuiPaper-root": {
          xs: {
            width: "100%",
            margin: 0,
            minHeight: "708px",
            maxHeight: "90vh",
          },
          md: {
            width: "635px",
            margin: "32px",
            minHeight: "660px",
            maxHeight: "90vh",
          },
        },
      }}
    >
      <Head>
        <title>Cancel Appointment popup </title>
      </Head>
      <Box sx={{ width: "auto" }} className={styles.boxModalContents}>
        <Typography
          tabIndex={0}
          aria-label={t("cancelTitle")}
          variant="bodyMedium"
          className={styles.scheduledText}
          data-testid="title-cancel"
        >
          {t("cancelTitle2")}
          {formatRescheduleDate(appointmentData?.date)}
          {"."}
          <br />
          {t("cancelTitle3")}{" "}
          <Link
            onClick={() => onRescheduleClicked(choosenAppointment)}
            sx={{ cursor: "pointer", color: "#0095A9" }}
          >
            {rescheduleLink}
          </Link>
        </Typography>
        <DialogContent className={styles.checkBoxContainer}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.formStyle}
            noValidate
          >
            <Controller
              name="cancelSchedule"
              control={control}
              sx={{ m: 0, p: 0 }}
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
                      label={t("cancelReason")}
                      options={options}
                      helperText={error ? error.message : null}
                      isCancelSchedule={true}
                      textSx={{
                        fontSize: "16px",
                        color: "#242526",
                        fontWeight: "500",
                        flexDirection: "column",
                        padding: "0px",
                        margin: "0px",
                        fontFamily: "Museo Sans",
                        alignItems: "flex-start",
                      }}
                      sx={{
                        flexDirection: "column",
                        justifySelf: "left",
                        m: 1,
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "black",
                        mx: 0,
                        my: 2,
                      }}
                      rules={{ required: t("thisFieldRequired") }}
                    />

                    {watchedRadio == "other" ? (
                      <Controller
                        name="cancelOther"
                        control={control}
                        defaultValue=""
                        render={({ field, fieldState: { error } }) => {
                          const onOtherChange = field.onChange;
                          const otherValue = field.value;
                          return (
                            <StyledInput
                              id="other"
                              data-testid={CANCEL_SCHEDULE_TEST_ID.other}
                              label={t("cancelOther")}
                              type="text"
                              size={constants.SMALL}
                              variant={constants.FILLED}
                              value={otherValue}
                              onChange={onOtherChange}
                              error={!!error}
                              helperText={error ? error.message : null}
                              sx={{ pb: 2, width: { xs: "100%", md: "70%" } }}
                              onKeyDown={(e) => {
                                const spaceValidation =
                                  watchedOther.length > 0 &&
                                  !Regex.noWhitespaceRegex.test(e.key);
                                const charValidation =
                                  !Regex.alphabethOnly.test(e.key) &&
                                  !Regex.numberRegex.test(e.key) &&
                                  !spaceValidation;
                                const keyboardValidation =
                                  e.key != "Backspace" && e.key != "Tab";
                                if (charValidation && keyboardValidation) {
                                  e.preventDefault();
                                }
                              }}
                              required
                              inputRef={cancelRef}
                            />
                          );
                        }}
                        rules={{ required: t("thisFieldRequired") }}
                      />
                    ) : (
                      <Box sx={{ height: "28px" }} />
                    )}
                  </>
                );
              }}
              rules={{ required: t("thisFieldRequired") }}
            />

            <Stack
              direction="row-reverse"
              spacing={2}
              sx={{
                width: "auto",
                flexDirection: {
                  xs: "column",
                  md: "row-reverse",
                },
              }}
            >
              <Button
                type="submit"
                variant="contained"
                className={[styles.formButton, styles.cancel].join(" ")}
                data-testid={CANCEL_SCHEDULE_TEST_ID.btnCancel}
                sx={{
                  width: {
                    xs: "100% !important",
                    md: "194px !important",
                    lg: "100% !important",
                  },
                  mb: {
                    xs: "8px",
                    md: "0",
                  },
                  textTransform: "none",
                  borderRadius: 30,
                }}
              >
                {t("btnCancel")}
              </Button>
              <Button
                onClick={OnClickCancel}
                variant="contained"
                className={[styles.formButton, styles.outlined].join(" ")}
                data-testid={CANCEL_SCHEDULE_TEST_ID.btnKeep}
                sx={{
                  width: {
                    xs: "100% !important",
                    md: "194px !important",
                    lg: "100% !important",
                  },
                  textTransform: "none",
                  borderRadius: 30,
                }}
              >
                {t("btnKeep")}
              </Button>
            </Stack>
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
