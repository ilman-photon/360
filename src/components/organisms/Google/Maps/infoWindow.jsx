import { useEffect, useState } from "react";
// {options: {}, contentString = '', marker}
const InfoWindow = ({options, map, contentString = '', marker}) => {
  console.log(options)
  const [infoWindow, setInfoWindow] = useState(null);

  useEffect(() => {
    if (!infoWindow) {
      setInfoWindow(new google.maps.InfoWindow({
        content: contentString,
      }));
    }

    // remove infoWindow from map on unmount
    return () => {
      if (infoWindow) {
        infoWindow.setMap(null);
      }
    };
  }, [infoWindow]);
  
  useEffect(() => {
    console.log({options})
    if (infoWindow) {
      infoWindow.setOptions(options);
    }
  }, [infoWindow, options]);

  useEffect(() => {
    console.log('op',{map, options})
    // if (options.anchor) {
    //   infoWindow.open(options)
    // }
  },[options])

  return null;
};

export default InfoWindow