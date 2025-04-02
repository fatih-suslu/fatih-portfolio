import axios from "axios";

export const createApiInstance = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://reqres.in/api/workintech",
    headers: {
      Authorization: token,
    },
  });
};

export let API = createApiInstance();
