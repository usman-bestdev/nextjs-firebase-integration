import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../index";

type children = {
  children: JSX.Element | JSX.Element["props"];
};
// eslint-disable-next-line react/prop-types
const SecurePage = ({ children }: children) => {
  const { authUser }: any = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authUser) {
      router.push("/").then((r) => r);
    }
  }, [authUser]);

  return authUser ? children : null;
};

export default SecurePage;
