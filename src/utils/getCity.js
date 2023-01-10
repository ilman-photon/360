import Geocode from "react-geocode";

export function getCity(apiKey, coord, setCity) {
  Geocode.setApiKey(apiKey);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  Geocode.fromLatLng(coord?.latitude, coord?.longitude).then(
    (response) => {
      let city;
      for (const element of response.results[0].address_components) {
        for (const types of element.types) {
          if (types === "administrative_area_level_2") {
            city = element.long_name;
          }
        }
      }
      setCity(city);
    },
    (error) => {
      console.error(error);
    }
  );
}

// Get latitude & longitude from address.
export async function getCoords(apiKey, address = {}) {
  const joinedAddress = Object.values(address).join(", ");
  Geocode.setApiKey(apiKey);
  Geocode.setLanguage("en");
  try {
    const response = await Geocode.fromAddress(joinedAddress);
    if (response) {
      const { lat, lng } = response.results[0].geometry.location;
      return { lat, lng };
    }
  } catch (error) {
    console.error(error);
  }
}

// Get latitude & longitude from address.
export async function getDistanceMatrix(
  origin = { lat: 0, lng: 0 },
  destination = { lat: 0, lng: 0 }
) {
  if (!window.google) return;
  const distanceService = new google.maps.DistanceMatrixService();
  const orig = origin;
  const dest = destination;
  let distanceResult;
  const response = distanceService?.getDistanceMatrix
    ? await distanceService?.getDistanceMatrix({
        origins: [orig],
        destinations: [dest],
        travelMode: "DRIVING", // "WALKING" | "BICYCLING" | "TRANSIT"
        unitSystem: google.maps.UnitSystem.IMPERIAL, // "METRIC"
        avoidHighways: false,
        avoidTolls: false,
      })
    : null;

  if (response) {
    const origins = response.originAddresses;
    // Loop through the elements row to get the value of duration and distance
    for (let i = 0; i < origins.length; i++) {
      const results = response.rows[i].elements;
      for (const element of results) {
        const distanceString = element.distance?.text;
        distanceResult = distanceString;
      }
    }
    return distanceResult;
  }
}
