import { useState } from "react";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import ProviderProfile from "../../../molecules/ProviderProfile/providerProfile";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { StyledButton } from "../../../atoms/Button/button";
import constants from "../../../../utils/constants";

const InfoWindowContent = ({
  data,
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
    if (counter < 3) setCounter(counter + 1);
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
    if (!data[counter - 1].availability) return "-";
    return `Next Available ${getLabelTime(
      data[counter - 1].availability[0].date
    )}`;
  };

  return (
    <Stack spacing={2} pb={5} sx={{ maxWidth: "400px" }}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Stack spacing={2} divider={<Divider />}>
            <Typography variant="bodySmallMedium" sx={{ color: "#757575" }}>
              {counter} of {data.length} doctors at this location
            </Typography>
            <ProviderProfile variant={"map"} providerData={data[counter - 1]} />
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
                sx={{ width: "22px", cursor: "pointer" }}
                onClick={prev}
              />
              <ArrowForwardIosIcon
                role="button"
                sx={{ width: "22px", cursor: "pointer" }}
                onClick={next}
              />
            </Stack>
            <Typography
              variant="bodySmallMedium"
              sx={{ textAlign: "right", pt: 2 }}
            >
              {data[counter - 1] ? data[counter - 1].distance : "-"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Stack alignItems="center" spacing={2}>
        <Stack spacing={2} maxWidth="100%">
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
                    >
                      {getLabelTime(v.date)}
                    </Typography>
                    <Stack
                      flexDirection="row"
                      overflow="auto"
                      gap={1}
                      className="hide-scrollbar"
                    >
                      {v.list.map((item, timeIdx) => {
                        return (
                          <StyledButton
                            key={timeIdx}
                            theme={constants.PATIENT}
                            mode={constants.PRIMARY}
                            size={constants.SMALL}
                            gradient={false}
                            onClick={() => {
                              if (!item) return;
                              console.log(
                                `${v.date} ${item.time.substring(
                                  0,
                                  item.time.length - 2
                                )}`
                              );
                              OnTimeClicked(
                                new Date(
                                  `${v.date} ${item.time.substring(
                                    0,
                                    item.time.length - 2
                                  )}`
                                ),
                                data[counter - 1]
                              );
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
