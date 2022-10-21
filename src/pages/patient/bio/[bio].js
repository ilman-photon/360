import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import ProviderProfile from "../../../components/molecules/ProviderProfile/providerProfile";
import BiographyDetails from "../../../components/organisms/BiographyDetails/biographyDetails";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";
import getLanguage from "../../../utils/getLanguage";

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

  const getArrayValue = (data) => {
    if (data) {
      const isMultipleValue = Array.isArray(data);
      return !isMultipleValue ? [data] : data;
    } else {
      return "";
    }
  };

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
    console.log(data);
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
      });
  };

  const getProviderData = () => {
    const api = new Api();
    !providerData &&
      api.getProviderDetails(bio).then((response) => {
        mapper(response);
      });
  };

  useEffect(() => {
    getProviderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerData]);

  return (
    providerData && (
      <Box className={styles.bioPage}>
        <Box className={styles.shortBioContainer}>
          <ProviderProfile providerData={providerData} variant={"bio"} />
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
