import axios from "axios";

export const getNASAImageData = async () => {
  return axios
    .get(`https://api.nasa.gov/planetary/apod`, {
      params: { api_key: process.env.REACT_APP_NASA_API_KEY },
    })
    .then((res) => res);
};
