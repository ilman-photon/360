import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import ProviderProfile from "../../../components/molecules/ProviderProfile/providerProfile";
import BiographyDetails from "../../../components/organisms/BiographyDetails/biographyDetails";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}

export default function Bio({ googleApiKey }) {
  return (
    <Box className={styles.bioPage}>
      <Box className={styles.shortBioContainer}>
        <ProviderProfile variant={"bio"} />
      </Box>
      <BiographyDetails googleApiKey={googleApiKey} />
    </Box>
  );
}

Bio.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"bio"} backTitle="Back to search">
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
