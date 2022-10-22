import axios from "axios";
import moment from "moment";
import { setGenericErrorMessage } from "../../store";
import constants from "../../utils/constants";

let store;

export const injectStore = (_store) => {
  store = _store;
};

export class Api {
  client;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 20000,
    });

    this.requestCounter = 0;
    this.maxRequestCounter = 3;
  }

  errorGenericValidation = (err) => {
    console.log("err : ", err);
    return (
      err &&
      ((err.code === constants.ERROR_CODE.BAD_REQUEST &&
        err?.response?.data?.ResponseCode === undefined) ||
        err.code === constants.ERROR_CODE.NETWORK_ERR ||
        [500].indexOf(err.response?.status) !== -1) &&
      [400].indexOf(err.response?.status) === -1
    );
  };

  responseCodeValidation = (err) => {
    return (
      [constants.ERROR_CODE.NETWORK_ERR, 500].indexOf(err.ResponseCode) === -1
    );
  };

  getResponse(url, postbody, method, showError = true) {
    const api = new Api();
    return new Promise((resolve, reject) => {
      const resolver = function (response) {
        if (response && response.data) {
          resolve(response.data);
        } else {
          reject(response);
        }
      };
      const rejecter = function (err) {
        if (api.errorGenericValidation(err) && showError) {
          store.dispatch(
            setGenericErrorMessage("Please try again after sometime.")
          );
          reject({
            description:
              "Something went wrong. Please try again after sometime.",
            ResponseCode: err.response.status || err.code,
          });
        } else if (err && err.response && err.response.data) {
          reject(err.response.data);
          const errors = err.response.data._errors;
          if (errors && showError) {
            store.dispatch(setGenericErrorMessage(errors[0].description));
          }
        } else {
          reject(err);
        }
      };

      switch (method) {
        case "get":
          return api.client.get(url, postbody).then(resolver).catch(rejecter);
        case "post":
          return api.client.post(url, postbody).then(resolver).catch(rejecter);
        case "put":
          return api.client.put(url, postbody).then(resolver).catch(rejecter);
        case "patch":
          return api.client.patch(url, postbody).then(resolver).catch(rejecter);
        default:
          return api.client.get(url, postbody).then(resolver).catch(rejecter);
      }
    });
  }

  logout(postbody) {
    const url = "/ecp/patient/logout";
    return this.forgotFeatureValidation(url, postbody, "post", 2005);
  }

  login(postbody) {
    const url = "/ecp/patient/login";
    return this.forgotFeatureValidation(url, postbody, "post", 2000);
  }

  getPatientId(postbody) {
    const url = "/ecp/patient/search/ecppatientid";
    return this.getResponse(url, postbody, "post");
  }

  validateGuestUser(postbody) {
    const url = "/ecp/patient/validate";
    return this.forgotFeatureValidation(url, postbody, "post");
  }

  validateUserName(postbody) {
    const url = "/ecp/patient/validate";
    return this.forgotFeatureValidation(url, postbody, "post");
  }

  resetPassword(postbody) {
    const url = "/ecp/patient/resetPasswordLink";
    return this.forgotFeatureValidation(url, postbody, "post");
  }

  oneTimeLink(postbody) {
    const url = "/ecp/patient/onetimelink";
    return this.forgotFeatureValidation(url, postbody, "post");
  }

  validateSecurityQuestion(postbody) {
    const url = "/ecp/patient/securityquestions/validate";
    return this.forgotFeatureValidation(url, postbody, "post", 2000);
  }

  updatePassword(postbody) {
    const url = "/ecp/patient/updatepassword";
    return this.forgotFeatureValidation(url, postbody, "post");
  }

  getUserData(postbody) {
    const url = "/ecp/patient/mfa/getUserData";
    return this.forgotFeatureValidation(url, postbody, "post", 4000);
  }

  sendMfaCode(postbody) {
    const url = "/ecp/patient/mfa/sendotp";
    return this.forgotFeatureValidation(url, postbody, "post", 4000);
  }

  submitMfaCode(postbody) {
    const url = "/ecp/patient/mfa/verifyotp";
    return this.forgotFeatureValidation(url, postbody, "post", 4000);
  }

  forgotFeatureValidation(url, postbody, method, expectedCode) {
    if (!expectedCode) {
      expectedCode = 1000;
    }
    return new Promise((resolve, reject) => {
      this.getResponse(url, postbody, method)
        .then(function (data) {
          const responseCode = data.ResponseCode;
          const responseType = data.ResponseType;
          if (responseCode === expectedCode && responseType === "success") {
            resolve(data);
          } else {
            reject(data);
          }
        })
        .catch(function (err) {
          reject(err);
        });
    });
  }

  tokenValidation(postbody, isResetPassword) {
    let url = "/ecp/patient/oneTimeLinkToken";
    if (isResetPassword) {
      url = "/ecp/patient/resetPasswordToken";
    }
    return new Promise((resolve, reject) => {
      this.getResponse(url, postbody, "post")
        .then(function (data) {
          if (data) {
            resolve(data);
          } else {
            reject(data);
          }
        })
        .catch(function (err) {
          reject(err);
        });
    });
  }

  getSecurityQuestion() {
    const url = "/ecp/patient/getsecurityQuestions";
    return new Promise((resolve, reject) => {
      this.getResponse(url, {}, "get")
        .then(function (data) {
          if (data) {
            resolve(data);
          } else {
            reject(data);
          }
        })
        .catch(function (err) {
          reject(err);
        });
    });
  }

  submitSecurityQuestion(postbody) {
    const url = "/ecp/patient/saveSecurityQuestions";
    return this.forgotFeatureValidation(url, postbody, "post", 2000);
  }

  getIpAddress() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.ipify.org?format=json")
        .then((response) => {
          resolve(response.data.ip);
        })
        .catch(() => {
          reject();
        });
    });
  }

  async getUSListOfStates() {
    const usStatesApiUrl =
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-united-states-of-america-state&q=&sort=ste_name&facet=ste_name&rows=99";
    try {
      const response = await this.getResponse(usStatesApiUrl, null, "get");
      return response.records.map((record) => {
        return {
          id: record.datasetid,
          label: record.fields.ste_stusps_code,
          value: record.fields.ste_stusps_code,
        };
      });
    } catch (error) {
      console.error({ error });
    }
  }

  getProviderDetails(providerId) {
    const url = `/ecp/appointments/getprovider/${providerId}`;
    return this.getResponse(url, {}, "get");
  }

  getProviderAvailibility() {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/create-appointment/getProviderAvailibility`;
    return this.getResponse(url, {}, "post");
  }

  getSugestion() {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/create-appointment/getSugestion`;
    return this.getResponse(url, {}, "get");
  }

  getAllAppointment() {
    const domain = window.location.origin;
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = `/${userData?.patientId}`;
    const url = `${domain}/api/dummy/appointment/my-appointment/getAllAppointment${
      userData?.patientId ? patientId : ""
    }`;
    return this.getResponse(url, {}, "get");
  }

  getUpcomingAppointment() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = `/${userData?.patientId}`;
    const params = {
      currentDate: new moment().format("MM/DD/YYYY"),
      time: new moment().format("hh:mm"),
    };
    const url = `/ecp/appointments${
      userData?.patientId ? patientId : ""
    }/upcoming`;
    return this.getResponse(url, { params }, "get");
  }

  getPastAppointment() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = `/${userData?.patientId}`;
    const url = `/ecp/appointments${
      userData?.patientId ? patientId : ""
    }/history`;
    const params = {
      currentDate: new moment().format("MM/DD/YYYY"),
      time: new moment().format("hh:mm"),
      pageSize: 999,
      pageNo: 0,
    };
    return this.getResponse(url, { params }, "get");
  }

  getAppointmentDetails() {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/my-appointment/getAppointmentDetails`;
    return this.getResponse(url, {}, "get");
  }

  updateAppointment(postbody) {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/my-appointment/updateAppointment`;
    return this.getResponse(url, postbody, "post");
  }

  postForm(postbody, method) {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/review-details/postForm`;
    return this.getResponse(url, postbody, method);
  }

  getAllPrescriptions() {
    const domain = window.location.origin;
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = `?patientId=${userData?.patientId}`;
    const url = `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions${
      userData && userData.patientId ? patientId : ""
    }`;
    return this.getResponse(url, {}, "get");
  }

  cancelAppointment() {
    const domain = window.location.origin;
    const url = `${domain}api/dummy/appointment/my-appointment/cancelAppointment`;
    return this.getResponse(url, postbody, "post");
  }

  doMedicationRequestRefill(postBody) {
    const url = `/ecp/prescriptions/requestRefill`;
    return this.getResponse(url, postBody, "post");
  }

  doMedicationCancelRequestRefill(postBody) {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/prescription/cancelRequestRefill`;
    return this.getResponse(url, postBody, "post");
  }

  async getURLDigitalAsset(id) {
    const url = `/ecp/digital-asset/v1/asset/${id}`;
    try {
      const response = await this.getResponse(url, null, "get", false);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error({ error });
    }
  }

  async createURLDigitalAsset(file) {
    const url = `/ecp/digital-asset/v1/asset`;
    const splitted = file.type.split("/");
    const subType = splitted[0];
    const type = splitted[1];
    const postBody = {
      description: file.name,
      name: file.name,
      originalFileName: file.name,
      subType,
      type,
    };
    try {
      const response = await this.getResponse(url, postBody, "post");
      if (response) {
        return response;
      }
    } catch (error) {
      console.error({ error });
    }
  }

  getAppointmentTypes() {
    const url = "/ecp/appointments/appointment-types";
    return this.getResponse(url, {}, "get");
  }

  submitFilter(locationName, postBody) {
    const url = `/ecp/appointments/available-slot?searchText=${locationName}`;
    return this.getResponse(url, postBody, "put");
  }

  getPrescriptionMedication() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = `/${userData?.patientId}`;
    const url = `/ecp/prescriptions/patient${patientId}`;
    return this.getResponse(url, {}, "get");
  }

  getPrescriptionGlasses() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = `/${userData?.patientId}`;
    const url = `/ecp/prescriptions/patient${patientId}/getGlassesData`;
    return this.getResponse(url, {}, "get");
  }

  getPrescriptionContacts() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = `/${userData?.patientId}`;
    const url = `/ecp/prescriptions/patient${patientId}/getContactsData`;
    return this.getResponse(url, {}, "get");
  }

  async uploadFile(url, file) {
    try {
      const response = await axios({
        method: "put",
        url: url, //API url
        data: file, // Buffer
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        headers: {
          "Content-Type": "image/png",
        },
      });
      if (response.status === 200) return { success: true };
    } catch (error) {
      console.error({ error });
    }
  }

  getProviderList() {
    const url = `/ecp/appointments/getprovidelist/`;
    return Promise.resolve([
      {
        designation: "MBBS, MD",
        firstName: "Jaco",
        lastName: "David",
        nickName: "Jaco",
        employeeNumber: "755708",
        mi: "Jaco",
        dob: "02/07/1971",
        email: "eyecare@gmail.com",
        sex: {
          key: 11,
          name: "M",
          order: 1,
          notes: "",
        },
        available: true,
        note: "Test",
        age: "51",
        address: {
          addressLine1: "568 Allens Mill Rd",
          city: "Yorktown",
          state: "VA",
          zip: "23692",
        },
        homePhone: "4981261115",
        cellPhone: "2812942993",
        inHouse: false,
        providerDetails: {
          isProvider: true,
          isExternalProvider: false,
          materialRate: "0",
          drFirstCredentialDetails: {
            drFirstCredential: false,
            username: "",
            password: "",
            signature: "",
          },
          npi: "1134296023",
          professionalEq: "1234",
          opticalEq: "12",
          surgicalEq: "344",
          contactEq: "12346",
          provider: "",
          onlineProvider: true,
          license: [],
          deaIds: [],
          taxonomyCode: "207ND0101X",
          classification: "Dermatology",
          specialization: "MOHS-Micrographic Surgery",
          rating: 9,
          language1: "Arabic",
          language2: "Chinese",
          language3: "German",
          profilePhoto: {
            digitalAsset: {
              uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
              fileName: "test",
              assetUrl: "/v1/patient",
              _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
            },
          },
        },
        offices: [
          {
            name: "Ballwin",
            addressLine1: "568 Allens Mill Rd",
            city: "Yorktown",
            state: "VA",
            zip: "23692",
            _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
          },
          {
            name: "Edwardsville ",
            addressLine1: "700 12th St # A",
            city: "Bellingham",
            state: "WA",
            zip: "98225",
            _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
          },
        ],
        status: "UPDATED",
        managerialAdjustments: false,
        overrideExpiredPromo: false,
        sources: [],
        _links: {
          self: {
            href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
          },
        },
        _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
      },
      {
        designation: "MBBS, MD",
        firstName: "Jaco",
        lastName: "David",
        nickName: "Jaco",
        employeeNumber: "755708",
        mi: "Jaco",
        dob: "02/07/1971",
        email: "eyecare@gmail.com",
        sex: {
          key: 11,
          name: "M",
          order: 1,
          notes: "",
        },
        available: true,
        note: "Test",
        age: "51",
        address: {
          addressLine1: "568 Allens Mill Rd",
          city: "Yorktown",
          state: "VA",
          zip: "23692",
        },
        homePhone: "4981261115",
        cellPhone: "2812942993",
        inHouse: false,
        providerDetails: {
          isProvider: true,
          isExternalProvider: false,
          materialRate: "0",
          drFirstCredentialDetails: {
            drFirstCredential: false,
            username: "",
            password: "",
            signature: "",
          },
          npi: "1134296023",
          professionalEq: "1234",
          opticalEq: "12",
          surgicalEq: "344",
          contactEq: "12346",
          provider: "",
          onlineProvider: true,
          license: [],
          deaIds: [],
          taxonomyCode: "207ND0101X",
          classification: "Dermatology",
          specialization: "MOHS-Micrographic Surgery",
          rating: 9,
          language1: "Arabic",
          language2: "Chinese",
          language3: "German",
          profilePhoto: {
            digitalAsset: {
              uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
              fileName: "test",
              assetUrl: "/v1/patient",
              _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
            },
          },
        },
        offices: [
          {
            name: "Ballwin",
            addressLine1: "568 Allens Mill Rd",
            city: "Yorktown",
            state: "VA",
            zip: "23692",
            _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
          },
          {
            name: "Edwardsville ",
            addressLine1: "700 12th St # A",
            city: "Bellingham",
            state: "WA",
            zip: "98225",
            _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
          },
        ],
        status: "UPDATED",
        managerialAdjustments: false,
        overrideExpiredPromo: false,
        sources: [],
        _links: {
          self: {
            href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
          },
        },
        _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
      },
      {
        designation: "MBBS, MD",
        firstName: "Jaco",
        lastName: "David",
        nickName: "Jaco",
        employeeNumber: "755708",
        mi: "Jaco",
        dob: "02/07/1971",
        email: "eyecare@gmail.com",
        sex: {
          key: 11,
          name: "M",
          order: 1,
          notes: "",
        },
        available: true,
        note: "Test",
        age: "51",
        address: {
          addressLine1: "568 Allens Mill Rd",
          city: "Yorktown",
          state: "VA",
          zip: "23692",
        },
        homePhone: "4981261115",
        cellPhone: "2812942993",
        workPhone: "2812942993",
        inHouse: false,
        providerDetails: {
          isProvider: true,
          isExternalProvider: false,
          materialRate: "0",
          drFirstCredentialDetails: {
            drFirstCredential: false,
            username: "",
            password: "",
            signature: "",
          },
          npi: "1134296023",
          professionalEq: "1234",
          opticalEq: "12",
          surgicalEq: "344",
          contactEq: "12346",
          provider: "",
          onlineProvider: true,
          license: [],
          deaIds: [],
          taxonomyCode: "207ND0101X",
          classification: "Dermatology",
          specialization: "MOHS-Micrographic Surgery",
          rating: 9,
          language1: "Arabic",
          language2: "Chinese",
          language3: "German",
          profilePhoto: {
            digitalAsset: {
              uid: "1ffaf737-57ac-4660-8a32-f0650e2285ae",
              fileName: "test",
              assetUrl: "/v1/patient",
              _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
            },
          },
        },
        offices: [
          {
            name: "Ballwin",
            addressLine1: "568 Allens Mill Rd",
            city: "Yorktown",
            state: "VA",
            zip: "23692",
            _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
          },
          {
            name: "Edwardsville ",
            addressLine1: "700 12th St # A",
            city: "Bellingham",
            state: "WA",
            zip: "98225",
            _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
          },
        ],
        status: "UPDATED",
        managerialAdjustments: false,
        overrideExpiredPromo: false,
        sources: [],
        _links: {
          self: {
            href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
          },
        },
        _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
      },
    ]);
    // return this.getResponse(url, {}, "get");
  }
}
