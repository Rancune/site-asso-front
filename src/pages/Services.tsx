import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "../components/design/Image";

//Importing the images
import Animation from "../images/services/animation.jpg";
import Escape from "../images/services/escape.jpg";
import Piste from "../images/services/piste.jpg";
import Pret from "../images/services/pret.jpg";
import Sport from "../images/services/sport.jpg";

const Service = () => {
  return (
    <Box>
      <Typography variant="h1" align="center">
        Services
      </Typography>
      <Stack
        margin="auto"
        width={"80%"}
        display="flex"
        height={"auto"}
        spacing={20}
        justifyContent="space-around"
        alignItems="center">
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Animation Jeux</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              Animation Jeux de Société : L’association possède plus de 450
              jeux, une partie de ceux-ci sont dédiés à l’animation. Nous nous
              déplaçons pour animer vos festivals ou animations diverses avec
              une trentaine de jeux qui correspond à votre public. Nous pouvons
              mettre en place notamment Concept avec son grand tapis, Ice cool
              (jeu de pichenettes) mais aussi Unlock (escape game nécessitant
              une application) et aussi des jeux plus “classiques” Poule Poule,
              Skyjo, Splendor, Azul ….. Animation Jeux en bois et
              surdimensionnés : L’association possède un billard hollandais, un
              passe trap, un jeu du gruyère. Nous possédons un can’t stop
              surdimensionné, un Strike surdimensionné mais aussi 3 jeux de
              Football et 3 parcours de Golf de la marque Plakks. Animation
              initiation Jeu de rôle : L’association peut mettre en place une
              initiation au jeu de rôle, d’une durée approximative de 3h dans
              l’univers Donjon et Dragon ou Knight.
            </Typography>
          </Box>
          <Box>
            <Image src="services/animation.jpg" />
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}>
          <Box>
            <Box
              margin={"auto"}
              display="flex"
              component="img"
              src={Escape}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Escape game"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Escape Game </Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              L’appartement de l’explorateur : Avec cet Escape Game, nous vous
              proposons de recréer, dans votre espace, une pièce entière
              représentant l’appartement de notre explorateur afin de nous aider
              à le contacter. De nombreux objets, des cadenas originaux, de la
              fouille et une expérience unique en 30 minutes de scénario. Idéal
              pour les festivals ou autres animations. Forfait à la journée ou
              au week-end, avec ou sans animateurs. Scénario sur mesures : Nous
              pouvons aussi créer un scénario personnalisé pour votre évènement
              (6 mois de délai)
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Jeu de piste</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              Jeu de piste personnalisé : Que ce soit pour mettre en avant les
              commerçants de votre ville ou faire visiter un lieu, avec des
              cadenas physiques à réinstaller ou des cadenas numériques, il
              existe une solution pour vous. Que ce soit un événement ponctuel
              ou permanent, nous pouvons travailler sur un jeu pour vous.
            </Typography>
          </Box>
          <Box>
            <Box
              margin={"auto"}
              display="flex"
              component="img"
              src={Piste}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Jeu de piste"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}>
          <Box>
            <Box
              margin={"auto"}
              display="flex"
              component="img"
              src={Pret}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Prêt de jeu"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Prêt de jeu</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              Tous les adhérents à l’association peuvent emprunter gratuitement
              jusqu'à 3 jeux pour une durée de 15 jours pour leur usage
              personnel. Un chèque de caution vous sera demandé lors de votre
              premier emprunt. Vous pouvez retrouver les jeux empruntables de
              l’association sur
              https://www.myludo.fr/#!/profil/association-animation-loisir-pierroton-section-jeu-18463
              Certains jeux comme le zombicide ne sont pas empruntables.
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Sport Insolite</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              Troll Ball : Ce sport, issu du jeu de rôle grandeur Nature, a pour
              but d’emmener la tête de troll dans le tonneau adverse. Pour
              défendre votre camp, vous possédez différentes armes (épée, dague,
              hache…) si vous touchez l'adversaire celui-ci est éliminé jusqu'à
              la fin de la manche ou qu’un soigneur intervienne. Ce sport, qui
              paraît être fait pour des bourrins, se révèle très tactique. Le
              plus fort ne gagnant, finalement, que rarement. Quidditch : Ce
              sport, issu de l’univers Harry Potter de JK Rowling, vous met sur
              des balais et vous fait jouer avec le souafle si vous êtes
              poursuivant ou gardien, avec les cognards si vous êtes batteur ou
              avec le vif d’or si vous êtes attrapeur. Dans tous les cas, entre
              rigolade et tactique, ce sport est fait pour vous !
            </Typography>
          </Box>
          <Box>
            <Box
              margin={"auto"}
              display="flex"
              component="img"
              src={Sport}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Sport Insolite"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Service;
