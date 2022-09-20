import { Box } from "@mui/material";
import React from "react";
import Footer from "./elements/Footer";
import Navbar from "../components/navbar/Navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />

      <Box height={"600px"}> Slider</Box>
      <Box height={"500px"}> News</Box>

      <Footer />
    </div>
  );
};

export default MainPage;
