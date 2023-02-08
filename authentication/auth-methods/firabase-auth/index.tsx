import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { StringConstants } from "../../../components/StringConstants";
import auth from "./config";

export const useProvideAuth = () => {
  const [signInErrors, setSignInErrors] = useState({
    isValid: false,
    message: "",
  });
  const [signUpErrors, setSignUpErrors] = useState({
    isValid: false,
    message: "",
  });
  const [forgotPasswordErrors, setForgotPasswordErrors] = useState({
    isValid: false,
    message: "",
  });

  const router = useRouter();
  const [authUser, setAuthUser] = useState(false);
  const [resetPasswordEmail, setResetPasswordEmail] = useState(false);
  const [loading, setLoading] = useState(true);

  const userLogin = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        setAuthUser(true);
      })
      .catch(async (error) => {
        const message = await getFirebaseErrorMessage(error.message);
        setSignInErrors({
          isValid: true,
          message,
        });
      });
  };

  const userSignUp = async (
    username: string,
    email: string,
    password: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        setAuthUser(true);
      })
      .catch(async (error) => {
        const message = await getFirebaseErrorMessage(error.message);
        setSignUpErrors({
          isValid: true,
          message,
        });
      });
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  async function getFirebaseErrorMessage(firebaseError: string) {
    let message;
    if (firebaseError === "Firebase: Error (auth/wrong-password).") {
      message = StringConstants.INVALID_PASSWORD;
    } else if (firebaseError === "Firebase: Error (auth/user-not-found).") {
      message = StringConstants.INVALID_EMAIL;
    } else if (firebaseError === "Firebase: Error (auth/too-many-requests).") {
      message = StringConstants.RESET_PASSWORD_LIMIT;
    } else {
      message = firebaseError;
    }
    return message;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(true);
      } else {
        setAuthUser(false);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    authUser,
    setAuthUser,
    userLogin,
    userSignUp,
    userSignOut,
    signInErrors,
    signUpErrors,
    setSignUpErrors,
    setSignInErrors,
    forgotPasswordErrors,
    setForgotPasswordErrors,
    setResetPasswordEmail,
    resetPasswordEmail,
    loading,
  };
};
