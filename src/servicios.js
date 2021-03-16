import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default class Servicios {
  url = "https://crud-api-nodejs.herokuapp.com";

  getAll() {
    return axiosInstance.get(this.url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
