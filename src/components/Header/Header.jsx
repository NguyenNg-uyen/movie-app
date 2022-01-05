import { Box, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MyButton } from "../Button";
import { useStyles } from "./HeaderStyles";
import { globalStyle } from "../../scss/globalStyle";
export default function Header() {
  const headerNav = [
    {
      display: "Home",
      path: "/",
    },
    {
      display: "Movie",
      path: "/movies",
    },
    {
      display: "TV Series",
      path: "/tv",
    },
    {
      display: "Pricing",
      path: "/pricing",
    },
    {
      display: "Contact",
      path: "/contact",
    },
    {
      display: "Blog",
      path: "/blog",
    },
  ];
  const classes = useStyles();
  const pathName = useLocation();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  console.log(offset);
  return (
    <Box className={classes.header_container} sx={offset > 0 ? { backgroundColor: globalStyle.background } : ""}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <img src={logo} alt="logo" />
        <Box className={classes.menus}>
          {headerNav.map((item, index) => {
            return (
              <Typography key={index} variant="h7" className={`${classes.menu} ${item.path === pathName.pathname ? classes.active : ""}`}>
                <Link to={item.path}>{item.display.toUpperCase()}</Link>
              </Typography>
            );
          })}
        </Box>
        <MyButton variant="outlined" className={classes.signinButton}>
          SIGN IN
        </MyButton>
      </Toolbar>
    </Box>
  );
}
