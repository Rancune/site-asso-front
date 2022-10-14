import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./pages/MainPage";
import News from "./pages/News";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Agenda from "./pages/Agenda";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Articles from "./pages/Articles";
import Activities from "./pages/Activities";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Box,
  Stack,
} from "@mui/material";
import Footer from "./components/footer/Footer";
import NavBar from "./components/header/Navbar";
import Logo from "./components/header/Logo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Layout = () => {
  return (
    <Box height="100vh" width="100vw" sx={{ overflowX: "hidden" }}>
      {/* <Box position="relative">
        <Box position="absolute" top={0} left={0} pt={2} pl={2}>
          <Logo />
        </Box>
      </Box> */}
      <Stack display="flex" height="100%">
        <NavBar />
        <Outlet />
        <Box flexGrow={1} />
        <Footer />
      </Stack>
    </Box>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#264F36",
    },
  },
});

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/agenda" element={<Agenda />} />
            <Route path="/services" element={<Services />} />
            <Route path="/activites" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
