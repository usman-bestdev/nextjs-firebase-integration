import React, { useContext } from "react";
import { useProvideAuth } from "./auth-methods/firabase-auth";
type children = {
  children: JSX.Element | JSX.Element["props"];
};
const authContext = React.createContext({});
// Provider component that wraps your app and makes auth object ..
// ... available to any child component that calls useAuth().

export function AuthProvider({ children }: children) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.

export const useAuth = () => {
  return useContext(authContext);
};
