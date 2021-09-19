import axios from "axios";

// Get NASA Astronomy Picture of The Day
export const getAPOD = async () => {
  return axios
    .get(`https://api.nasa.gov/planetary/apod`, {
      params: { api_key: process.env.REACT_APP_NASA_API_KEY },
    })
    .then((res) => res);
};
