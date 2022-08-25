import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import ProviderProfile from "../../../components/organisms/ProviderProfile/providerProfile";
import BiographyDetails from "../../../components/organisms/BiographyDetails/biographyDetails";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

export default function Bio() {
  return (
    <Box className={styles.bioPage}>
      <Box className={styles.shortBioContainer}>
        <ProviderProfile />
      </Box>
      <BiographyDetails />
    </Box>
  );
}

Bio.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        currentActivePage={"bio"}
        onBackClicked={() => {
          // This is intentional
        }}
        backTitle="Back to search"
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
