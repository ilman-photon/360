import React from "react";
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { StyledButton } from "../../../atoms/Button/button";
import ProviderProfile from "../../../molecules/ProviderProfile/providerProfile";
import { colors } from "../../../../styles/theme";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 41.881832,
  lng: -87.623177,
};

const markers = [
  {
    id: 1,
    name: "Chicago, Illinois",
    position: { lat: 41.881832, lng: -87.623177 },
  },
  {
    id: 2,
    name: "Denver, Colorado",
    position: { lat: 39.739235, lng: -104.99025 },
  },
  {
    id: 3,
    name: "Los Angeles, California",
    position: { lat: 34.052235, lng: -118.243683 },
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 40.712776, lng: -74.005974 },
  },
  {
    id: 5,
    name: "New York, New York #2",
    position: { lat: 41.712776, lng: -74.505974 },
  },
];

const DummyComponent = () => {
  const [counter, setCounter] = useState(1);

  const prev = () => {
    if (counter > 1) setCounter(counter - 1);
    else setCounter(3);
  };
  const next = () => {
    if (counter < 3) setCounter(counter + 1);
    else setCounter(1);
  };

  return (
    <Stack spacing={2} p={1}>
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Stack spacing={2} divider={<Divider />}>
            <Typography variant="bodySmallMedium" sx={{ color: "#757575" }}>
              {counter} of 3 doctors at this location
            </Typography>
            <ProviderProfile variant={"map"} />
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
              10 mi
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Stack alignItems="center" spacing={1}>
        <Typography>Mon, Jul 18</Typography>
        <Typography variant="bodyLink">
          Next Available Tuesday, Aug 28
        </Typography>
      </Stack>
    </Stack>
  );
};

function GMaps({ apiKey }) {
  const [mapContext, setMapContext] = React.useState(null);
  const [activeMarker, setActiveMarker] = React.useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMapContext(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map(({ id, position }) => (
        <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
          icon={{
            url: "/provider-pin.svg",
          }}
        >
          {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <DummyComponent />
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default React.memo(GMaps);
