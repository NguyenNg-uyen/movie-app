import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import PageRoutes from "./routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./scss/theme";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <PageRoutes></PageRoutes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
