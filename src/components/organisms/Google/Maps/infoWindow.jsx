import { useEffect, useState } from "react";

const InfoWindow = (options) => {
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    if (!infoWindow) {
      setInfoWindow(new google.maps.InfoWindow());
    }

    // remove infoWindow from map on unmount
    return () => {
      if (infoWindow) {
        infoWindow.setMap(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoWindow]);

  useEffect(() => {
    if (infoWindow) {
      infoWindow.setOptions(options);
    }
  }, [infoWindow, options]);

  return null;
};

export default InfoWindow;
