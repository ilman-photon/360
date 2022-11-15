import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import ProviderProfile from "../../../components/molecules/ProviderProfile/providerProfile";
import BiographyDetails from "../../../components/organisms/BiographyDetails/biographyDetails";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";
import { getLanguage } from "../../../utils/bioUtils";
import { useLoadScript } from "@react-google-maps/api";
import { setFilterData, setIsFilterApplied } from "../../../store/appointment";
import moment from "moment";
import { useRouter } from "next/router";
import {
  onCalledGetAppointmentTypesAPI,
  onCallSubmitFilterAPI,
} from "../../../utils/appointment";

export async function getServerSideProps(context) {
  const { bio } = context.query;
  return {
    props: {
      embedApi: process.env.NEXT_PUBLIC_EMBED_API,
      bio,
    },
  };
}

export default function Bio({ embedApi, bio }) {
  const [providerData, setProviderData] = useState();
  const insuranceCarrierList = useSelector((state) => state.provider.list);

  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: embedApi,
  });

  let isRequest = false;
  const getArrayValue = (data) => {
    if (data) {
      const isMultipleValue = Array.isArray(data);
      return !isMultipleValue ? splitByComa(data) : data;
    } else {
      return "";
    }
  };

  const splitByComa = (data) => {
    return data.split(", ");
  };

  const mapper = (response) => {
    const designation = response.designation ? `, ${response.designation}` : "";
    const name = `${response.firstName || ""} ${
      response.lastName || ""
    }${designation}`;
    const genderCode = response.sex?.key;
    const femaleGender = genderCode === "3" ? "Female" : "-";
    const gender = genderCode === "6" ? "Male" : femaleGender;
    const address = response.offices;
    const language = getLanguage(response.providerDetails);

    const data = {
      providerId: response.id || "",
      image: response.providerDetails?.profilePhoto?.digitalAsset || "",
      name,
      rating: response.providerDetails?.rating || 0,
      phoneNumber: response.workPhone || "",
      specialties: getArrayValue(response.providerDetails?.specialization),
      about: response.note || "",
      gender,
      address,
      language,
      networkInsurance: response.networkInsurance || [],
      education: getArrayValue(response.providerDetails?.education),
      membershipsAffiliation: getArrayValue(
        response.providerDetails?.membershipAndAffiliation
      ),
    };
    setProviderData(data);
  };

  const getProviderData = () => {
    isRequest = true;
    const api = new Api();
    !providerData &&
      api
        .getProviderDetails(bio)
        .then((response) => {
          mapper(response);
        })
        .finally(() => {
          isRequest = false;
        });
  };

  useEffect(() => {
    !isRequest && getProviderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerData, isRequest]);

  const navigateToScheduleAppointment = (data) => {
    const address = data.address;
    const addressData = Array.isArray(address) ? address[0] : address;
    const specialties = Array.isArray(data.specialties)
      ? data.specialties[0]
      : data.specialties;

    let location = "";

    if (addressData.city) {
      location = addressData.city;
    } else if (addressData.state) {
      location = addressData.state;
    } else if (addressData.zip) {
      location = addressData.zip;
    }

    const filterData = {
      location,
      date: moment().format("MM/DD/YYYY"),
      purposeOfVisit: specialties,
    };

    dispatch(setFilterData(filterData));
    dispatch(setIsFilterApplied(true));
    onCalledGetAppointmentTypesAPI(insuranceCarrierList, (filterSuggestion) => {
      onCallSubmitFilterAPI(filterData, filterSuggestion, dispatch, router);
    });
  };

  return (
    providerData &&
    isLoaded && (
      <Box className={styles.bioPage}>
        <Box className={styles.shortBioContainer}>
          <ProviderProfile
            providerData={providerData}
            variant={"bio"}
            navigateToScheduleAppointment={(data) => {
              navigateToScheduleAppointment(data);
            }}
          />
        </Box>
        <BiographyDetails googleApiKey={embedApi} providerData={providerData} />
      </Box>
    )
  );
}

Bio.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout
        currentActivePage={"bio"}
        backTitle="Back"
        pageTitle="Doctor Biography"
        showNavbar={true}
      >
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
