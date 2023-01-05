import React, { useState, useEffect } from "react";
import { Card, Box, Typography, CardContent } from "@material-ui/core";
import { TextField, Button, Collapse, IconButton } from "@material-ui/core";
import useStyle from "./styles";
import { useAuth } from "../../authentication";
import Link from "next/link";
import validator from "validator";
import { Color } from "@material-ui/lab/Alert/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";

const openAlertType: Color = "warning";

function SignUp() {
  const { userSignUp, signUpErrors, setSignUpErrors }: any = useAuth();
  const classes = useStyle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errEmail, setErrEmail] = useState({ isValid: false, message: "" });
  const [errUsername, setErrUsername] = useState({
    isValid: false,
    message: "",
  });
  const [errPassword, setErrPassword] = useState({
    isValid: false,
    message: "",
  });

  const [openAlert, setOpenAlert] = useState({
    open: false,
    message: "",
  });

  const resetAlert = () => {
    setOpenAlert({ open: false, message: "" });
  };

  function onClickSubmit() {
    validateEmail();
    validatePassword();
    validateUsername();
    if (
      email &&
      password &&
      username &&
      !errEmail.isValid &&
      !errPassword.isValid &&
      !errUsername.isValid
    ) {
      userSignUp(username, email, password);
    }
  }

  const validateEmail = () => {
    if (!email) {
      setErrEmail({ isValid: true, message: "Email Required" });
    } else if (validator.isEmail(email) === false) {
      setErrEmail({ isValid: true, message: "Invalid Email" });
    } else {
      setErrEmail({ isValid: false, message: "" });
    }
  };

  const validatePassword = () => {
    if (!password) {
      setErrPassword({ isValid: true, message: "Password Required" });
    } else if (password.length < 6) {
      setErrPassword({ isValid: true, message: "Minimum 6 Characters" });
    } else {
      setErrPassword({ isValid: false, message: "" });
    }
  };

  const validateUsername = () => {
    if (!username) {
      setErrUsername({ isValid: true, message: "Username Required" });
    } else if (username.length < 3) {
      setErrUsername({ isValid: true, message: "Minimum 3 Characters" });
    } else {
      setErrUsername({ isValid: false, message: "" });
    }
  };

  function authenticationErrors() {
    if (!signUpErrors.isValid) return;
    setOpenAlert({
      open: true,
      message: signUpErrors.message,
    });
  }
  useEffect(() => {
    authenticationErrors();
    return () => {
      setSignUpErrors({ isValid: false, message: "" });
    };
  }, [signUpErrors.isValid]);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.innerDiv}>
          <Card>
            <CardContent>
              <Box>
                <Typography variant="h2">Create an account</Typography>
              </Box>
              <Box>
                <Collapse in={openAlert.open}>
                  <Alert
                    variant="outlined"
                    severity={openAlertType}
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          resetAlert();
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    {openAlert.message}
                  </Alert>
                </Collapse>
              </Box>
              <Box>
                <TextField
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Username"
                  onBlur={validateUsername}
                  error={errUsername.isValid}
                  helperText={errUsername.message}
                />
              </Box>
              <Box>
                <TextField
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Email"
                  onBlur={validateEmail}
                  error={errEmail.isValid}
                  helperText={errEmail.message}
                />
              </Box>
              <Box>
                <TextField
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  label="Password"
                  onBlur={validatePassword}
                  error={errPassword.isValid}
                  helperText={errPassword.message}
                />
              </Box>
              <Box className={classes.submitButton}>
                <Button
                  onClick={onClickSubmit}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  submit
                </Button>
              </Box>
              <Box className={classes.link}>
                <Link href={"/"}>
                  <Typography variant="body1">Sign In</Typography>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default SignUp;
