import { Stack, useMediaQuery } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { Provider } from "react-redux";
import Prescriptions from "../../../components/molecules/Dashboard/prescriptions";
import PrescriptionLayout from "../../../components/templates/prescriptionLayout";
import store from "../../../store/store";
import { mmddyyDateFormat } from "../../../utils/dateFormatter";
import { onCallGetPrescriptionData } from "../../../utils/prescription";
import { Api } from "../../api/api";

export default function PrescriptionPage() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [prescriptionData, setPrescriptionData] = React.useState({});
  const [requestRefillResponse, setRequestRefillResponse] =
    React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  //Call API for getAllPrescriptions
  function onCalledGetAllPrescriptionsAPI() {
    // const api = new Api();
    onCallGetPrescriptionData()
      .then(function (response) {
        setPrescriptionData(response);
      })
      .catch(function () {
        //Handle error getAllPrescriptions
      })
      .finally(function () {
        setTimeout(() => {
          setIsLoaded(true);
        }, 200);
      });
  }

  //Call API for medication request refill
  function onMedicationRequestRefill(postBody, isCancelRequest) {
    const index = prescriptionData.medications.findIndex(
      (x) => x.id === postBody.medicationId
    );
    const api = new Api();
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (isCancelRequest) {
      api
        .doMedicationCancelRequestRefill(postBody)
        .then(function (response) {
          const data = JSON.parse(JSON.stringify(prescriptionData));
          data.medications[index].status = "";
          setPrescriptionData(data);
          setRequestRefillResponse(response);
          resetRequestRefillResponse();
        })
        .catch(function () {
          //Handle error medication cancel request refill
          resetRequestRefillResponse();
        });
    } else {
      const refillRequestBody = {
        subject: "PhotonTesting checking",
        bodyNote: "Please refill the medicine",
        bodyReferences: [
          {
            code: "PATIENT",
            _id: "fdb0aba5-63b8-4c79-b5be-5b90d30088fa",
          },
        ],
        messageStatus: "SENT",
        priority: "HIGH",
        deliveryDate: mmddyyDateFormat(new Date()),
        senderIsPatient: true,
        providerNPI: prescriptionData.medications[index].providerNPI,
      };

      api
        .doMedicationRequestRefill(refillRequestBody)
        .then(function (response) {
          const data = JSON.parse(JSON.stringify(prescriptionData));
          data.medications[index].status = "refill request";
          data.medications[index].fillRequestDate = mmddyyDateFormat(
            response.deliveryDate
          );
          setPrescriptionData(data);
          setRequestRefillResponse(response);
          resetRequestRefillResponse();
        })
        .catch(function () {
          //Handle error medication request refill
          resetRequestRefillResponse();
        });
    }
  }

  function resetRequestRefillResponse() {
    window.scrollTo({
      left: 0,
      top: 0,
    });
    setTimeout(() => {
      setRequestRefillResponse(null);
    }, 2000);
  }

  useEffect(() => {
    onCalledGetAllPrescriptionsAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack sx={{ width: "100%", backgroundColor: "#F4F4F4" }}>
      {/* {isLoaded && ( */}
      <Stack
        sx={{
          padding: isMobile ? "16px" : "44px 24px 24px 24px",
          marginBottom: "32px",
          maxWidth: "1440px",
          backgroundColor: isMobile ? "#F4F4F4" : "#fff",
          alignSelf: "center",
          width: "100%",
        }}
      >
        <Prescriptions
          prescriptionData={prescriptionData}
          isViewAll={true}
          onMedicationRequestRefill={onMedicationRequestRefill}
          requestRefillResponseData={requestRefillResponse}
        />
      </Stack>
      {/* )} */}
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
