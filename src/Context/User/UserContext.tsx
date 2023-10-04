import { createContext, useContext, useState } from "react";
import {
  TUser,
  TUserContext,
  TUserContextProps,
  TUserRegistration,
  TUserUpdate,
  TuserLogin,
} from "../../interface/userContext";
import customFetch from "../../Utils/axios";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserToLocalStorage,
} from "../../Utils/localStorage";
import { toast } from "react-toastify";

export const UserContext = createContext({} as TUserContext);

export const UserProvider = ({ children }: TUserContextProps) => {
  const [user, setUser] = useState<TUser | null>(getUserFromLocalStorage());
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const registerUser = async (registerData: TUserRegistration) => {
    try {
      setIsLoading(true);
      const response = await customFetch.post("/auth/register", registerData);
      console.log(response);
      const user = response.data.user;
      setUser(user);
      setUserToLocalStorage(user);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const loginUser = async (loginData: TuserLogin) => {
    try {
      setIsLoading(true);
      const response = await customFetch.post("/auth/login", loginData);
      console.log(response);
      const user = response.data.user;
      setUser(user);
      setUserToLocalStorage(user);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const updateUser = async (updateData: TUserUpdate) => {
    try {
      setIsLoading(true);
      const token = user?.token;
      const response = await customFetch.patch("/auth/updateUser", updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      const updatedUser = response.data.user;
      setUser(user);
      setUserToLocalStorage(updatedUser);
      setIsLoading(false);
    } catch (error: any) {
      toast.error(error.response.data);
      checkForUnauthorizedResponde(error);
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    setUser(null);
    removeUserFromLocalStorage();
  };

  const checkForUnauthorizedResponde = (error: any) => {
    if (error.response.status === 401) {
      logoutUser();
      toast.error("Erro de autorização, deslogando...");
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        registerUser,
        setUser,
        loginUser,
        isSidebarOpen,
        toggleSidebar,
        logoutUser,
        updateUser,
        checkForUnauthorizedResponde,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
