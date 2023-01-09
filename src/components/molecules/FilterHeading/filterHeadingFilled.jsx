import React, { useRef, useState } from "react";
import styles from "./filterHeading.module.scss";
import { Box, Typography } from "@mui/material";
import StyledInput from "../../atoms/Input/input";
import { useForm, Controller } from "react-hook-form";
import constants from "../../../utils/constants";
import { colors } from "../../../styles/theme";
import { StyledButton } from "../../atoms/Button/button";
import CustomizedDialogs from "../../molecules/FilterAppointmentDialog/dialog";
import CloseIcon from "@mui/icons-material/Close";
import {
  dateIcon,
  insuraceIcon,
  locationIconUI,
  purposeIcon,
  renderMandatoryFieldError,
} from "./filterHeading";
import { convertToDate } from "../../../utils/dateFormatter";

const FilterHeadingFilled = ({
  openDialog,
  onCloseDialog = () => {
    // This is intentional
  },
  filterData,
  onSearchProvider = () => {
    // This is intentional
  },
  purposeOfVisitData = [],
  insuranceCarrierData = [],
  isGeolocationEnabled = false,
  onChangeLocation = () => {
    // This is intentional
  },
  currentCity = "",
  googleApiKey = "",
}) => {
  const { handleSubmit, control, setValue, watch } = useForm({
    defaultValues: { ...filterData },
  });

  const [activeName, setActiveName] = useState(null);

  const refMobileInput = useRef([null, null]);
  const controlNameList = ["purposeOfVisit", "insuranceCarrier"];
  /** setRef depends on watch */
  React.useEffect(() => {
    if (activeName) {
      const indexControlList = controlNameList.indexOf(activeName);
      refMobileInput.current[indexControlList]?.focus();
      setActiveName(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeName]);

  /** Check data changes on input */
  React.useEffect(() => {
    watch((_, { name }) => {
      setActiveName(name);
    });
  }, [watch]);

  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;
  const [isEmptyLocation, setEmptyLocation] = useState(false);
  const [isEmptyAppointmentType, setEmptyAppointmentType] = useState(false);
  const [step, setStep] = useState("filterMenu");

  React.useEffect(() => {
    if (currentCity) setValue("location", currentCity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCity]);

  const onSubmit = (data) => {
    let isError = false;
    if (!data.purposeOfVisit?.trim()) {
      isError = true;
      setEmptyAppointmentType(true);
    }

    if (!data.location?.trim()) {
      isError = true;
      setEmptyLocation(true);
    }

    if (!isError) {
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
    }
    return child;
  }

  function renderTextField(icon, textField, controllerName, isErrorField) {
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
                  border: isErrorField
                    ? `2px solid ${colors.error}`
                    : `1px solid #BDBDBD`,
                }}
              >
                {icon}
                {textField(onChange, value, _error)}
              </Box>
            );
          }}
        />
        {isErrorField && renderMandatoryFieldError(isErrorField, false)}
      </Box>
    );
  }

  function onHideMandatoryFieldError() {
    if (isEmptyAppointmentType) {
      setEmptyAppointmentType(false);
    }

    if (isEmptyLocation) {
      setEmptyLocation(false);
    }
  }

  function onRenderLocationField() {
    const locationInput = function (onChange, value, error) {
      return (
        <StyledInput
          required
          type="default"
          value={value}
          onChange={onChange}
          variant="filled"
          label="City, state, or zip code"
          sx={sxButton}
          error={error}
          onClick={() => {
            onHideMandatoryFieldError();
            setStep("location");
          }}
        />
      );
    };
    return renderTextField(
      locationIconUI(),
      locationInput,
      "location",
      isEmptyLocation
    );
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
    const purposeInput = function (onChange, value, error) {
      return (
        <StyledInput
          required
          error={error}
          type="default"
          value={value}
          onChange={onChange}
          inputRef={(el) => (refMobileInput.current[0] = el)}
          variant="filled"
          tabIndex={0}
          label="Purpose of Visit"
          sx={sxButton}
          onClick={() => {
            onHideMandatoryFieldError();
            setStep("purposeInput");
          }}
        />
      );
    };
    return renderTextField(
      purposeIcon,
      purposeInput,
      "purposeOfVisit",
      isEmptyAppointmentType
    );
  }

  function onRenderInsuranceField() {
    const insuranceInput = function (onChange, value) {
      return (
        <StyledInput
          inputRef={(el) => (refMobileInput.current[1] = el)}
          type="default"
          value={value?.name || ""}
          onChange={onChange}
          tabIndex={0}
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {onRenderLocationField()}
          {onRenderDateField()}
          {onRenderPurposeField()}
          <Typography className={styles.searchOptionalLabel}>
            Optional
          </Typography>
          {onRenderInsuranceField()}
          <StyledButton
            type="submit"
            mode="primary"
            size="small"
            gradient={false}
            data-testid={APPOINTMENT_TEST_ID.searchbtn}
            sx={{
              padding: "0px",
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
              padding: "0px",
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
        childContent={getContentDialog()}
        type={step}
        closeLabel={step === "filterMenu" ? <CloseIcon /> : "Cancel"}
        additionalProps={{
          control,
          isEmptyLocation,
          isGeolocationEnabled,
          minDate,
          maxDate,
          purposeOfVisitData,
          insuranceCarrierData,
          isDesktop: false,
          onChangeLocation,
          googleApiKey,
        }}
      />
    );
  }

  return <>{renderDialogFilter()}</>;
};

export default FilterHeadingFilled;
