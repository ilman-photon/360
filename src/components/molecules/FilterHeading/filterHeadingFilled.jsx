import React, { useState } from "react";
import styles from "./filterHeading.module.scss";
import { Box, Typography } from "@mui/material";
import StyledInput from "../../atoms/Input/input";
import { useForm, Controller } from "react-hook-form";
import constants from "../../../utils/constants";
import { colors } from "../../../styles/theme";
import { StyledButton } from "../../atoms/Button/button";
import CustomizedDialogs from "../../atoms/Dialog/dialog";
import CloseIcon from "@mui/icons-material/Close";
import {
  dateIcon,
  getDialogContents,
  insuraceIcon,
  locationIconUI,
  purposeIcon,
} from "./filterHeading";
import { convertToDate } from "../../../utils/dateFormatter";

const FilterHeadingFilled = ({
  openDialog,
  onCloseDialog = () => {},
  filterData,
  onSearchProvider = () => {},
  purposeOfVisitData = [],
  insuranceCarrierData = [],
}) => {
  const { handleSubmit, control } = useForm({
    defaultValues: filterData,
  });
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  const [isEmptyLocation, setEmptyLocation] = useState(false);
  const [step, setStep] = useState("filterMenu");

  const onSubmit = (data) => {
    if (!data.location) {
      setEmptyLocation(true);
    } else {
      onCloseDialog();
      onSearchProvider(data);
    }
  };

  function handleCloseDialog() {
    if (step === "filterMenu") {
      onCloseDialog();
    } else {
      setStep("filterMenu");
    }
  }

  const minDate = new Date();
  const maxDate = new Date(); // add arguments as needed
  maxDate.setMonth(maxDate.getMonth() + 3);

  const sxButton = {
    width: "100%",
    ["& .MuiFilledInput-root"]: {
      border: "0px",
      backgroundColor: "#fff",
    },
  };

  function getContentDialog() {
    let child = null;
    if (step === "filterMenu") {
      child = renderFilterMeu();
    } else {
      child = getDialogContents(
        {
          type: step,
          control,
          isEmptyLocation,
          minDate,
          maxDate,
          purposeOfVisitData,
          insuranceCarrierData,
          isDesktop: false,
        },
        handleCloseDialog
      );
    }
    return child;
  }

  function renderTextField(icon, textField, controllerName) {
    const isErrorMandatoryField =
      controllerName === "location" && isEmptyLocation;
    return (
      <Box>
        <Controller
          name={controllerName}
          control={control}
          render={({ field: { onChange, value }, fieldState: { _error } }) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  paddingLeft: "15px",
                  marginTop: "15px",
                  width: "auto",
                  background: "#fff",
                  border: isErrorMandatoryField
                    ? `2px solid ${colors.errorField}`
                    : `1px solid #BDBDBD`,
                }}
              >
                {icon}
                {textField(onChange, value)}
              </Box>
            );
          }}
        />
      </Box>
    );
  }

  function onHideMandatoryFieldError() {
    if (isEmptyLocation) {
      setEmptyLocation(false);
    }
  }

  function onRenderLocationField() {
    const locationInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={value}
          onChange={onChange}
          variant="filled"
          label="City, state, or zip code"
          sx={sxButton}
          onClick={() => {
            onHideMandatoryFieldError();
            setStep("location");
          }}
        />
      );
    };
    return renderTextField(locationIconUI(), locationInput, "location");
  }

  function onRenderDateField() {
    const dateInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={convertToDate(value)}
          onChange={onChange}
          variant="filled"
          label="Date"
          sx={sxButton}
          onClick={() => {
            setStep("date");
          }}
        />
      );
    };
    return renderTextField(dateIcon, dateInput, "date");
  }

  function onRenderPurposeField() {
    const purposeInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={value}
          onChange={onChange}
          variant="filled"
          label="Purposes of Visit"
          sx={sxButton}
          onClick={() => {
            setStep("purposeInput");
          }}
        />
      );
    };
    return renderTextField(purposeIcon, purposeInput, "purposeOfVisit");
  }

  function onRenderInsuranceField() {
    const insuranceInput = function (onChange, value) {
      return (
        <StyledInput
          type="default"
          value={value}
          onChange={onChange}
          variant="filled"
          label="Insurance Carrier"
          sx={sxButton}
          onClick={() => {
            setStep("insuranceCarrier");
          }}
        />
      );
    };
    return renderTextField(insuraceIcon, insuranceInput, "insuranceCarrier");
  }

  function renderFilterMeu() {
    return (
      <Box className={styles.searchButtonWarpper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {onRenderLocationField()}
          {onRenderDateField()}
          <Typography className={styles.searchOptionalLabel}>
            Optional
          </Typography>
          {onRenderPurposeField()}
          {onRenderInsuranceField()}
          <StyledButton
            type="submit"
            mode="primary"
            size="small"
            gradient={false}
            data-testid={APPOINTMENT_TEST_ID.searchbtn}
            sx={{
              marginTop: "16px",
              height: "40px",
              width: "100%",
              borderRadius: "30px",
              transition: null,
            }}
          >
            Search
          </StyledButton>
          <StyledButton
            mode="secondary"
            size="small"
            gradient={false}
            data-testid={APPOINTMENT_TEST_ID.searchbtn}
            sx={{
              marginTop: "16px",
              height: "40px",
              width: "100%",
              borderRadius: "30px",
              transition: null,
            }}
            onClick={onCloseDialog}
          >
            Back to results
          </StyledButton>
        </form>
      </Box>
    );
  }

  function renderDialogFilter() {
    return (
      <CustomizedDialogs
        open={openDialog}
        handleClose={handleCloseDialog}
        child={getContentDialog()}
        closeLabel={step === "filterMenu" ? <CloseIcon /> : "Cancel"}
      />
    );
  }

  return <>{renderDialogFilter()}</>;
};

export default FilterHeadingFilled;
