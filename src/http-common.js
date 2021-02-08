import axios from "axios";

export default axios.create({
  baseURL: window.location.host.includes("localhost")
    ? "http://localhost:8080/api"
    : "/api",
  headers: {
    "Content-type": "application/json"
  }
});
