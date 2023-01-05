import { PaletteType } from "@material-ui/core/index.d";
import { Direction } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { Fonts } from "../constants/ThemeOptions";

const pageDirection: Direction = "ltr";
const paletteType: PaletteType = "light";

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
});

const defaultTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 4,
  direction: pageDirection,
  palette: {
    type: paletteType,
    common: {
      black: "#000",
      white: "#fff",
      dark: "#020202",
    },
    primary: {
      main: "rgb(0, 44, 155)",
      dark: "#2853bf",
      contrastText: "#fff",
    },
    sidebar: {
      bgColor: "#fff",
      textColor: "rgba(0, 0, 0, 0.6)",
      textDarkColor: "rgba(0, 0, 0, 0.87)",
      textActiveColor: "#6200EE",
      navHoverBgColor: "rgb(229, 229, 229)",
      navActiveBgColor: "rgb(239, 229, 253)",
      borderColor: "rgba(33, 33, 33, 0.08)",
    },
    horizontalNav: {
      navigationColor: "rgba(255, 255, 255, 0.74)",
      navigationActiveColor: "rgba(255, 255, 255, 1)",
      textColor: "rgba(0, 0, 0, 0.6)",
      textDarkColor: "rgba(0, 0, 0, 0.87)",
      textActiveColor: "#6200EE",
      menuHoverBgColor: "rgb(229, 229, 229)",
      menuActiveBgColor: "rgb(239, 229, 253)",
    },
    background: {
      paper: "#FFFFFF",
      default: "#f4f4f7",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.3)",
      white: "#fff",
    },
    btn: {
      hover: "rgba(0, 0, 0, 0.08)",
    },
    lightBtn: {
      bgColor: "#f5f5f5",
      textColor: "rgba(0, 0, 0, 0.38)",
    },
    borderColor: {
      main: "rgba(0, 0, 0, 0.06)",
      dark: "rgba(0, 0, 0, 0.12)",
    },
    popupColor: {
      main: "#fff",
    },
  },
  status: {
    danger: "orange",
  },
  typography: {
    fontFamily: Fonts.PRIMARY,
    fontWeightExtraLight: 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontWeightExtraBold: 800,
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: 44,
        fontWeight: 900,
        [breakpoints.up("md")]: {
          fontSize: 48,
        },
      },
      h2: {
        fontSize: 18,
        fontWeight: 700,
        [breakpoints.up("md")]: {
          fontSize: 20,
        },
      },
      h3: {
        fontSize: 16,
        fontWeight: 700,
        [breakpoints.up("md")]: {
          fontSize: 18,
        },
      },
      h4: {
        fontSize: 16,
        fontWeight: 700,
      },
      h5: {
        fontSize: 14,
        fontWeight: 400,
      },
      h6: {
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 0.5,
      },
      subtitle1: {
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: 0.15,
      },
      subtitle2: {
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.1,
      },
      body1: {
        fontSize: 16,
        fontWeight: 400,
        letterSpacing: 0.5,
      },
      body2: {
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: 0.25,
      },
    },
    MuiButton: {
      root: {
        fontWeight: 700,
        letterSpacing: 1.25,
        fontSize: 13,
      },
    },
    MuiToggleButton: {
      root: {
        borderRadius: 4,
      },
    },
    MuiCardLg: {
      root: {
        borderRadius: 10,
      },
    },
    MuiCard: {
      root: {
        borderRadius: 4,
        boxShadow:
          "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)",
      },
    },
    MuiTab: {
      textColorPrimary: {
        color: "rgba(0, 0, 0, 0.87)",
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: "#FFFFFF",
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: "#FFFFFF",
      },
    },
  },
};
export default defaultTheme;
