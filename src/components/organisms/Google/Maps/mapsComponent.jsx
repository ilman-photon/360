import { useEffect, useRef } from "react";

function MapsComponent({ center = { lat: -34.397, lng: 150.644 }, zoom = 4 }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div style={{ width: "100vw", height: "100vh" }} ref={ref} id="map" />;
}
export default MapsComponent;
