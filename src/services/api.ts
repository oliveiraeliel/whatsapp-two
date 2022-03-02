import axios from "axios";
import { handleErrors } from "../helpers/errors";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(undefined, (error) =>
  handleErrors(error.response.status)
);

// api.interceptors.request.use((config)=> {
//   const token = localStorage.getItem('token');
//   config.headers.Authorization =  token ? ``;

//   return config;
// });