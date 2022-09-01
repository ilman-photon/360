import axios from "axios";
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
        if (err && err.response && err.response.data) {
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

  getProviderDetails() {
    const url = "/api/dummy/apppointment/biography/getProviderDetails";
    return this.getResponse(url, {}, "post");
  }

  getProviderAvailibility() {
    const url =
      "/api/dummy/apppointment/create-appointment/getProviderAvailibility";
    return this.getResponse(url, {}, "post");
  }

  getSugestion() {
    const url = "/api/dummy/apppointment/create-appointment/getSugestion";
    return this.getResponse(url, {}, "post");
  }

  submitFilter() {
    const url = "/api/dummy/apppointment/create-appointment/submitFilter";
    return this.getResponse(url, {}, "post");
  }

  getAllAppointment() {
    const url = "/api/dummy/apppointment/my-appointment/getAllAppointment";
    return this.getResponse(url, {}, "post");
  }

  updateAppointment(postbody) {
    const url = "/api/dummy/apppointment/my-appointment/updateAppointment";
    return this.getResponse(url, postbody, "post");
  }

  postForm(postbody, method) {
    const url = "/api/dummy/apppointment/review-details/postForm";
    return this.getResponse(url, postbody, method);
  }
}
