import type { AppProps } from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";
import "../styles/globals.css";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import { useMemo } from "react";
import DefaultTheme from "../theme/defaultTheme";
import { AuthProvider } from "../authentication";
import CssBaseline from "@material-ui/core/CssBaseline";

function MyApp({ Component, pageProps }: AppProps) {
  const muiTheme = useMemo(() => {
    return createTheme(DefaultTheme);
  }, [DefaultTheme]);
  return (
    <>
      <Head>
        <title>firebase integration</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AuthProvider>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </AuthProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
