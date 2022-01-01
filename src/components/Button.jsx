import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { globalStyle } from "../scss/globalStyle";

export const MyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: 700,
  padding: "10px 15px",
  border: "1.5px solid ",
  borderRadius: globalStyle.borderRadius,
  color: "white",
  backgroundColor: "rgb(18, 21, 30)",
  textAlign: "center",
  lineHeight: 1.5,
  borderColor: globalStyle.yellow,
  "&:hover": {
    backgroundColor: globalStyle.yellow,
    color: "#000",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#E4D604",
  },
});
