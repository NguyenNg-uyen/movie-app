import { makeStyles } from "@mui/styles";
import { globalStyle } from "../../scss/globalStyle";
export const useStyles = makeStyles({
  movie_container: {
    padding: "9rem 0",
    width: "100%",
    height: "100vh",
    position: "relative",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "&::after": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: globalStyle.overlay,
    },
  },
  movie_content: {
    position: "relative",
    left: "5%",
    top: "25%",
    zIndex: "5",
    textAlign: "left",
    width: "50%",

    "& h4": {
      color: globalStyle.yellow,
      fontWeight: "700",
      fontSize: "27px",
    },

    "& h2": {
      fontWeight: "700",
    },
  },
  movie_describe: {
    "& svg": {
      color: globalStyle.yellow,
    },
  },
  trailerModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
});
