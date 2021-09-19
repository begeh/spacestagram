import axios from "axios";

const apiUrl = process.env.REACT_APP_NASA_ENDPOINT

/** Get 7 random NASA Images */
export const getImages = async () => {
  return axios
    .get(`${apiUrl}/planetary/apod`, {
      params: { api_key: process.env.REACT_APP_NASA_API_KEY, count: 7 },
    })
    .then((res) => res)
    .catch((err) => err);
};
