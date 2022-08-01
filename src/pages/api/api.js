import axios from "axios";
export class Api {
  client;
  constructor(url) {
    this.client = axios.create({
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
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
          if (err && err.data) {
            reject(err.data);
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
}
