import React from "react";
import Caroussel from "../components/header/Caroussel";
import { Box, Stack, Typography } from "@mui/material";


const MainPage = () => {
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
          Tous les vendredis soir à partir de 20h30 à la maison de quartier
          Pierroton{" "}
        </Typography>
        <Box>
          <Typography variant="h3" align="center">
            Animation Loisir Pierroton
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" align="justify">
            L’association loi 1901, Animation Loisir Pierroton, existe depuis
            2004. C’est en son sein qu’a vu le jour la section Jeu Ados Adultes
            qui a commencé son activité début septembre 2008. La section a pour
            but de développer et de promouvoir le jeu de l’adulte. Pour cela,
            elle est ouverte aux personnes ayant entre 12 ans et 112 ans.
            L’association se réunit le jeudi et dimanche après-midi ainsi que le
            vendredi soir suivant un planning d’activité prévu à l’avance et que
            vous pouvez retrouver sur notre agenda. L’adhésion est de 10€ à
            l’année civile pour l’ensemble des activités. Toutes nos activités
            ont lieu à la maison de quartier de Pierroton entre le 12 et 14
            avenue de Pierroton 33610 Cestas. La maison de quartier se trouve au
            fond d’un parc dans lequel on peut se garer. Merci de rouler
            doucement et prudemment dans le parc.
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

export default MainPage;
