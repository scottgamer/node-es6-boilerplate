import * as jsonPlaceholderService from "../services/jsonPlaceholderService";

export const getUsers = async () => {
  const users = await jsonPlaceholderService.getUsers();
  return users.data;
};
