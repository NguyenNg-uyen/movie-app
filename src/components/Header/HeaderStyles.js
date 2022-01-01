import { makeStyles } from "@mui/styles";
import { globalStyle } from "../../scss/globalStyle";
export const useStyles = makeStyles({
  header_container: {
    width: "100%",
    marginTop: "20px",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: "99",
    transition: "height 0.3s ease, background-color 0.3s ease",
  },
  signinButton: {
    width: "120px",
  },
  menus: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 2rem",
    width: "60%",
  },
  menu: {
    transition: "all 0.3s ease",
    position: "relative",
    padding: "5px 0",
    "&:hover": {
      color: globalStyle.yellow,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)",
      width: "0",
      transition: "width 0.5s ease",
      height: "2px",
      backgroundColor: globalStyle.yellow,
    },
    "&:hover::after": {
      width: "100%",
    },
  },
  active: {
    color: globalStyle.yellow,
    "&::after": {
      width: "100%",
    },
  },
});
