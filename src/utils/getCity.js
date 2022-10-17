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
      console.info(city, state, country);
      setCity(city);
    },
    (error) => {
      console.error(error);
    }
  );
}
