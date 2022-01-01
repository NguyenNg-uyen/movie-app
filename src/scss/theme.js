import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    h7: {
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: 1,
    },
  },
});

export default theme;
