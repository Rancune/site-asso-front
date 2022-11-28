import React from "react";
import Caroussel from "../components/header/Caroussel";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Articles from "../components/articles/Articles";
import { useFetchData } from "../hooks";

const MainPage = () => {
  // const { isloading, data, error } = useFetchData();

  // console.log(data);

  return (
    <Stack>
      <Caroussel />
      <Stack
        paddingTop={5}
        spacing={10}
        margin="auto"
        width={"80%"}
        display="flex"
        height={"auto"}
        justifyContent="space-around"
        alignItems="center">
        <Typography variant="h2" align="center">
          Tous les vendredis soirs à partir de 20h30 à la maison de quartier
          Pierroton{" "}
        </Typography>
        <Box></Box>
        <Divider variant="middle" />

        <Box>
          <Typography variant="h3" align="center">
            Actualités Animation Loisir Pierroton
          </Typography>
        </Box>

        <Box>
          <Articles />
        </Box>
      </Stack>
    </Stack>
  );
};

export default MainPage;
