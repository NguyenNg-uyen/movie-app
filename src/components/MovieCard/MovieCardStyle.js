import { makeStyles } from "@mui/styles";
import { globalStyle } from "../../scss/globalStyle";
export const useStyles = makeStyles({
  poster: {
    "& img": {
      borderRadius: "10px",
    },
    position: "relative",
    "&:hover": {
      "& $button_group": {
        opacity: 1,
      },
      "&::after": {
        opacity: 1,
      },
    },
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: 1,
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: globalStyle.overlay,
      opacity: 0,
      transition: "opacity 0.5s ease",
    },
  },
  button_group: {
    opacity: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "2",
    transform: "translate(-50%, -50%)",
    transition: "opacity 0.5s ease",
  },
  trailerModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
  caption: {
    color: globalStyle.yellow,
  },
  button_wrap: {
    "& button:hover": {
      background: "#20212b",
      color: "white",
    },
  },
  title: {
    color: "white",
  },
  date_release: {
    color: globalStyle.yellow,
  },
});
