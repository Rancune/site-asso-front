import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../images/adress.png";
import Map from "../components/map/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <Box>
      <Typography variant="h1" align="center" alignItems="stretch">
        Contact
      </Typography>
      <Stack
        margin="auto"
        width={"80%"}
        display="flex"
        height={"auto"}
        spacing={20}
        justifyContent="space-around"
        alignItems="center">
        <Stack spacing={6} padding={4}>
          <Typography variant="h4" align="justify">
            1) Accès piéton 21 avenue de Pierroton (chemin de terre entre le 12
            et le 14)
          </Typography>
          <Typography variant="h4" align="justify">
            2) Pour ceux qui viennent en voiture il est préférable de se garer
            côté voie ferrée, accès par le stade Chambrelant.
          </Typography>
          <Typography variant="h4" align="justify">
            3) Depuis la A63 Sortie 24 direction Pierroton; au rond-point tout
            droit jusqu'au pont de chemin de fer; immédiatement après le pont,
            tourner à gauche; passer devant le stade Chambrelant, aller jusqu'à
            la voie ferrée et tourner à droite; continuer sur le chemin le
            parking se situe sur la gauche et la maison de quartier sur votre
            droite
          </Typography>
        </Stack>
        <Box>
          <img
            src={Image}
            alt="adress"
            style={{
              objectFit: "fill",
            }}
          />
        </Box>

        <Wrapper
          apiKey={"AIzaSyClAacmbHaQmjin_CbgmBIgMz3kLk2T8as"}
          render={render}>
          <Map />
        </Wrapper>
      </Stack>
    </Box>
  );
};

export default Contact;
