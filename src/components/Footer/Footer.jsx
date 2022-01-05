import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./FooterStyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import card_img from "../../assets/card_img.png";
export default function Footer() {
  const footerNav = ["FAQ", "HELP CENTER", "TERMS OF USE", "PRIVACY"];
  const classes = useStyles();
  return (
    <Box className={classes.footer_container}>
      <Box className={classes.menus_wrapper}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box className={classes.menus}>
            {footerNav.map((item, index) => {
              return (
                <Typography key={index} variant="caption" className={`${classes.menu}`}>
                  {item}
                </Typography>
              );
            })}
          </Box>
          <Box className={classes.menus} sx={{ width: "15%" }}>
            <FacebookIcon className={classes.icon} fontSize="large" />
            <PinterestIcon className={classes.icon} fontSize="large" />
            <TwitterIcon className={classes.icon} fontSize="large" />
            <YouTubeIcon className={classes.icon} fontSize="large" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: "40px", py: "30px 10px" }}>
        <Typography variant="text">Copyright © 2021. All Rights Reserved By Movflx</Typography>
        <img src={card_img} alt="footer_bg" />
      </Box>
    </Box>
  );
}
