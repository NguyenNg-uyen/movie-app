import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const CustomBox = ({ boxType, children, color }) => {
  const useStyles = makeStyles({
    white_box: {
      backgroundColor: "white",
      color: color || "black",
      fontWeight: "700",
      textAlign: "center",
      padding: "8px  11px 6px 11px",
      lineHeight: "1",
      fontSize: "11px",
    },
    black_box: {
      border: "2px solid white",
      backgroundColor: "black",
      color: color || "white",
      fontWeight: "700",
      padding: "6px 11px",
      lineHeight: "1",
      fontSize: "11px",
    },
  });
  const classes = useStyles();
  return (
    <Typography variant="span" className={boxType === "white" ? classes.white_box : classes.black_box}>
      {children}
    </Typography>
  );
};
CustomBox.propTypes = {
  boxType: PropTypes.oneOf(["black", "white"]),
};
export default CustomBox;
