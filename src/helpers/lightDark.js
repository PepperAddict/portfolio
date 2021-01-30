import { createUseStyles } from "react-jss";
const textDarkGray = "#181818";
const textGold = "#DAA520";
const lightGray = "#E2E2E2";
const midGray = '#3A3A3A'
const white = "white";
const black = "black";
const darkGray = '#242424'
const blue = "#008aff";
const darkURL = require("../img/bg/velvet.jpg");
const lightURL = require("../img/bg/flower-bg.jpg");

export const useStyles = createUseStyles({
  mainLight: {
    color: "#262626",
    "&::before": {
      backgroundImage: "url(" + lightURL + ")",
    },

    "& .top, .filter, .tags span, .proj-nav:before, .border": {
      borderColor: lightGray,
    },
    "& .act-button, .proj-image span, .bg ": {
      backgroundColor: white,
    },
    "& .shadow": {
      boxShadow: "0px 50px 130px rgba(255, 255, 255, 0.7)",
    },
    '& .color': {
      color: textDarkGray
    },
    '& .hoverbg:hover': {
      backgroundColor: blue,
      color: white
    },
    "& a": {
      color: "#262626",
    },
    "& a:hover": {
      color: textGold,
    },
    "& button": {
      background:
        "radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))",
      border: "1px solid rgba(255, 255, 255, 0.9)",
      color: textDarkGray,
    },
  },
  mainDark: {
    color: lightGray,
    "&::before": {
      backgroundImage: "url(" + darkURL + ")",
    },
    "& .top, .filter, .tags span, .proj-nav:before, .border": {
      borderColor: midGray,
    },
    "& .act-button, .proj-image span, .bg ": {
      backgroundColor: darkGray,
    },
    "& .shadow": {
      boxShadow: "0px 50px 130px rgba(255, 255, 255, 0.7)",
    },
    '& .color': {
      color: lightGray
    },
    '& .hoverbg:hover': {
      backgroundColor: blue,
      color: white
    },
    "& a": {
      color: lightGray,
    },
    "& a:hover": {
      color: textGold,
    },
    "& button": {
      background:
        "radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))",
      border: "1px solid rgba(255, 255, 255, 0.9)",
      color: lightGray,
    },

  },
  dark: {
    "& .web-container, & .art-gallery-container": {
      background:
        "radial-gradient(rgba(14, 14, 14, 0.9), rgba(14, 14, 14, 0.3))",
      "& .proj-image a": {
        background: "white",
        color: textDarkGray,
      },

    },

  },
  light: {
    background:
      "radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))",
    backdropFilter: "blur(10px)",
    "& .art-gallery-container": {
      background:
        "radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
      "& .proj-image a": {
        background: "white",
        color: textDarkGray,
      },

    },

  },

 


});
