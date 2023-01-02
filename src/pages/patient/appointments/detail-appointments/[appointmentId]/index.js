import AppointmentLayout from "../../../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../../../store/store";
import { Box } from "@mui/material";
import styles from "../../styles.module.scss";
import { Api } from "../../../../api/api";
import { useEffect, useState } from "react";
import DetailAppointment from "../../../../../components/organisms/DetailAppointment/detailAppointment";
import {
  checkUndefinedObject,
  parseAppointDetailXml,
  parseAppointmentDetails,
} from "../../../../../utils/appointment";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { xml2json } from "xml-js";
import { LoadingModal } from "../../../../../components/molecules/LoadingModal/LoadingModal";

export default function AppointmentDetails() {
  const [appointments, setAppointments] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const getAppointmentDetails = (appointmentId) => {
    setIsLoading(true);
    const api = new Api();
    !appointments &&
      api
        .getAppointmentDetails(appointmentId)
        .then(async (response) => {
          if (response?._id) {
            const digitalResp = await api.getURLDigitalAsset(response._id);
            if (digitalResp?.presignedUrl) {
              getDigitalSource(digitalResp.presignedUrl);
            }
          }
        })
        .catch(function () {
          setIsLoading(false);
        });
  };

  const getDigitalSource = (url) => {
    const api = new Api();
    api.getURLResponse(url).then((xml) => {
      const parse = xml2json(xml, { compact: true });
      const dataMapper = parseAppointDetailXml(JSON.parse(parse));
      setIsLoading(false);
      setAppointments(dataMapper);
    });
  };

  useEffect(() => {
    const cookies = new Cookies();
    if (!cookies.get("authorized")) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated, router]);

  useEffect(() => {
    const appointmentId =
      checkUndefinedObject(router, "query.appointmentId") ?? null;

    if (!appointmentId) return;
    getAppointmentDetails(appointmentId);
    return () => {
      setIsLoading(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      {isAuthenticated && (
        <Box className={styles.container}>
          <LoadingModal open={isLoading} />
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
