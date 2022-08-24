import React, { useEffect, useRef } from "react";
// import { createCustomEqual } from "fast-equals";

const mapStyles = { width: "100vw", height: "100vh" }

function MapsComponent({ center = { lat: -34.397, lng: 150.644 }, zoom = 4, mapChanged = () => {}, children, options }) {
  // [START maps_react_map_component_add_map_hooks]
  const ref = React.useRef(null);
  const [map, setMap] = React.useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {
        center,
        zoom,
      }));
    }
  }, [ref, map]);
  // [END maps_react_map_component_add_map_hooks]
  // [START maps_react_map_component_options_hook]
  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useEffect(() => {
    if (map) {
      map.setOptions(options);
      mapChanged(map)
    }
  }, [map, options]);
  // [END maps_react_map_component_options_hook]
  // [START maps_react_map_component_event_hooks]
  React.useEffect(() => {
    if (map) {
      // ["click", "idle"].forEach((eventName) =>
      //   google.maps.event.clearListeners(map, eventName)
      // );
      // if (onClick) {
      //   map.addListener("click", onClick);
      // }

      // if (onIdle) {
      //   map.addListener("idle", () => onIdle(map));
      // }
      console.log('map changed', {map})
    }
  }, [map]);
  // [END maps_react_map_component_event_hooks]
  // [START maps_react_map_component_return]
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
  // [END maps_react_map_component_return]
}
export default MapsComponent;

// [END maps_react_map_marker_component]
// const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
//   if (
//     isLatLngLiteral(a) ||
//     a instanceof google.maps.LatLng ||
//     isLatLngLiteral(b) ||
//     b instanceof google.maps.LatLng
//   ) {
//     return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
//   }
//   // TODO extend to other types
//   // use fast-equals for other objects
//   return deepEqual(a, b);
// });

// function useDeepCompareMemoize(value) {
//   const ref = React.useRef();

//   if (!deepCompareEqualsForMaps(value, ref.current)) {
//     ref.current = value;
//   }
//   return ref.current;
// }

// function useDeepCompareEffectForMaps(callback, dependencies) {
//   React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
// }