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

  validateUserType(postbody) {
    const url = "/ecp/patient/getPatientType";
    return this.getResponse(url, postbody, "post", false);
  }

  sendLinkSync(postbody) {
    const url = "/ecp/communication/sendLink";
    return this.getResponse(url, postbody, "post");
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

  tokenValidation(postbody, webSource) {
    let url = "";
    switch (webSource) {
      case "oneTimeLink":
        url = "/ecp/patient/oneTimeLinkToken";
        break;
      case "reset":
        url = "/ecp/patient/resetPasswordToken";
        break;
      case "syncToken":
        url = "/ecp/communication/validateLink";
        break;
      default:
        url = "/ecp/patient/oneTimeLinkToken";
        break;
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

  syncTokenValidation(postbody) {
    return new Promise((resolve, reject) => {
      this.getResponse("/ecp/communication/validateLink", postbody, "post")
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

  createAppointment(postBody) {
    const url = `/ecp/appointments/savedetails`;
    return this.getResponse(url, postBody, "post");
  }

  cancelAppointment(id, postBody) {
    const url = `/ecp/appointments/cancel/${id}/stateTransition`;
    return this.getResponse(url, postBody, "put");
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

  getRegistrationSetPassword(postBody) {
    const url = "/ecp/patient/registrationsetpassword";
    return this.getResponse(url, postBody, "post");
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
}
