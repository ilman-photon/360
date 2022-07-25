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
}
