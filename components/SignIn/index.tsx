import React, { useState, useEffect } from "react";
import { Card, Box, Typography, CardContent } from "@material-ui/core";
import { TextField, Button, Collapse, IconButton } from "@material-ui/core";
import useStyle from "./styles";
import { useAuth } from "../../authentication";
import Link from "next/link";
import validator from "validator";
import CloseIcon from "@material-ui/icons/Close";
import { Alert } from "@material-ui/lab";
import { Color } from "@material-ui/lab/Alert/Alert";

const openAlertType: Color = "warning";

function SignIn() {
  const { userLogin, signInErrors, setSignInErrors }: any = useAuth();
  const classes = useStyle();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errEmail, setErrEmail] = useState({ isValid: false, message: "" });
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
    } else {
      setErrPassword({ isValid: false, message: "" });
    }
  };

  const onClickSubmit = () => {
    validateEmail();
    validatePassword();
    if (!errEmail.isValid && !errPassword.isValid && email && password) {
      resetAlert();
      userLogin(email, password);
    }
  };

  function AuthenticationErrors() {
    if (!signInErrors.isValid) return;
    setOpenAlert({
      open: true,
      message: signInErrors.message,
    });
  }

  useEffect(() => {
    AuthenticationErrors();
    return () => {
      setSignInErrors({ isValid: false, message: "" });
    };
  }, [signInErrors.isValid]);

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.innerDiv}>
          <Card>
            <CardContent>
              <Box>
                <Typography variant="h3">Login</Typography>
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
                  onBlur={validatePassword}
                  error={errPassword.isValid}
                  helperText={errPassword.message}
                  margin="normal"
                  variant="outlined"
                  label="Password"
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
                <Link href={"/signup"}>
                  <Typography variant="body1">Create Account</Typography>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}

export default SignIn;
