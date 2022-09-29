import { Stack } from "@mui/material";
import React from "react";
import ImageIntro from "../../images/intro.png";

//create a caroussel

const Caroussel = () => {
  return (
    <Stack>
      <img style={{ marginBottom: 50 }} src={ImageIntro} alt="Acceuil Info" />
    </Stack>
  );
};

export default Caroussel;
