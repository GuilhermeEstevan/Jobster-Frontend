export type TUser = {
  local: string;
  email: string;
  name: string;
  lastName: string;
  token: string;
};

export type TUserContext = {
  user: TUser | null;
  isLoading: boolean;
  registerUser: (registerData: TUserRegistration) => void;
  setUser: React.Dispatch<React.SetStateAction<TUser | null>>;
  loginUser: (loginData: TuserLogin) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  logoutUser: () => void;
  updateUser: (updateData: TUserUpdate) => void;
  checkForUnauthorizedResponde: (error: any) => boolean;
};

export type TUserContextProps = {
  children: React.ReactNode;
};

export type TUserRegistration = {
  name: string;
  email: string;
  password: string;
};

export type TuserLogin = {
  email: string;
  password: string;
};

export type TUserUpdate = {
  local: string;
  email: string;
  name: string;
  lastName: string;
};
