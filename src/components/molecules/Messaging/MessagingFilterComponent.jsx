import * as React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import styles from "./styles.module.scss";
import RowRadioButtonsGroup from "../../atoms/RowRadioButtonsGroup/rowRadioButtonsGroup";
import { useTranslation } from "next-i18next";
import { useForm, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

export const MessagingFilterComponent = ({
  OnFilterClicked,
  onCloseFilter,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "messaging",
  });
  const isDesktop = useMediaQuery("(min-width: 834px)");
  const messageOptions = [
    { label: t("allText"), value: "all" },
    { label: t("unreadText"), value: "unread" },
  ];

  const { control, watch } = useForm({
    defaultValues: {
      filterRead: "all",
    },
  });

  const contentFilterView = () => {
    return (
      <Controller
        name="filterRead"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <RowRadioButtonsGroup
              label={t("filterByText")}
              value={value}
              options={messageOptions}
              textSx={{ justifyContent: "space-between" }}
              sx={{
                flexDirection: isDesktop ? "row" : "column",
                gap: "20px",
                padding: "16px",
                ".MuiFormControlLabel-root": {
                  marginRight: "36px",
                },
                ".MuiFormGroup-root": {
                  flexDirection: isDesktop ? "row" : "column",
                },
              }}
              onChange={(data) => {
                OnFilterClicked(watch("filterRead"));
                onChange(data);
              }}
            />
          );
        }}
      />
    );
  };

  return (
    <>
      {isDesktop ? (
        <Box className={styles.radioButtonGroup}>{contentFilterView()}</Box>
      ) : (
        <Box className={styles.radioButtonGroupMobile}>
          <Box
            sx={{
              padding: "29px",
              textAlign: "end",
              borderBottom: "1px solid #BDBDBD",
            }}
          >
            <Button
              sx={{
                color: "#080707",
                padding: "0px",
                justifyContent: "flex-end",
              }}
              onClick={onCloseFilter}
            >
              <CloseIcon />
            </Button>
          </Box>
          {contentFilterView()}
          <Box
            sx={{
              padding: "24px",
              textAlign: "center",
              borderTop: "1px solid #BDBDBD",
              position: "absolute",
              width: "100%",
              bottom: "0px",
            }}
          >
            <Button
              sx={{
                borderRadius: "30px",
                backgroundColor: "#007E8F",
                color: "#ffffff",
                width: "100%",
              }}
              onClick={onCloseFilter}
            >
              Done
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default MessagingFilterComponent;
