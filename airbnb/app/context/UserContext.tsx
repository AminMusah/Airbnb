"use client";

import { createContext, useState, useEffect } from "react";

interface UserContextProps {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

export const UserContext = createContext<UserContextProps>({
  isAuth: false,
  setIsAuth: () => {},
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const storedValue = localStorage.getItem("isAuth");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [isAuth]);

  return (
    <UserContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
