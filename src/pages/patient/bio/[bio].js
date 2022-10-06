import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import ProviderProfile from "../../../components/molecules/ProviderProfile/providerProfile";
import BiographyDetails from "../../../components/organisms/BiographyDetails/biographyDetails";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { Api } from "../../api/api";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const { bio } = context.query;
  return {
    props: {
      googleApiKey: process.env.GOOGLE_API_KEY,
      bio,
    },
  };
}

export default function Bio({ googleApiKey, bio }) {
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
    const genderCode = response.sex?.name;
    const gender = genderCode === "M" ? "Male" : "Female";
    const address = [];
    const primaryAddress = response.address || "";
    const secondaryAddress = (response.offices && response.offices[0]) || "";
    primaryAddress !== "" && address.push(primaryAddress);
    secondaryAddress !== "" && address.push(secondaryAddress);
    const language = [
      response.providerDetails?.language1 || "",
      response.providerDetails?.language2 || "",
    ];

    const data = {
      providerId: response.id || "",
      // imageId: "1ffaf737-57ac-4660-8a32-f0650e2285ae",
      imageId: response.providerDetails?.profilePhoto?.digitalAsset.uid || "",
      image: "",
      name,
      rating: response.providerDetails?.rating || 0,
      phoneNumber: response.workPhone || "",
      specialties: getArrayValue(response.providerDetails?.specialization),
      about: response.about || "",
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
        <BiographyDetails
          googleApiKey={googleApiKey}
          providerData={providerData}
        />
      </Box>
    )
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
