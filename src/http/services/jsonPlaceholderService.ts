import axios from "axios";

export const getUsers = async () => {
  const url = process.env.JSON_PLACEHOLDER_ULR;
  const response = await axios.get(`${url}/users`);
  return response;
};
