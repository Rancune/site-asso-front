import { Box } from "@mui/material";
import React from "react";
import Footer from "./elements/Footer";

const MainPage = () => {
  return (
    <div>
      <Box height={"130px"}> Appbar</Box>
      <Box height={"600px"}> Slider</Box>
      <Box height={"500px"}> News</Box>
      <Footer />
    </div>
  );
};

export default MainPage;
