import axios from "axios";

const API = axios.create({
  baseURL: "https://dev-pat.herokuapp.com/v1/api/send",
  // baseURL: "http://localhost:3000/v1/api/send", //Local testing
});

export default API;
