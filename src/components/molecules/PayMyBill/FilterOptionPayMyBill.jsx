import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import styles from "./styles.module.scss";
import { useTranslation } from "next-i18next";
import { StyledInput } from "../../atoms/Input/input";
import { Controller, useForm } from "react-hook-form";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Regex } from "../../../utils/regex";

export const FilterOptionPayMyBill = ({
  handleChangeOption = () => {
    //This is intentional
  },
  onFilterByDate = () => {
    //This is intentional
  },
  onFilterByInvoiceNumber = () => {
    //This is intentional
  },
  isDesktop,
}) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "payMyBill",
  });
  const { control } = useForm();
  const [optionSelected, setOptionSelected] = useState("");
  const [showUiOption, setShowUiOption] = useState({
    option: "",
    show: false,
  });
  const fontStyle = { color: "#303030", fontSize: "16px", fontStyle: "normal" };

  useEffect(() => {
    switch (optionSelected) {
      case "date":
        setShowUiOption({ option: optionSelected, show: true });
        break;
      case "invoiceNumber":
        setShowUiOption({ option: optionSelected, show: true });
        break;
      default:
        setShowUiOption({
          option: "",
          show: false,
        });
        break;
    }
  }, [optionSelected]);

  const keyDownPress = (e) => {
    if (
      !Regex.numberOnly.test(e.key) &&
      e.key != "Backspace" &&
      e.key != "Tab"
    ) {
      e.preventDefault();
    }

    if (e.code && e.code.toLowerCase() === "enter" && e.target.value) {
      e.preventDefault();
      onFilterByInvoiceNumber(e.target.value);
    }
  };

  const DateIcon = () => {
    return (
      <Tooltip title={"Add Date of Birth"}>
        <IconButton aria-label={"Calendar icon"} edge="end">
          <CalendarTodayIcon />
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <Box
      className={
        isDesktop ? styles.filterContainer : styles.filterMobileContainer
      }
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          tabIndex={0}
          aria-label={t("searchBy")}
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "18px",
            color: "#003B4A",
          }}
        >
          {t("searchBy")}
        </Typography>
        <Select
          aria-label="Select an Option dropdown"
          value={optionSelected}
          onChange={(event) => {
            handleChangeOption(event.target.value);
            setOptionSelected(event.target.value);
          }}
          displayEmpty
          inputProps={{
            "aria-label": "Without label",
            "data-testid": "pay-my-bill-filter",
          }}
          sx={{
            maxHeight: "52px",
            width: isDesktop ? "225px" : "78%",
            padding: "12.5px 14px",
          }}
        >
          <MenuItem value="">
            <Typography sx={fontStyle}>{t("selectOption")}</Typography>
          </MenuItem>
          <MenuItem value={"date"}>
            <Typography sx={fontStyle}>Date Range</Typography>
          </MenuItem>
          <MenuItem value={"invoiceNumber"}>
            <Typography sx={fontStyle}>Invoice Number</Typography>
          </MenuItem>
        </Select>
      </Box>
      {showUiOption?.option === "date" && showUiOption?.show && (
        <>
          {isDesktop ? <div className={styles.verticalLine}></div> : null}
          <Box
            className={
              isDesktop
                ? styles.dateRangeContainer
                : styles.dateRangeMobileContainer
            }
            sx={{ ".MuiFormControl-root": { margin: "0px" } }}
          >
            <Controller
              name="fromDate"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <StyledInput
                    type="dob"
                    aria-label={"From Date field"}
                    label={t("fromDate")}
                    id="fromDate"
                    disableFuture
                    variant="filled"
                    value={value}
                    onChange={(val) => {
                      onFilterByDate("fromDate", val);
                      onChange(val);
                    }}
                    disableMaskedInput
                    components={{
                      OpenPickerIcon: DateIcon,
                    }}
                  />
                );
              }}
            />
            <Typography
              tabIndex={0}
              aria-label={"To"}
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "18px",
                color: "#003B4A",
                alignSelf: "center",
                margin: "0 16px",
              }}
            >
              To
            </Typography>
            <Controller
              name="toDate"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <StyledInput
                    aria-label={"To Date field"}
                    type="dob"
                    disableFuture
                    label={t("toDate")}
                    id="toDate"
                    variant="filled"
                    value={value}
                    onChange={(val) => {
                      onFilterByDate("toDate", val);
                      onChange(val);
                    }}
                    components={{
                      OpenPickerIcon: DateIcon,
                    }}
                    disableMaskedInput
                  />
                );
              }}
            />
          </Box>
        </>
      )}
      {showUiOption?.option === "invoiceNumber" && showUiOption?.show && (
        <>
          {isDesktop ? <div className={styles.verticalLine}></div> : null}
          <Controller
            name="invoiceNumber"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <StyledInput
                  aria-label={"Invoice Number field"}
                  label={t("invoiceNumber")}
                  id="invoiceNumber"
                  maxLength={50}
                  variant="filled"
                  value={value}
                  onChange={(event) => {
                    onChange(event);
                  }}
                  sx={{
                    ".MuiFilledInput-input": {
                      fontFamily: "Museo Sans",
                      color: "#6C6C6C !important",
                      fontSize: "16px",
                      lineHeight: "12px",
                    },
                    ".MuiInputLabel-root": {
                      fontSize: "16px",
                    },
                  }}
                  onKeyDown={(e) => {
                    keyDownPress(e);
                  }}
                  inputProps={{
                    "aria-label": t("invoiceNumber"),
                    "data-testid": "invoice-number-filter",
                  }}
                />
              );
            }}
          />
        </>
      )}
    </Box>
  );
};

export default FilterOptionPayMyBill;
