import React, { ReactNode, createContext } from "react";

interface Test {
  TestStr: string;
}
interface LoginDetails {
  isLoggedIn: boolean;
}
interface ContextTypeManger extends Test, LoginDetails {}

interface ContextTypeMangerProps {
  children: ReactNode; // Fix the typo here
}

const GlobalContext = createContext<ContextTypeManger | undefined>(undefined);

const GlobalContextProvider: React.FC<ContextTypeMangerProps> = ({ children }) => {
  const TestStr = "Hello";

  const isLoggedIn = localStorage.getItem('logInStatus_') ? true : false;

  return (
    <GlobalContext.Provider
      value={{
        TestStr,
        isLoggedIn
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
