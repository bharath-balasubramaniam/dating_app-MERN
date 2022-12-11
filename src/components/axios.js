import axios from "axios";

const instance = axios.create({
  baseURL: "https://dating-app-mern.onrender.com",
});
export default instance;
