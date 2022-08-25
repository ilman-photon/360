import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { CircularProgress } from "@mui/material";
import MapsComponent from "./mapsComponent";
import Marker from "./marker";
import InfoWindow from "./infoWindow";
import { useState } from "react";

const markers = [
  { coordinate: { lat: -34.397, lng: 150.644 }, content: "test" },
  { coordinate: { lat: -33, lng: 140 }, content: "test2" },
];

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <CircularProgress />;
    case Status.FAILURE:
      return <>Error loading maps</>;
    // case Status.SUCCESS:
    //   return <MapsComponent />;
  }
};

const MapsWrapper = ({ apiKey }) => {
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [infoWindowOptions, setInfoWindowOptions] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const onMarkerClick = (marker, markerData) => {
    setInfoWindowOptions({
      anchor: marker,
      content: markerData.content,
      shouldFocus: false,
    });
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };
  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Wrapper apiKey={apiKey} render={render}>
        <MapsComponent mapChanged={(m) => setMap(m)}>
          {markers.map((item, idx) => {
            return (
              <Marker
                key={idx}
                onClick={(v) => {
                  onMarkerClick(v, item);
                }}
                position={item.coordinate}
              />
            );
          })}

          <InfoWindow
            marker={activeMarker}
            onClose={onInfoWindowClose}
            visible={showingInfoWindow}
            options={infoWindowOptions}
          >
            <div>
              <h4>{activeMarker ? activeMarker.content : ""}</h4>
            </div>
          </InfoWindow>
        </MapsComponent>
      </Wrapper>
    </div>
  );
};

export default MapsWrapper;
