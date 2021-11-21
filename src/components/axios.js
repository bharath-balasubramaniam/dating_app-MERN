import axios from "axios";

const instance = axios.create({
  baseURL: "https://dating-mern-server.herokuapp.com",
});
export default instance;
