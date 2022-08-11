import axios from "axios";
export class Api {
  client;
  constructor(url) {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 10000,
    });
  }

  dummy(url, postbody) {
    return axios.create({
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });
  }

  getResponse(url, postbody) {
    const api = new Api();
    return new Promise((resolve, reject) => {
      api.client
        .post(url, postbody)
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
    });
  }

  logout(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/patient/logout";
    return new Promise((resolve, reject) => {
      api
        .getResponse(url, postbody)
        .then(function (data) {
          const responseCode = data.ResponseCode;
          const responseType = data.ResponseType;
          if (responseCode === 2005 && responseType === "success") {
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

  login(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/patient/login";
    return new Promise((resolve, reject) => {
      api
        .getResponse(url, postbody)
        .then(function (data) {
          const responseCode = data.ResponseCode;
          const responseType = data.ResponseType;
          if (responseCode === 2000 && responseType === "success") {
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

  validateUserName(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/patient/validate";
    return new Promise((resolve, reject) => {
      api
        .getResponse(url, postbody)
        .then(function (data) {
          const responseCode = data.ResponseCode;
          const responseType = data.ResponseType;
          if (responseCode === 1000 && responseType === "success") {
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

  resetPassword(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/patient/resetPassword";
    return new Promise((resolve, reject) => {
      api
        .getResponse(url, postbody)
        .then(function (data) {
          const responseCode = data.ResponseCode;
          const responseType = data.ResponseType;
          if (responseCode === 1000 && responseType === "success") {
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

  oneTimeLink(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/patient/onetimelink";
    return new Promise((resolve, reject) => {
      api
        .getResponse(url, postbody)
        .then(function (data) {
          const responseCode = data.ResponseCode;
          const responseType = data.ResponseType;
          if (responseCode === 1000 && responseType === "success") {
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

  updatePassword(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/patient/updatepassword";
    return new Promise((resolve, reject) => {
      api
        .getResponse(url, postbody)
        .then(function (data) {
          const responseCode = data.ResponseCode;
          const responseType = data.ResponseType;
          if (responseCode === 1000 && responseType === "success") {
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

  oneTimeLinkValidation(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/patient/oneTimeLinkToken";
    return new Promise((resolve, reject) => {
      api
        .getResponse(url, postbody)
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

  resetPasswordValidation(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/patient/resetPasswordToken";
    return new Promise((resolve, reject) => {
      api
        .getResponse(url, postbody)
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

  providerForgotPassword(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/provider/forgot-password";
    return new Promise((resolve, reject) => {
      api.client
        .post(url, postbody)
        .then(function (response) {
          if (response && response.status === 200) {
            resolve(response.response);
          } else {
            reject(response.response);
          }
        })
        .catch(function (err) {
          reject(err.response);
        });
    });
  }
}
