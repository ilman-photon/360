import React, { useEffect, useRef, useState } from "react";

const mapStyles = { width: "100vw", height: "100vh" };

function MapsComponent({
  center = { lat: -34.397, lng: 150.644 },
  zoom = 4,
  mapChanged = () => {
    // This is intended
  },
  children,
  options,
}) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setOptions(options);
      mapChanged(map);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, options]);

  return (
    <>
      <div ref={ref} style={mapStyles} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}
export default MapsComponent;
