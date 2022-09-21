import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import Articles from "../components/articles/Articles";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Box height={"600px"}> Slider</Box>
      <Articles/>
      <Footer />
    </div>
  );
};

export default MainPage;
