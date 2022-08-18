import axios from "axios";
export class Api {
  getResponse(url, postbody, method) {
    return new Promise((resolve, reject) => {
      const client = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        timeout: 10000,
      });
      if (client[method]) {
        client[method](url, postbody)
          .then(function (response) {
            if (response && response.data) {
              resolve(response.data);
            } else {
              reject(response);
            }
          })
          .catch(function (err) {
            if (err && err.response && err.response.data) {
              reject(err.response.data);
            } else {
              reject(err);
            }
          });
      } else {
        reject(new Error("Error http request method"));
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

  getCommunicationMethod(postbody) {
    return new Promise((resolve) => {
      if (postbody === "9876543210") {
        resolve({
          phone: "(8***)***-***31",
        });
      } else {
        resolve({
          email: "m********@yahoo.com",
          phone: "(8***)***-***31",
        });
      }
    });
  }

  requestNewCode() {
    return Promise.resolve("4321");
  }

  requestCode() {
    return Promise.resolve("1234");
  }

  setRemeberMe() {
    return Promise.resolve("success");
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
}
