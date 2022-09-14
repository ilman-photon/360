import axios from "axios";
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
      timeout: 10000,
    });
  }

  getResponse(url, postbody, method) {
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
        if (
          err &&
          (err.code === constants.ERROR_CODE.BAD_REQUEST ||
            err.code === constants.ERROR_CODE.NETWORK_ERR)
        ) {
          store.dispatch(
            setGenericErrorMessage("Please try again after sometime.")
          );
          reject({
            description:
              "Something went wrong. Please try again after sometime.",
            ResponseCode: err.code,
          });
        } else if (err && err.response && err.response.data) {
          reject(err.response.data);
        } else {
          reject(err);
        }
      };

      switch (method) {
        case "get":
          return api.client.get(url, postbody).then(resolver).catch(rejecter);
        case "post":
          return api.client.post(url, postbody).then(resolver).catch(rejecter);
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

  validateGuestUser(postbody) {
    const url = "/ecp/patient/validate";
    return this.forgotFeatureValidation(url, postbody, "post");
  }

  validateUserName(postbody) {
    const url = "/ecp/patient/validate";
    return this.forgotFeatureValidation(url, postbody, "post");
  }

  resetPassword(postbody) {
    const url = "/ecp/patient/resetPassword";
    return this.forgotFeatureValidation(url, postbody, "post");
  }

  oneTimeLink(postbody) {
    const url = "/ecp/patient/onetimelink";
    return this.forgotFeatureValidation(url, postbody, "post");
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
    const url = "/ecp/patient/securityQuestions";
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
          label: record.fields.ste_name,
          value: record.fields.ste_name,
        };
      });
    } catch (error) {
      console.error({ error });
    }
  }

  getProviderDetails() {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/biography/getProviderDetails`;
    return this.getResponse(url, {}, "post");
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

  submitFilter(postBody) {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/create-appointment/submitFilter`;
    return this.getResponse(url, postBody, "post");
  }

  getAllAppointment() {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`;
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
    const url = `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`;
    return this.getResponse(url, {}, "get");
  }
}
