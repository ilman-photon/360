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

  getToken() {
    const request = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      timeout: 10000,
    });

    const params = new URLSearchParams(); // x-www-form-urlencoded
    params.append("grant_type", "password");
    params.append("client_id", "master-realm");
    params.append("client_secret", "dd766bf5-fa6e-470d-a13f-8d357bf6ee71");
    params.append("username", "test.photon");
    params.append("password", "Password@1");

    try {
      return request.post("/ecp/gettoken", params);
    } catch (err) {
      csoneol.log(err);
      return err.response.data;
    }
  }

  // this somehow doesn't work ??
  setAuthorizationHeader(payload) {
    this.client.defaults.headers.common["Authorization"] = payload;
  }

  getResponse(url, postbody, method, token) {
    if (token) {
      this.client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return new Promise(async (resolve, reject) => {
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
          return this.client.get(url).then(resolver).catch(rejecter);
        case "post":
          return this.client.post(url, postbody).then(resolver).catch(rejecter);
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
    return new Promise((resolve) => {
      if (postbody.username === "9876543210") {
        resolve({
          communicationMethod: {
            phone: "(8***)***-***31",
          },
          mfaAccessToken: "12345678",
          ResponseCode: 4000,
          ResponseType: "success",
          ip,
        });
      } else {
        resolve({
          communicationMethod: {
            email: "u*******@mail.com",
            phone: "(8***)***-***31",
          },
          ResponseCode: 4000,
          ResponseType: "success",
        });
      }
    });
  }

  resendMfaCode(postbody) {
    if (postbody !== "error") {
      return Promise.resolve({
        ResponseCode: 4000,
        ResponseType: "success",
      });
    } else {
      return Promise.reject({
        ResponseCode: 4001,
        ResponseType: "failed",
      });
    }
  }

  sendMfaCode() {
    return Promise.resolve({
      ResponseCode: 4000,
      ResponseType: "success",
    });
  }

  submitMfaCode(postbody) {
    if (postbody.mfaCode === "123456" || postbody.mfaCode === "654321") {
      if (postbody.rememberMe) {
        return Promise.resolve({
          ResponseCode: 4000,
          ResponseType: "success",
          mfaAccessToken: "12345678",
        });
      } else {
        return Promise.resolve({
          ResponseCode: 4000,
          ResponseType: "success",
        });
      }
    } else if (postbody.mfaCode === "lock") {
      return Promise.reject({
        ResponseCode: 4003,
        ResponseType: "failed",
      });
    } else {
      return Promise.reject({
        ResponseCode: 4002,
        ResponseType: "failed",
      });
    }
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
}
