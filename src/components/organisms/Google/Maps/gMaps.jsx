import React from "react";
import { GoogleMap, Marker, InfoWindowF } from "@react-google-maps/api";
import { Typography } from "@mui/material";
import { StyledButton } from "../../../atoms/Button/button";

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
];

const DummyComponent = () => {
  return (
    <div>
      <Typography variant="h4">Ceritanya list provider</Typography>
      <StyledButton
        onClick={() => {
          console.log("test");
        }}
      >
        Choose provider
      </StyledButton>
    </div>
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
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map(({ id, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <DummyComponent />
            </InfoWindowF>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  );
}

export default React.memo(GMaps);
