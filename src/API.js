import axios from "axios";

export const API_AUTH = axios.create({
  baseURL: "http://challenge-react.alkemy.org",
});

export const API = axios.create({
  baseURL: "https://superheroapi.com/api/10215933128600480",
});
