import { makeStyles } from "@mui/styles";
import { globalStyle } from "../../scss/globalStyle";
export const useStyles = makeStyles({
  footer_container: {
    backgroundImage: "url(https://themebeyond.com/html/movflx/img/bg/footer_bg.jpg)",
    width: "100%",
    padding: "2% 5%",
    transition: "height 0.3s ease, background-color 0.3s ease",
  },
  menus_wrapper: {
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      left: "0",
      bottom: "-10px",
      width: "100%",
      height: "1px",
      backgroundColor: "rgb(18, 21, 30)",
      boxShadow: "0px 3px 0px 0px rgb(143 143 143 / 14%)",
    },
  },
  menus: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
  },
  menu: {
    transition: "all 0.3s ease",
    cursor: "pointer",
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
  icon: {
    cursor: "pointer",
    "&:nth-of-type(1)": {
      "&:hover": {
        color: "#1778F2",
      },
    },
    "&:nth-of-type(2)": {
      "&:hover": {
        color: "#E60023",
      },
    },
    "&:nth-of-type(3)": {
      "&:hover": {
        color: "#1DA1F2",
      },
    },
    "&:nth-of-type(4)": {
      "&:hover": {
        color: "#FF0000",
      },
    },
  },
});
