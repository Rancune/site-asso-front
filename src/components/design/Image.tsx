import React from "react";
import { Box } from "@mui/material";

//Importing the images
import Animation from "../../images/services/animation.jpg";
import Escape from "../images/services/escape.jpg";
import Piste from "../images/services/piste.jpg";
import Pret from "../images/services/pret.jpg";
import Sport from "../images/services/sport.jpg";

const Image = (props: { src: string | undefined }) => {
  return (
    <Box
      margin={"auto"}
      display="flex"
      component="img"
      src={Animation}
      sx={{
        height: 450,
        width: 450,
        maxHeight: { xs: 200, md: 450 },
        maxWidth: { xs: 200, md: 450 },
      }}
      alt={props.src}
      style={{
        objectFit: "cover",
      }}
    />
  );
};

export default Image;
