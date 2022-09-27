import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Articles from "../components/articles/Articles";
import Caroussel from "../components/header/Caroussel";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Caroussel />
      <Articles />
      <Footer />
    </div>
  );
};

export default MainPage;
