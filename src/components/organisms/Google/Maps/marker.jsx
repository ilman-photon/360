import { useEffect, useState } from "react";

const Marker = (options) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    if (marker) {
      marker.addListener("click", () => options.onClick(marker));
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [marker]);
  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);
  return null;
};

export default Marker;
