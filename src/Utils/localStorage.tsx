import { TUser } from "../interface/userContext";

export const setUserToLocalStorage = (user: TUser) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const data = localStorage.getItem("user");
  const user = data ? JSON.parse(data) : null;
  return user;
};
