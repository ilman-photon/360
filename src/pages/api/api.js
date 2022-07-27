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
        .post(url,postbody)
        .then(function (response) {
            if (response && response.status === 200) {
              const cookies = new Cookies();
              cookies.remove("authorized", "true", { path: "/" });
              resolve(response.message);
            }else{
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
      api.client
        .post(url, postbody)
        .then(function (response) {
          if (response && response.status === 200) {
            const cookies = new Cookies();
            cookies.set("authorized", "true", { path: "/" });
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
