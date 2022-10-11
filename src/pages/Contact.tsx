import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../images/adress.png";

const Contact = () => {
  return (
    <Box>
      <Typography variant="h1" align="center" alignItems="stretch">
        Contact
      </Typography>
      <Stack
        direction={"row"}
        margin="auto"
        width={"80%"}
        display="flex"
        padding={12}
        height={"auto"}>
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
      </Stack>
    </Box>
  );
};

export default Contact;
