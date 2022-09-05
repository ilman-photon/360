import React from "react";
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import InfoWindowContent from "./infoWindowContent";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 41.881832,
  lng: -87.623177,
};

function GMaps({
  providerListData = [],
  OnTimeClicked = () => {
    // This is intended
  },
}) {
  const [activeMarker, setActiveMarker] = React.useState(null);
  const markers = [];
  providerListData.forEach((provider) => {
    const foundIndex = markers.findIndex(
      (v) =>
        v.coordinate.latitude === provider.coordinate.latitude &&
        v.coordinate.longitude === provider.coordinate.longitude
    );
    const latlngObj = {
      lat: provider.coordinate.latitude,
      lng: provider.coordinate.longitude,
    };
    const obj = {
      ...provider,
      position: latlngObj,
    };
    if (foundIndex > -1) {
      markers[foundIndex].providerData.push(obj);
    } else {
      markers.push({
        coordinate: provider.coordinate,
        position: latlngObj,
        providerData: [obj],
      });
    }
  });

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

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map((marker, idx) => (
        <MarkerF
          key={idx}
          position={marker.position}
          onClick={() => handleActiveMarker(idx)}
          icon={{
            url: "/provider-pin.svg",
          }}
        >
          {activeMarker === idx ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <InfoWindowContent
                data={marker.providerData}
                OnTimeClicked={OnTimeClicked}
              />
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default React.memo(GMaps);
