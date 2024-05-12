import axios from "axios";

export const getAllCountryData = () => {
  return axios.get("https://restcountries.com/v3.1/all");
};
