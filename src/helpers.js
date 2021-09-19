import axios from "axios";

const apiUrl = process.env.REACT_APP_NASA_ENDPOINT

/** Get NASA Astronomy Picture of The Day */
export const getPicOfTheDay = async () => {
  return axios
    .get(`${apiUrl}/planetary/apod`, {
      params: { api_key: process.env.REACT_APP_NASA_API_KEY },
    })
    .then((res) => res)
    .catch((err) => err);
};
