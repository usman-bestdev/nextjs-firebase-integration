import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../index";

type children = {
  children: JSX.Element;
};
// eslint-disable-next-line react/prop-types
const AuthPage = ({ children }: children) => {
  const { authUser }: any = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authUser) {
      router.push("/home").then((r) => r);
    }
  }, [authUser]);

  return authUser ? null : children;
};

export default AuthPage;
