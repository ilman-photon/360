import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { CircularProgress } from "@mui/material";
import MapsComponent from "./mapsComponent";

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <CircularProgress />;
    case Status.FAILURE:
      return <>Error loading maps</>;
    case Status.SUCCESS:
      return <MapsComponent />;
  }
};

const MapsWrapper = ({ apiKey }) => <Wrapper apiKey={apiKey} render={render} />;

export default MapsWrapper;
