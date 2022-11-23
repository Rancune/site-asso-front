import { Button } from "@mui/material";
import React from "react";
import ImageLogo from "../../images/logoR.png";

//create a logo to homepage

const Logo = () => {
  return (
    <Button href="/">
      <img src={ImageLogo} alt="logo" width="100px" height="100px" />
    </Button>
  );
  
  
};

export default Logo;
