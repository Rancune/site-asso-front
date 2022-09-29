import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Articles from "../components/articles/Articles";
import Caroussel from "../components/header/Caroussel";
import { Stack } from "@mui/system";

const MainPage = () => {
  return (
    <Box height="100vh">
      <Stack display="flex" minHeight="100vh" justifyContent="space-around">
        <Navbar />
        <Caroussel />
        <Articles />
        <Footer />
      </Stack>
    </Box>
  );
};

export default MainPage;
