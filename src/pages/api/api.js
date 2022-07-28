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

  logout(postbody) {
    const api = new Api();
    const url = "https://patientlogout.mocklab.io/ecp/patient/logout";
    return new Promise((resolve, reject) => {
      api.client
        .post(url, postbody)
        .then(function (response) {
          if (response && response.status === 200) {
            resolve(response.response);
          } else {
            reject(response);
          }
        })
        .catch(function (err) {
          reject(err.response);
        });
    });
  }

  login(postbody) {
    const api = new Api();
    const url = "https://patientlogin.mocklab.io/ecp/patient/login";
    return new Promise((resolve, reject) => {
      //start mock
      const username = postbody.username
      if (username === "accountSuccess@mail.com") {
        resolve({
          "ResponseCode": 2000,
          "ResponseType": "success",
          "userType": "patient"
        })
      } else if (username === "accountFailed@mail.com") {
        reject({
          "ResponseCode": 2001,
          "ResponseType": "failure",
          "message": "Invalid Username or Password"
        })
      } else if (username === "accountLocked@mail.com") {
        reject({
          "ResponseCode": 2004, 
          "ResponseType": "failure",
          "message": "Too many login attempts. Your account is locked. Please contact customer support to unlock your account"
        })
      } else {
        //end mock
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
      }//end mock
    });
  }
}
