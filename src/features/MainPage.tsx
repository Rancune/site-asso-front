import { Box } from "@mui/material";
import React from "react";
import Footer from "./elements/Footer";

const MainPage = () => {
  return (
    <div>
      <Box height={"130px"}> Appbar</Box>
      <Box height={"600px"}> Sidebar</Box>
      <Box height={"500px"}> Main</Box>
      <Footer />
    </div>
  );
};

export default MainPage;
