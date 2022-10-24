import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../../store/store";
import ProviderProfile from "../../../components/molecules/ProviderProfile/providerProfile";
import BiographyDetails from "../../../components/organisms/BiographyDetails/biographyDetails";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";
import { getLanguage, getArrayValue } from "../../../utils/bioUtils";
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

  const mapper = (response) => {
    const name = `${response.firstName || ""} ${response.lastName || ""}${
      response.designation ? `, ${response.designation}` : ""
    }`;
    const genderCode = response.sex?.key;
    const femaleGender = genderCode === "3" ? "Female" : "-";
    const gender = genderCode === "6" ? "Male" : femaleGender;
    const address = response.offices;
    const language = getLanguage(response.providerDetails);

    const data = {
      providerId: response.id || "",
      // imageId: "1ffaf737-57ac-4660-8a32-f0650e2285ae",
      imageId: response.providerDetails?.profilePhoto?.digitalAsset.uid || "",
      image: "",
      name,
      rating: response.providerDetails?.rating / 2 || 0,
      phoneNumber: response.workPhone || "",
      specialties: getArrayValue(response.providerDetails?.specialization),
      about: response.note || "",
      gender,
      address,
      language,
      networkInsurance: [],
      education: getArrayValue(response.providerDetails?.education),
      membershipsAffiliation: getArrayValue(
        response.providerDetails?.membershipAndAffiliation
      ),
    };
    getProviderImage(data);
  };

  const getProviderImage = (data) => {
    const api = new Api();
    api
      .getURLDigitalAsset(data.imageId)
      .then((response) => {
        const imageURL = response.presignedUrl;
        data["image"] = imageURL;
        setProviderData(data);
      })
      .catch(() => {
        setProviderData(data);
      })
      .finally(() => {
        isRequest = false;
      });
  };

  const getProviderData = () => {
    isRequest = true;
    const api = new Api();
    !providerData &&
      api.getProviderDetails(bio).then((response) => {
        mapper(response);
      });
  };

  useEffect(() => {
    !isRequest && getProviderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerData, isRequest]);

  const navigateToScheduleAppointment = (data) => {
    console.log(data);
    const address = data.address;
    const addressData = Array.isArray(address) ? address[0] : address;
    const specialties = Array.isArray(data.specialties)
      ? data.specialties[0]
      : data.specialties;
    const state = addressData.state;
    const filterData = {
      location: state,
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
