import { Stack } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import Prescriptions from "../../../components/molecules/Dashboard/prescriptions";
import AppointmentLayout from "../../../components/templates/appointmentLayout";
import store from "../../../store/store";
import { Api } from "../../api/api";

export default function PrescriptionPage() {
  const [prescriptionData, setPrescriptionData] = React.useState({});

  //Call API for getAllPrescriptions
  function onCalledGetAllPrescriptionsAPI() {
    const api = new Api();
    api
      .getAllPrescriptions()
      .then(function (response) {
        setPrescriptionData(response.prescriptions);
      })
      .catch(function () {
        //Handle error getAllPrescriptions
      });
  }

  useEffect(() => {
    onCalledGetAllPrescriptionsAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack sx={{ width: "100%" }}>
      <Prescriptions prescriptionData={prescriptionData} />
    </Stack>
  );
}

PrescriptionPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout>{page}</AppointmentLayout>
    </Provider>
  );
};
