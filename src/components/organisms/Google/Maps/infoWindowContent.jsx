import { useState } from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import ProviderProfile from "../../../molecules/ProviderProfile/providerProfile";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledButton } from "../../../atoms/Button/button";
import constants from "../../../../utils/constants";
import styles from "./iwStyles.module.scss";

const InfoWindowContent = ({
  data = [],
  OnTimeClicked = () => {
    // This is intended
  },
}) => {
  const [counter, setCounter] = useState(1);

  const prev = () => {
    if (counter > 1) setCounter(counter - 1);
    else setCounter(data.length);
  };
  const next = () => {
    if (counter < data.length) setCounter(counter + 1);
    else setCounter(1);
  };

  const getLabelTime = (payload) => {
    function isValidDate(d) {
      return d instanceof Date && !isNaN(d);
    }

    const date = new Date(payload);
    return isValidDate(date)
      ? date.toLocaleString("en-US", {
          weekday: "short", // long, short, narrow
          day: "numeric", // numeric, 2-digit
          month: "short", // numeric, 2-digit, long, short, narrow
        })
      : payload;
  };

  const getNextAvailable = () => {
    if (!data[counter - 1]) return "";
    if (!data[counter - 1].availability.length == 0) return "";
    return `Next Available ${getLabelTime(
      data[counter - 1].availability[0].date
    )}`;
  };

  return (
    <Stack spacing={2} pb={5} sx={{ maxWidth: { xs: "300px", md: "400px" } }}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Stack spacing={2} divider={<Divider />}>
            <Typography
              variant="bodySmallMedium"
              sx={{ color: "#757575", fontWeight: "400" }}
            >
              {counter} of {data.length} doctors at this location
            </Typography>
            <ProviderProfile
              isCard
              variant={"map"}
              providerData={data[counter - 1]}
              imageSize={"medium"}
              bioContainerClass={styles.customBioContainer}
              addressClass={styles.customAddress}
              isShownPhoneAndRating={true}
            />
          </Stack>
        </Grid>
        <Grid item xs={2}>
          <Stack spacing={2}>
            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <ArrowBackIosIcon
                role="button"
                data-testid={constants.TEST_ID.MAP_INFO_WINDOW.previousProvider}
                sx={{
                  width: "22px",
                  cursor: "pointer",
                  color: "rgba(0, 0, 0, 0.54)",
                }}
                onClick={prev}
              />
              <ArrowForwardIosIcon
                role="button"
                data-testid={constants.TEST_ID.MAP_INFO_WINDOW.nextProvider}
                sx={{
                  width: "22px",
                  cursor: "pointer",
                  color: "rgba(0, 0, 0, 0.54)",
                }}
                onClick={next}
              />
            </Stack>
            <Typography
              variant="smallMediumMuseo"
              sx={{ textAlign: "right", pt: "10px" }}
            >
              {data[counter - 1] ? data[counter - 1].distance : "-"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Stack alignItems="center" spacing={2}>
        <Stack spacing={2} maxWidth="100%" width={"100%"}>
          {data[counter - 1]
            ? data[counter - 1].availability.map((v, idx) => {
                return (
                  <Stack key={idx}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "24px",
                        fontWeight: 500,
                      }}
                      tabIndex={"0"}
                    >
                      {getLabelTime(v.date)}
                    </Typography>
                    <Stack flexDirection="row" flexWrap="wrap" gap={1}>
                      {v.list.map((item, timeIdx) => {
                        return (
                          <StyledButton
                            key={timeIdx}
                            mode={constants.PRIMARY}
                            size={constants.SMALL}
                            className={
                              item.isDisable ? styles.scheduleDisableBtn : ""
                            }
                            gradient={false}
                            data-testid={
                              constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
                                .MAPS.infoWindow.timeslot
                            }
                            onClick={() => {
                              if (!item) return;
                              OnTimeClicked(
                                {
                                  appointmentCode: item.appointmentCode,
                                  dateTime: new Date(
                                    `${v.date} ${item.time.substring(
                                      0,
                                      item.time.length - 2
                                    )}`
                                  ),
                                },
                                data[counter - 1]
                              );
                            }}
                            sx={{
                              "&.sxButton": {
                                height: "30px",
                                padding: 0,
                                minWidth: "90px !important",
                                fontSize: "14px",
                                fontWeight: 500,
                              },
                              px: 2,
                              py: "6px",
                            }}
                          >
                            <Typography variant="bodyRegularSmall">
                              {item ? item.time : "-"}
                            </Typography>
                          </StyledButton>
                        );
                      })}
                    </Stack>
                  </Stack>
                );
              })
            : ""}
        </Stack>
        <Typography variant="bodyLink">{getNextAvailable()}</Typography>
      </Stack>
    </Stack>
  );
};

export default InfoWindowContent;
