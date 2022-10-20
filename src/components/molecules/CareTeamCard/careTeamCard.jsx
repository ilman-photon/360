import {
  Box,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneNumber from "../../atoms/PhoneNumber/phoneNumber";
import { StyledButton } from "../../atoms/Button/button";
import styles from "./styles.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { setFilterData } from "../../../store/appointment";
import { useRouter } from "next/router";

export default function CareTeamCard({ provider, onRemove }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const addressLine1 = provider.address.addressLine1
    ? `${provider.address.addressLine1} `
    : "";
  const addressLine2 = provider.address.addressLine2
    ? `${provider.address.addressLine1}. `
    : ".";
  const city = provider.address.city ? `${provider.address.city}, ` : "";
  const state = provider.address.state ? `${provider.address.state} ` : "";
  const zip = provider.address.zip ? `${provider.address.zip}` : "";
  const address = `${addressLine1}${addressLine2}${city}${state}${zip}`;
  const open = Boolean(anchorEl);

  const navigateToScheduleAppointment = () => {
    const filterData = {
      location: state,
    };

    dispatch(setFilterData(filterData));
    router.push("/patient/appointment/");
  };

  const handleClick = (event) => {
    //Disable based on BA confirmation
    //setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={styles.careTeamContainer}>
      <Box>
        <IconButton
          aria-label="more"
          id="more-button"
          aria-controls={open ? "more-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            position: "absolute",
            right: 0,
            padding: {
              xs: "12.5px",
              sm: "22px",
            },
          }}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="more-menu"
          MenuListProps={{
            "aria-labelledby": "more-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            ".MuiMenu-list": {
              padding: 0,
              width: "131px",
              height: "48px",
              borderRadius: "8px",
              display: "flex",
            },
          }}
        >
          <MenuItem
            onClick={handleClose}
            sx={{
              fontSize: "14px",
              color: "#323338",
              flex: 1,
              gap: "12px",
              "& .MuiSvgIcon-root": {
                fontSize: "24px",
                color: "#757575",
              },
            }}
          >
            <DeleteOutlineIcon />
            Remove
          </MenuItem>
        </Menu>
      </Box>
      <Box className={styles.bioContainer}>
        <Box className={styles.careTeamImage}>
          <Image
            alt="Doctor Image"
            src={"/cardimage.png"}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box className={styles.addressContainer}>
          <Typography className={styles.providerNameText} variant="h1">
            {provider.name}
          </Typography>
          <Box display="flex" flexDirection="row">
            <LocationOnOutlinedIcon
              sx={{
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                },
                margin: "auto 0",
              }}
            />
            <Typography className={styles.addressNameText} variant="body2">
              {provider.address.name}
            </Typography>
          </Box>
          <Typography className={styles.addressText} variant="body2">
            {address}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.infoContainer}>
        <Box>
          <Typography className={styles.headingText} variant="body2">
            Specialties
          </Typography>
          <Typography className={styles.text} variant="body2">
            {provider.specialities}
          </Typography>
        </Box>
        <Box>
          <Typography className={styles.headingText} variant="body2">
            Email
          </Typography>
          <Link
            className={styles.link}
            variant="body2"
            href={`mailto:${provider.email}`}
          >
            {provider.email}
          </Link>
        </Box>
        <Box>
          <Typography className={styles.headingText} variant="body2">
            Phone
          </Typography>
          <PhoneNumber
            phone={provider.phone}
            sx={{
              "&.MuiTypography-body2": {
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                },
              },
            }}
          />
        </Box>
      </Box>
      <Box className={styles.buttonContainer}>
        <Link
          href={`/patient/bio/${provider.id}`}
          className={styles.viewProfileLink}
        >
          View Profile
        </Link>
        <StyledButton
          theme={"patient"}
          mode={"primary"}
          size={"small"}
          gradient={false}
          onClick={() => {
            navigateToScheduleAppointment();
          }}
        >
          Schedule Appointment
        </StyledButton>
      </Box>
    </Box>
  );
}
