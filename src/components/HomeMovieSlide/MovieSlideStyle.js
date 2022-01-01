import { makeStyles } from "@mui/styles";
import { globalStyle } from "../../scss/globalStyle";
export const useStyles = makeStyles({
  movie_container: {
    padding: "9rem 0",
    width: "100%",
    height: "100vh",
    backgroundSize: "100%",
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
    top: "30%",
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
    "& svg": {
      color: globalStyle.yellow,
    },
  },
  pg18: {
    backgroundColor: "white",
    color: "black",
    fontWeight: "700",
    textAlign: "center",
    padding: "8px  11px 6px 11px",
    lineHeight: "1",
    fontSize: "11px",
  },
  hd: {
    border: "2px solid white",
    backgroundColor: "black",
    color: "white",
    fontWeight: "700",
    padding: "8px  11px 6px 11px",
    lineHeight: "1",
    fontSize: "11px",
  },
});
