import axios from "axios";

const instance = axios.create({
  baseURL: "https://webdev-wes-backend.herokuapp.com",
  // baseURL: "http://localhost:8001",
});

export default instance;
