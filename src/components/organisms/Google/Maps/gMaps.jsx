import React from "react";
import { GoogleMap, MarkerF, InfoWindowF } from "@react-google-maps/api";
import InfoWindowContent from "./infoWindowContent";
import { TEST_ID } from "../../../../utils/constants";

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
  disable = false,
  OnTimeClicked = () => {
    // This is intended
  },
}) {
  const [activeMarker, setActiveMarker] = React.useState(null);
  const markers = [];
  providerListData.forEach((provider) => {
    const { lat, lng } = provider?.coordinate || false;
    if (lat && lng) {
      const foundIndex = markers.findIndex((v) => {
        return (
          v.coordinate.lat === provider.coordinate.lat &&
          v.coordinate.lng === provider.coordinate.lng
        );
      });
      const latlngObj = {
        lat: provider.coordinate.lat,
        lng: provider.coordinate.lng,
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
    }
  });

  const handleActiveMarker = (marker) => {
    setActiveMarker(marker);
  };

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new google.maps.LatLngBounds();

    markers.forEach(({ position }) => bounds.extend(position));
    map?.fitBounds(bounds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onClick={() => handleActiveMarker(null)}
      clickableIcons={!disable}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map((marker, idx) => (
        <MarkerF
          key={idx}
          position={marker.position}
          data-testid={TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.MAPS.pinMarker}
          onClick={() => handleActiveMarker(idx)}
          icon={{
            url: "/provider-pin.svg",
          }}
          clickable={!disable}
        >
          {activeMarker === idx && !disable ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <InfoWindowContent
                data={marker.providerData}
                OnTimeClicked={OnTimeClicked}
              />
            </InfoWindowF>
          ) : (
            ""
          )}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default React.memo(GMaps);
