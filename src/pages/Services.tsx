import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Image from "../images/adress.png";

const Service = () => {
  return (
    <>
      <Navbar />
      <Typography variant="h1" align="center">
        Services
      </Typography>
      <Stack
        margin="auto"
        width={"80%"}
        display="flex"
        padding={6}
        height={"auto"}
        spacing={10}>
        <Stack direction="row">
          <Box>
            <Typography variant="h2">Escape Game</Typography>
            <Typography variant="body1">
              Le jeu d'évasion consiste la plupart du temps à tenter de
              s’échapper d’une pièce en un temps limité (généralement une heure)
              et se pratique habituellement en groupe, même si des concepts
              existent pour une seule personne (par exemple, Lockdown à
              Singapour)3. Une joueuse d'un jeu d'évasion en train d'examiner un
              indice. La plupart du temps par groupe de deux à cinq/six
              participants (bien qu'il existe des enseignes adaptées à des
              groupes plus grands), les joueurs doivent chercher des indices
              disséminés dans une ou plusieurs pièces, puis les combiner pour
              avancer dans la salle. Le but est généralement de sortir d'une
              pièce (d’où le nom d'escape room), mais il peut aussi être
              d'apporter une solution à un autre problème, comme résoudre un
              meurtre ou trouver un trésor4.
            </Typography>
          </Box>
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
        <Stack direction="row">
          <Box>
            <img
              src={Image}
              alt="adress"
              style={{
                objectFit: "fill",
              }}
            />
          </Box>
          <Box>
            <Typography variant="h2">Quidditch</Typography>
            <Typography variant="body1">
              Le jeu d'évasion consiste la plupart du temps à tenter de
              s’échapper d’une pièce en un temps limité (généralement une heure)
              et se pratique habituellement en groupe, même si des concepts
              existent pour une seule personne (par exemple, Lockdown à
              Singapour)3. Une joueuse d'un jeu d'évasion en train d'examiner un
              indice. La plupart du temps par groupe de deux à cinq/six
              participants (bien qu'il existe des enseignes adaptées à des
              groupes plus grands), les joueurs doivent chercher des indices
              disséminés dans une ou plusieurs pièces, puis les combiner pour
              avancer dans la salle. Le but est généralement de sortir d'une
              pièce (d’où le nom d'escape room), mais il peut aussi être
              d'apporter une solution à un autre problème, comme résoudre un
              meurtre ou trouver un trésor4.
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row">
          <Box>
            <Typography variant="h2">Jeu de Role </Typography>
            <Typography variant="body1">
              Le jeu d'évasion consiste la plupart du temps à tenter de
              s’échapper d’une pièce en un temps limité (généralement une heure)
              et se pratique habituellement en groupe, même si des concepts
              existent pour une seule personne (par exemple, Lockdown à
              Singapour)3. Une joueuse d'un jeu d'évasion en train d'examiner un
              indice. La plupart du temps par groupe de deux à cinq/six
              participants (bien qu'il existe des enseignes adaptées à des
              groupes plus grands), les joueurs doivent chercher des indices
              disséminés dans une ou plusieurs pièces, puis les combiner pour
              avancer dans la salle. Le but est généralement de sortir d'une
              pièce (d’où le nom d'escape room), mais il peut aussi être
              d'apporter une solution à un autre problème, comme résoudre un
              meurtre ou trouver un trésor4.
            </Typography>
          </Box>
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
      </Stack>

      <Footer />
    </>
  );
};

export default Service;
