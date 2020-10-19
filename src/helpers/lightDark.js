import { createUseStyles } from "react-jss";
export const useStyles = createUseStyles({
  dark: {
    '& h2': {
      color: "white",
    },
    '& h3': {
      color: "#DAA520"
    },

    '& ul': {
        borderLeft: "1px solid rgba(255, 255, 255, 0.1)"
    },

    '& li:hover': {
        color: '#DAA520'
    },
    '& a': {
        color: 'white'
    },
  },
  light: {
    '& .project-container': {
      background: "radial-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3))"
    },
    '& h2': {      
      color: "black",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
    },
    '& h3': {
      color: "#DAA520",
      boxShadow: "0px 50px 130px rgba(255, 255, 255, 0.7)",
    },
    '& .skill-content': {
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.3)"
    },
    '& ul': {

        borderLeft: "1px solid rgba(0, 0, 0, 0.1)"
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
    background: "",
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
      color: "white"
    },
  },
  indiDark: {
    border: "1px solid black",
    background: "rgba(0, 0, 0, 0.2)"
  }
});
