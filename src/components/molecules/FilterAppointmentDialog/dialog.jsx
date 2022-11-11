import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { colors } from "../../../styles/theme";
import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { Controller } from "react-hook-form";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import Image from "next/image";
import styles from "./styles.module.scss";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import StyledInput from "../../atoms/Input/input";
import {
  getMenuList,
  keyDownPress,
  locationIconUI,
  muiInputRoot,
  renderInsuranceCarrier,
} from "../FilterHeading/filterHeading";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, closeLabel, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        height: "72px",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            fontFamily: "Libre Franklin",
            fontWeight: "600",
            fontSize: "14px",
            lineHeight: "18px",
            marginTop: "10px",
            color: closeLabel === "Cancel" ? colors.primaryButton : "",
          }}
        >
          {closeLabel}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({
  open = false,
  childContent = "",
  handleClose = () => {
    //This is intended
  },
  closeLabel = "Cancel",
  type = "",
  additionalProps = {
    control: "",
    isEmptyLocation: "",
    isGeolocationEnabled: false,
    minDate: "",
    maxDate: "",
    purposeOfVisitData: [],
    insuranceCarrierData: [],
    isDesktop: false,
  },
}) {
  const [source, setSource] = React.useState("");

  React.useEffect(() => {
    if (open) {
      setSource("");
    }
  }, [open]);

  const handleCapture = (target, _) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  function getDialogContents() {
    let child = <></>;
    if (type === "date") {
      child = (
        <Controller
          name={"date"}
          control={additionalProps.control}
          render={({ field: { onChange, value }, fieldState: { _error } }) => {
            return (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                  data-testid={"dateFilter"}
                  displayStaticWrapperAs="desktop"
                  minDate={additionalProps.minDate}
                  maxDate={additionalProps.maxDate}
                  openTo="day"
                  value={value}
                  onChange={(newValue) => {
                    onChange(newValue);
                    handleClose();
                  }}
                  renderInput={(props) => <TextField {...props} />}
                />
              </LocalizationProvider>
            );
          }}
        />
      );
    } else if (type === "purposeInput") {
      child = (
        <Box>
          <Typography className={styles.dialogSelectMenuTitle}>
            Appointment Type
          </Typography>
          <Controller
            name={"purposeOfVisit"}
            control={additionalProps.control}
            render={({ field: { onChange } }) => {
              return additionalProps.purposeOfVisitData.map((option, idx) => {
                return (
                  <Box
                    key={idx}
                    className={styles.dialogSelectMenu}
                    onClick={() => {
                      onChange(option.title);
                      handleClose();
                    }}
                  >
                    {getMenuList(option.title, option.subtitle)}
                  </Box>
                );
              });
            }}
          />
        </Box>
      );
    } else if (type === "insuranceCarrier") {
      child = (
        <Box>
          <Typography
            className={[
              styles.dialogSelectMenuTitle,
              styles.dialogSelectMenuInsurance,
            ].join(", ")}
          >
            Enter your insurance information
          </Typography>
          {renderInsuranceCarrier(
            {
              control: additionalProps.control,
              isOpenProps: { open: true },
              insuranceCarrierData: additionalProps.insuranceCarrierData,
              testid: "insuranceInput",
              isDesktop: additionalProps.isDesktop,
            },
            handleClose
          )}
          <Box className={styles.scanInsuranceConntainer}>
            <Divider className={styles.dividerMargin}>
              <Typography
                tabIndex="0"
                aria-roledescription="text"
                className={styles.textStyle}
              >
                or
              </Typography>
            </Divider>
            <Typography
              tabIndex="0"
              aria-roledescription="text"
              className={[styles.textStyle, styles.textStyleColor].join(" ")}
            >
              Scan your insurance card
            </Typography>
            <Stack className={styles.cameraContainer}>
              <input
                accept="image/*"
                id="icon-button-file"
                type="file"
                capture="environment"
                onChange={(e) => handleCapture(e.target, setSource)}
                style={{
                  display: "none",
                }}
              />
              {!source ? (
                <label
                  htmlFor="icon-button-file"
                  style={{ alignSelf: "center", margin: "auto" }}
                >
                  <Button
                    aria-label="upload picture"
                    component="span"
                    className={styles.cameraButton}
                  >
                    <CameraAltOutlinedIcon
                      fontSize="large"
                      width={"60px"}
                      height={"60px"}
                    />
                  </Button>
                </label>
              ) : (
                <Image
                  alt=""
                  src={source}
                  fill
                  width={100}
                  height={160}
                  className={styles.fullContent}
                />
              )}
            </Stack>
          </Box>
        </Box>
      );
    } else if (type === "location") {
      child = (
        <Box>
          <Box
            className={additionalProps.isEmptyLocation ? styles.errorField : ""}
            sx={{
              display: "flex",
              alignItems: "flex-end",
              paddingLeft: "15px",
              border: "1px solid #BDBDBD",
              borderRadius: "4px",
            }}
          >
            {locationIconUI()}
            <Controller
              name={"location"}
              control={additionalProps.control}
              render={({
                field: { onChange, value },
                fieldState: { _error },
              }) => {
                return (
                  <StyledInput
                    autoFocus
                    value={value}
                    onChange={onChange}
                    maxLength={50}
                    type="default"
                    variant="filled"
                    label="City, state, or zip code"
                    data-testid={"location-field-dialog"}
                    sx={{
                      width: "100%",
                      [muiInputRoot]: {
                        border: "0px",
                        background: "#fff",
                      },
                    }}
                    onKeyDown={(e) => {
                      keyDownPress(e, handleClose);
                    }}
                  />
                );
              }}
            />
          </Box>
          {additionalProps.isGeolocationEnabled && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: "6px",
              }}
            >
              <NearMeOutlinedIcon
                sx={{
                  width: "22px",
                  height: "22px",
                  color: colors.darkGreen,
                }}
              />
              <Link className={styles.linkUseMyLocationStyle}>
                Use my current location
              </Link>
            </Box>
          )}
        </Box>
      );
    }
    return child;
  }

  return (
    <div>
      <BootstrapDialog
        fullScreen={true}
        aria-labelledby="customized-dialog-title"
        open={open}
        data-testid={"dialogModal"}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          closeLabel={closeLabel}
        ></BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{
            width: "100%",
            height: "100%",
            margin: 0,
          }}
        >
          {childContent ? childContent : getDialogContents()}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
