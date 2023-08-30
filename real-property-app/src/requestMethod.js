import axios from "axios";

const NODE_MODE = process.env.REACT_APP_NODE_MODE;
const BASE_URL =
  NODE_MODE === "production"
    ? `${process.env.REACT_APP_API_URL}`
    : "http://localhost:5000";

export const request = axios.create({
  baseURL: BASE_URL,
});
