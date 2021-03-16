import axios from "axios";

export default class Servicios {
  url = "https://crud-api-nodejs.herokuapp.com";

  getAll() {
    return axios.get(this.url, {
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
