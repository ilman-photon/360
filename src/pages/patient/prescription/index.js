import { Stack } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import AccountTitleHeading from "../../../components/atoms/AccountTitleHeading/accountTitleHeading";
import Prescriptions from "../../../components/molecules/Dashboard/prescriptions";
import Navbar from "../../../components/molecules/Navbar/Navbar";
import AppointmentLayout from "../../../components/templates/appointmentLayout";
import PrescriptionLayout from "../../../components/templates/prescriptionLayout";
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
      <Stack
        sx={{
          padding: "24px",
          marginBottom: "32px",
          maxWidth: "1440px",
          backgroundColor: "#fff",
          alignSelf: "center",
          width: "100%",
        }}
      >
        <Prescriptions prescriptionData={prescriptionData} isViewAll={true} />
      </Stack>
    </Stack>
  );
}

PrescriptionPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <PrescriptionLayout>{page}</PrescriptionLayout>
    </Provider>
  );
};
