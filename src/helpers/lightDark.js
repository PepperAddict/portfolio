import { createUseStyles } from "react-jss";
const textDarkGray = "#181818";
const textGold = "#DAA520";
const white = "white";
const black = "black";
const blue = "#008aff";
const darkURL = require("../img/bg/velvet.jpg");
const lightURL = require("../img/bg/flower-bg.jpg");

export const useStyles = createUseStyles({
  mainLight: {
    color: "#262626",
    '&::before': {
      backgroundImage: "url(" + lightURL + ")",
    }
  },
  mainDark: {
    color: "#f2f2f2",
    '&::before': {
      backgroundImage: "url(" + darkURL + ")",
    }
  },
  dark: {
    '& .project-container, & .art-gallery-container': {
      background: "radial-gradient(rgba(14, 14, 14, 0.9), rgba(14, 14, 14, 0.3))",
      '& .proj-image a': {
        background: "white",
        color: textDarkGray
      },
      '& button': {
        background: "radial-gradient(rgba(33, 33, 33, 0.9), rgba(33, 33, 33, 0.3))",
        border: "1px solid rgba(33, 33, 33, 0.9)",
        color: white
      }, 
      '& button:hover': {
        background: blue
      },
      '& .tags span': {
        background: white,
        color: textDarkGray
      },
      '& .tags span:hover': {
        background: blue,
        color: white
      }
    },
    '& .active-button': {
      background: black,
      color: white

    },
    '& h2': {
      color: "white",
    },
    '& h3': {
      color: "#DAA520"
    },

    '& ul': {
      borderColor: "rgba(255, 255, 255, 0.1)",
    },

    '& li:hover': {
        color: '#DAA520'
    },
  },
  light: {
    '& .project-container, & .art-gallery-container': {
      background: "radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
      '& .proj-image a': {
        background: "white",
        color: textDarkGray
      },
      '& .links-container a:hover': {

      },
      '& button': {
        background: "radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))",
        border: "1px solid rgba(255, 255, 255, 0.9)",
        color: textDarkGray
      }
      ,
      '& .tags span': {
        background: "white",
        color: textDarkGray
      },
      '& .tags span:hover': {
        background: blue,
        color: white
      }
    },
    '& .active-button': {
      background: white,
      color: "black",
      border: "1px solid #eeeeee"
    },
    '& h2': {      
      color: textDarkGray,
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
    },
    '& h3': {
      color: textGold,
      boxShadow: "0px 50px 130px rgba(255, 255, 255, 0.7)",
    },
    '& .skill-content': {
      background: "radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))",
      backdropFilter: "blur(10px)",
      boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.3)"
    },
    '& ul': {
      borderColor: "rgba(0, 0, 0, 0.1)"
    },
    '& li::before': {
        background: 'rgba(0, 0, 0, 0.2)',
        border: "1px solid rgba(0, 0, 0, 0.2)"
    },
    '& li:hover': {
        background: '#DAA520',
        color: 'white'
    },
    '& a': {
        color: 'black'
    }
  },
  linkDark: {
    backgroundImage: "linear-gradient(to top, #1e1e1e, #1c1c1c, #1a1a1a, #181818, #161616);",
    "& a": {
      color: "white",
    },
    "& a:hover": {
      color: "#DAA520",
    },
  },
  linkLight: {
    background: "white",
    "& a": {
      color: "#262626",
    },
    "& a:hover": {
      color: textGold
    },
  },
  indiDark: {
    border: "1px solid black",
    background: "rgba(0, 0, 0, 0.2)"
  }
});
