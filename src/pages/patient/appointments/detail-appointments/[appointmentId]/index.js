import AppointmentLayout from "../../../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../../../store/store";
import { Box } from "@mui/material";
import styles from "../../styles.module.scss";
import { Api } from "../../../../api/api";
import { useEffect, useState } from "react";
import DetailAppointment from "../../../../../components/organisms/DetailAppointment/detailAppointment";
import { parseAppointmentDetails } from "../../../../../utils/appointment";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
export default function AppointmentDetails() {
  const [appointments, setAppointments] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  const getAppointmentDetails = () => {
    const api = new Api();
    !appointments &&
      api
        .getAppointmentDetails()
        .then((response) => {
          setAppointments(response);
        })
        .catch(function () {
          //Handle error getAppointments
        });
  };

  useEffect(() => {
    const cookies = new Cookies();
    if (!cookies.get("authorized")) {
      // router.push("/patient/login");
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated, router]);

  useEffect(() => {
    getAppointmentDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appointments]);

  return (
    <>
      {isAuthenticated && (
        <Box className={styles.container}>
          {appointments && (
            <DetailAppointment data={parseAppointmentDetails(appointments)} />
          )}
        </Box>
      )}
    </>
  );
}

AppointmentDetails.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        currentActivePage={"appointments"}
        backTitle={"Back to Appointments"}
        onBackClicked={"/patient/appointments"}
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
