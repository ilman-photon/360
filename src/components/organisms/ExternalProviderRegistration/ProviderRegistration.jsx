import { useState } from "react";
import Information from "./PersonalInformation";
import OfficeDetails from "./OfficeDetails";
import Specialization from "./Specialization";
import axios from "axios";
import { styles } from "./style";
import { useRouter } from "next/router";

function ProviderRegistration() {
  //state for steps
  const [step, setstep] = useState(1);
  const [responseMessage, setResponseMessage] = useState("");
  const router = useRouter();
  //state for form data
  const [formData, setFormData] = useState({
    npi: "",
    designation: "",
    lastName: "",
    middleName: "",
    firstName: "",
    birthday: new Date(),
    gender: "",
    taxonomyCode: "",
    classification: "",
    specialization: "",
    officeDetailsInfo: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  const npiValue = (value) => {
    formData.npi = value;
  };

  const designationValue = (value) => {
    formData.designation = value;
  };

  const lastNameValue = (value) => {
    formData.lastName = value;
  };

  const middleNameValue = (value) => {
    formData.middleName = value;
  };

  const firstNameValue = (value) => {
    formData.firstName = value;
  };

  const birthDayValue = (value) => {
    formData.birthday = value;
  };

  const genderValue = (value) => {
    formData.gender = value;
  };

  const taxonomyCodeValue = (value) => {
    formData.taxonomyCode = value;
  };

  const specializationValue = (value) => {
    formData.specialization = value;
  };

  const classificationValue = (value) => {
    formData.classification = value;
  };

  const officeDetailsData = (value) => {
    formData.officeDetailsInfo = value;
  };

  const providerUserData = (value) => {
    console.log(value);
    console.log(setFormData);
    formData.taxonomyCode = value.taxonomycode;
    formData.specialization = value.specialization;
    formData.classification = value.classification;
  };

  const handleRegistration = () => {
    setTimeout(() => {
      const payload = JSON.stringify(formData);
      axios({
        method: "post",
        url: "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/provider/registration/userregn",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.data.ResponseCode == 1) {
            setResponseMessage(
              "Your registration has been completed successfully! A link has been sent to your registered email to create your login password. Please check."
            );
          } else {
            setResponseMessage("Registration Failed");
          }
        })
        .catch((err) => {
          console.log(err);
          setResponseMessage("Registration Failed");
        });
    }, 500);
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <Information
          nextStep={nextStep}
          sendProviderUserData={providerUserData}
          sendNPIValue={npiValue}
          sendDesignationValue={designationValue}
          sendLastNameValue={lastNameValue}
          sendFirstNameValue={firstNameValue}
          sendMiddleNameValue={middleNameValue}
          sendBirthDay={birthDayValue}
          sendGenderValue={genderValue}
        />
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <Specialization
          nextStep={nextStep}
          prevStep={prevStep}
          sendTaxonomyCodeValue={taxonomyCodeValue}
          sendSpecialization={specializationValue}
          sendClassification={classificationValue}
          values={formData}
        />
      );
    // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <OfficeDetails
          nextStep={nextStep}
          prevStep={prevStep}
          sendOfficeDetails={officeDetailsData}
          registrationSubmit={handleRegistration}
          values={formData}
        />
      );

    // default case to show nothing
    default:
      return (
        <div className="registrationResponse" style={{ marginTop: "20px" }}>
          <div style={styles.responseTitle}>{responseMessage}</div>
          <div
            style={styles.backToLogin}
            onClick={() => router.push("/provider/login")}
          >
            Back To Login
          </div>
        </div>
      );
  }
}

export default ProviderRegistration;
