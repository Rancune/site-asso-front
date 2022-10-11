import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import ImageIntro from "../../images/accueil.png";

//create a caroussel

const Caroussel = () => {
  return (
    <Stack>
      <img style={{ marginBottom: 50 }} src={ImageIntro} alt="accueil Info" />
      
    </Stack>
  );
};

export default Caroussel;
