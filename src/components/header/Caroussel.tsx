import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import ImageIntro from "../../images/bandeau.png";

//create a caroussel

const Caroussel = () => {
  return (
    <Stack>
      <img src={ImageIntro} alt="accueil Info" />
    </Stack>
  );
};

export default Caroussel;
