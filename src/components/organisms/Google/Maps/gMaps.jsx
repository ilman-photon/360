import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindowF,
} from "@react-google-maps/api";
import { Typography } from "@mui/material";
import { StyledButton } from "../../../atoms/Button/button";

const containerStyle = {
  width: "100vw",
  height: "100vh",
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

const DummyComponent = ({ OnProviderClick = () => {} }) => {
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

function MyComponent({ apiKey }) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = React.useState(null);
  const [activeMarker, setActiveMarker] = React.useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // setMap(map)
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map(({ id, name, position }) => (
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
          {/* <InfoWindow onCloseClick={() => setActiveMarker(null)}>
            <div>{name}</div>
          </InfoWindow> */}
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
