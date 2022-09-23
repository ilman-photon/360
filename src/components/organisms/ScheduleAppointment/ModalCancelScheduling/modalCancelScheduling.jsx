import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useForm, Controller } from "react-hook-form";
import RowRadioButtonsGroup from "../../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { StyledInput } from "../../../atoms/Input/input";
import styles from "./modalScheduling.module.scss";
import constants from "../../../../utils/constants";

import { useTranslation } from "next-i18next";
import { Box, Stack, Typography, Button } from "@mui/material";

export default function ModalCancelScheduling({
  isOpen,
  OnClickCancel,
  OnCancelClicked,
}) {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {},
  });

  const watchedRadio = watch("cancelSchedule");

  const onSubmit = (data) => {
    console.log(data, "vw", watchedRadio);
    OnCancelClicked(data);
  };

  const { t } = useTranslation("translation", {
    keyPrefix: "scheduleAppoinment",
  });

  const { CANCEL_SCHEDULE_TEST_ID } = constants.TEST_ID;

  const options = [
    {
      label: "Family emergency",
      value: "familyemergency",
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

  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      aria-describedby="alert-dialog-description"
      open={isOpen}
      className={styles.modalDialog}
      sx={{
        ".MuiDialog-container .MuiPaper-root": {
          xs: { width: "100%", margin: 0 },
          md: { width: "auto", margin: "32px" },
        },
      }}
    >
      <Box
        sx={{ width: { xs: "auto", md: "max-content" } }}
        className={styles.boxModalContents}
      >
        <Typography variant="bodyMedium" className={styles.scheduledText}>
          {t("cancelTitle")}
        </Typography>
        <DialogContent className={styles.checkBoxContainer}>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid" }}>
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
                          color: "black",
                          fontWeight: "600",
                          flexDirection: "column",
                          padding: "0px",
                          margin: "0px",
                          fontFamily: "Libre Franklin",
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
                          render={({
                            field: { onChange, value },
                            fieldState: { error },
                          }) => {
                            return (
                              <StyledInput
                                id="other"
                                data-testid={CANCEL_SCHEDULE_TEST_ID.other}
                                label={t("cancelOther")}
                                type="text"
                                size={constants.SMALL}
                                variant={constants.FILLED}
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                                sx={{ pb: 2, width: "70%" }}
                              />
                            );
                          }}
                          rules={{ required: t("thisFieldRequired") }}
                        />
                      ) : null}
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
                  marginLeft: {
                    xs: "0px",
                    md: "82px",
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
                      xs: "100%",
                      md: "fit-content",
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
                      xs: "100%",
                      md: "fit-content",
                    },
                    textTransform: "none",
                    borderRadius: 30,
                  }}
                >
                  {t("btnKeep")}
                </Button>
              </Stack>
            </form>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
