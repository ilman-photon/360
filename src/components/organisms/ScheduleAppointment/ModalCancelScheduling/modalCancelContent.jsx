import * as React from "react";
import DialogContent from "@mui/material/DialogContent";
import { useForm, Controller } from "react-hook-form";
import RowRadioButtonsGroup from "../../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { StyledInput } from "../../../atoms/Input/input";
import styles from "./modalScheduling.module.scss";

import constants from "../../../../utils/constants";

import { useTranslation } from "next-i18next";
import { Box, Stack, Typography, Button } from "@mui/material";

export default function ModalCancelContent({}) {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {},
  });

  const watchedRadio = watch("cancelSchedule");

  const onSubmit = (data) => {
    console.log(data, "vw", watchedRadio);
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
      label: "Phone",
      value: "phone",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  const handleClose = () => {
    //
  };

  return (
    <Box
      sx={{ width: { xs: "auto", md: "max-content" } }}
      className={styles.boxModalContents}
    >
      <Typography variant="bodyMedium" className={styles.scheduledText}>
        {t("cancelTitle")}
      </Typography>
      <DialogContent className={styles.checkBoxContainer}>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
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

                    {watchedRadio === "other" ? (
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
                              id="password"
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
              justifyContent="flex-end"
              spacing={2}
              sx={{
                width: "auto",
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
                    textTransform: "none",
                    borderRadius: 30,
                  },
                }}
              >
                {t("btnCancel")}
              </Button>
              <Button
                //   onClick={handleCancel}
                variant="contained"
                className={[styles.formButton, styles.outlined].join(" ")}
                data-testid={CANCEL_SCHEDULE_TEST_ID.btnKeep}
                sx={{
                  width: {
                    xs: "100%",
                    md: "fit-content",
                    textTransform: "none",
                    borderRadius: 30,
                  },
                }}
              >
                {t("btnKeep")}
              </Button>
            </Stack>
          </form>
        </Box>
      </DialogContent>
    </Box>
  );
}
