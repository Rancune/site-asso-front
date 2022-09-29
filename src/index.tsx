import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./pages/MainPage";
import News from "./pages/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agenda from "./pages/Agenda";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Articles from "./pages/Articles";
import Activities from "./pages/Activities";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({

});

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/services" element={<Services />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
