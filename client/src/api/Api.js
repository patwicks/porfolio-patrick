import axios from "axios"

const API = axios.create({
  baseURL: "https://dev-test-emailer.herokuapp.com/v1/api/send"
})

export default API