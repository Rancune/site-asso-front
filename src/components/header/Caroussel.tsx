import { Stack } from "@mui/material";
import React from "react";

//create a caroussel

const Caroussel = () => {
  return (
    <Stack
      bgcolor={"#000000"}
      direction="row"
      spacing={2}
      sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
        
      <img
        style={{
          objectFit: "scale-down",
          width: "100%",
          height: "100%",
        }}
        src="https://picsum.photos/200/300"
        alt="random"
      />
      <img
        style={{
          objectFit: "scale-down",
          width: "100%",
          height: "100%",
        }}
        src="https://picsum.photos/200/300"
        alt="random"
      />
      <img
        style={{
          objectFit: "scale-down",
          width: "100%",
          height: "100%",
        }}
        src="https://picsum.photos/200/300"
        alt="random"
      />
    </Stack>
  );
};

export default Caroussel;
