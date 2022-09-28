import axios from "axios";
import { setGenericErrorMessage } from "../../store";
import { fetchUser } from "../../store/user";
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

    this.requestCounter = 0;
    this.maxRequestCounter = 3;
  }

  getResponse(url, postbody, method, token) {
    if (token) {
      this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return new Promise((resolve, reject) => {
      const resolver = function (response) {
        if (response && response.data) {
          resolve(response.data);
        } else {
          reject(response);
        }
      };
      const rejecter = async (err) => {
        if (
          err &&
          ((err.code === constants.ERROR_CODE.BAD_REQUEST &&
            err?.response?.data?.ResponseCode === undefined) ||
            err.code === constants.ERROR_CODE.NETWORK_ERR)
        ) {
          const errors = err?.response?.data?._errors; // error from e360+ API
          if (errors && errors[0]) {
            // error jwt not found in header / expired
            if (errors[0].code === "B4988908-5081-48CF-9B95-CA67E3FA87F0") {
              this.requestCounter++;
              if (this.requestCounter < this.maxRequestCounter) {
                const tokenResponse = await this.getToken();
                // TODO: call failed function
                // was this, but realize that this only do fetchUser F.
                // await store.dispatch(
                //   fetchUser(tokenResponse?.data?.access_token)
                // );
                // reject(tokenResponse)

                // dont delete, maybe insight
                // await store.dispatch(
                //   [callbackAction]({...callbackPayload, token: tokenResponse?.data?.access_token})
                // );
              } else {
                // TODO: Duplicate with below else
                this.requestCounter = 0;

                store.dispatch(
                  setGenericErrorMessage("Please try again after sometime.")
                );

                reject({
                  description:
                    "Something went wrong. Please try again after sometime.",
                  ResponseCode: err.code,
                  ResponseData: err.response.data,
                });
              }
            } else {
              const errorMessagee = errors[0].description;
              store.dispatch(setGenericErrorMessage(errorMessagee));
              reject({
                description: errorMessagee,
                ResponseCode: err.code,
                ResponseData: err.response._errors,
              });
            }
          } else {
            this.requestCounter = 0;

            store.dispatch(
              setGenericErrorMessage("Please try again after sometime.")
            );

            reject({
              description:
                "Something went wrong. Please try again after sometime.",
              ResponseCode: err.code,
              ResponseData: err.response.data,
            });
          }
        } else if (err && err.response && err.response.data) {
          reject(err.response.data);
        } else {
          reject(err);
        }
      };

      switch (method) {
        case "get":
          return this.client.get(url, postbody).then(resolver).catch(rejecter);
        case "post":
          return this.client.post(url, postbody).then(resolver).catch(rejecter);
        case "put":
          return this.client.put(url, postbody).then(resolver).catch(rejecter);
        default:
          return this.client.get(url, postbody).then(resolver).catch(rejecter);
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
      console.log();
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
    const userData = JSON.parse(localStorage.getItem("userData"));
    const patientId = `/${userData.patientId}`;
    const url = `${domain}/api/dummy/appointment/my-appointment/getAllAppointment${
      userData.patientId ? patientId : ""
    }`;
    return this.getResponse(url, {}, "get");
  }

  getAppointmentDetails() {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/my-appointment/getAppointmentDetails`;
    return this.getResponse(url, {}, "get");
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
    const url = `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`;
    return this.getResponse(url, {}, "get");
  }

  cancelAppointment() {
    const domain = window.location.origin;
    const url = `${domain}api/dummy/appointment/my-appointment/cancelAppointment`;
    return this.getResponse(url, postbody, "post");
  }

  // async getPayers(accessToken) {
  //   const url = '/ecp/appointment/insurance/allpayers'
  //   try {
  //     const response = await this.getResponse(url, null, "get", accessToken)
  //     console.log("getpayer response", response)
  //     return {
  //       success: true,
  //       response
  //     }
  //   } catch (error) {
  //     console.log("getpayer error", error)
  //     return {
  //       success: false,
  //       error
  //     }
  //   }
  // }

  doMedicationRequestRefill(postBody) {
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/prescription/requestRefill`;
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
      const response = await this.getResponse(url, null, "get");
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
      // console.log("upload response", {response})
      if (response.status === 200) return { success: true };
    } catch (error) {
      console.error({ error });
    }
  }
}
