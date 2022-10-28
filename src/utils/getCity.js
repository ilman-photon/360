import Geocode from "react-geocode";

export function getCity(apiKey, coord, setCity) {
  Geocode.setApiKey(apiKey);
  Geocode.setLanguage("en");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();
  Geocode.fromLatLng(coord?.latitude, coord?.longitude).then(
    (response) => {
      let city, state, country;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (
          let j = 0;
          j < response.results[0].address_components[i].types.length;
          j++
        ) {
          switch (response.results[0].address_components[i].types[j]) {
            case "administrative_area_level_2":
              city = response.results[0].address_components[i].long_name;
              break;
            case "administrative_area_level_1":
              state = response.results[0].address_components[i].long_name;
              break;
            case "country":
              country = response.results[0].address_components[i].long_name;
              break;
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
  const response = distanceService?.getDistanceMatrixawait
    ? distanceService?.getDistanceMatrix({
        origins: [orig],
        destinations: [dest],
        travelMode: "BICYCLING", // "WALKING" | "BICYCLING" | "TRANSIT"
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
