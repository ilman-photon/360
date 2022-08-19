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
    if (postbody.mfaCode === "1234" || postbody.mfaCode === "4321") {
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
    return Promise.resolve({
      responseCode: 1000,
      securityQuestionList: [
        "What was the first concert you attended?",
        "In what city or town did your parents meet?",
        "What was the make and model of your first car?",
        "Who is your all-time favorite movie character?",
        "What was your favorite cartoon character during your childhood?",
        "What was the first book you read?",
        "What was the first thing you learned to cook?",
        "What was the first film you saw in a theater?",
        "Where did you go the first time you flew on a plane?",
        "What is your favorite cold-weather activity?",
      ],
    });
  }

  submitSecurityQuestion() {
    return Promise.resolve({
      responseCode: 1000,
    });
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
