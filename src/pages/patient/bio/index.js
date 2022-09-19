import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import ProviderProfile from "../../../components/molecules/ProviderProfile/providerProfile";
import BiographyDetails from "../../../components/organisms/BiographyDetails/biographyDetails";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
    },
  };
}
export default function Bio({ googleApiKey }) {
  const [providerData, setProviderData] = useState();

  const getProviderData = () => {
    const api = new Api();
    !providerData &&
      api.getProviderDetails().then((response) => {
        setProviderData(response);
      });
  };

  useEffect(() => {
    getProviderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerData]);

  return (
    <Box className={styles.bioPage}>
      <Box className={styles.shortBioContainer}>
        <ProviderProfile providerData={providerData} variant={"bio"} />
      </Box>
      <BiographyDetails
        googleApiKey={googleApiKey}
        providerData={providerData}
      />
    </Box>
  );
}

Bio.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        currentActivePage={"bio"}
        backTitle="Back to search"
        pageTitle="Doctor Biography"
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
