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

  forgotpassword(postbody) {
    const api = new Api();
    const url =
      "http://a82a5fdbdd77040d6b7a58563b3620f8-1670930037.us-east-1.elb.amazonaws.com/ecp/provider/forgot-password";
    return new Promise((resolve, reject) => {
      //start mock
      // const userName = postbody.userName
      // if (userName === "smith1@photon.com") {
      //   resolve({
      //     "responseCode": 1000,
      //     "reponseType": "success",
      //     "email": "smith1@photon.com",
      //     "userType": "internalStaff",
      //     "message": "Please check your email to reset your password"
      //   })
      // } else if (userName === "smith4@photon.com") {
      //   resolve({
      //     "responseCode": 1001,
      //     "reponseType": "success",
      //     "email": "smith4@photon.com",
      //     "userType": "referringProvider",
      //     "message": "A link has been sent to your registered email to reset your password. Please Check"
      //   })
      // } else if (userName === "smith7@photon.com") {
      //   reject({
      //     "responseCode": 2000,
      //     "reponseType": "failure",
      //     "email": "smith7@photon.com",
      //     "message": "Incorrect Username or Email.Please Try Again"
      //   })
      // } else {
      //   //end mock
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
