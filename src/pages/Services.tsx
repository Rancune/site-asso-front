import { Box, Button, Stack, Typography } from "@mui/material";
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
              <p>
                Animation Jeux de Soci&eacute;t&eacute; : L&rsquo;association
                poss&egrave;de plus de 450 jeux, une partie de ceux-ci sont
                d&eacute;di&eacute;s &agrave; l&rsquo;animation. Nous nous
                d&eacute;pla&ccedil;ons pour animer vos festivals ou animations
                diverses avec une trentaine de jeux qui correspond &agrave;
                votre public. Nous pouvons mettre en place notamment Concept
                avec son grand tapis, Ice cool (jeu de pichenettes) mais aussi
                Unlock (escape game n&eacute;cessitant une application) et aussi
                des jeux plus &ldquo;classiques&rdquo; Poule Poule, Skyjo,
                Splendor, Azul &#8230;..
              </p>

              <p>
                Animation Jeux en bois et surdimensionn&eacute;s :
                L&rsquo;association poss&egrave;de un billard hollandais, un
                passe trap, un jeu du gruy&egrave;re. Nous poss&eacute;dons un
                can&rsquo;t stop surdimensionn&eacute;, un Strike
                surdimensionn&eacute; mais aussi 3 jeux de Football et 3
                parcours de Golf de la marque Plakks.
              </p>

              <p>
                Animation initiation Jeu de r&ocirc;le : L&rsquo;association
                peut mettre en place une initiation au jeu de r&ocirc;le,
                d&rsquo;une dur&eacute;e approximative de 3h dans
                l&rsquo;univers Donjon et Dragon ou Knight.
              </p>
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
              <p>
                L&rsquo;appartement de l&rsquo;explorateur : Avec cet Escape
                Game, nous vous proposons de recr&eacute;er, dans votre espace,
                une pi&egrave;ce enti&egrave;re repr&eacute;sentant
                l&rsquo;appartement de notre explorateur afin de nous aider
                &agrave; le contacter. De nombreux objets, des cadenas
                originaux, de la fouille et une exp&eacute;rience unique en 30
                minutes de sc&eacute;nario. Id&eacute;al pour les festivals ou
                autres animations. Forfait &agrave; la journ&eacute;e ou au
                week-end, avec ou sans animateurs.
              </p>

              <p>
                Sc&eacute;nario sur mesures : Nous pouvons aussi cr&eacute;er un
                sc&eacute;nario personnalis&eacute; pour votre
                &eacute;v&egrave;nement (6 mois de d&eacute;lai)
              </p>
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
              <p>
                Tous les adh&eacute;rents &agrave; l&rsquo;association peuvent
                emprunter gratuitement jusqu'&agrave; 3 jeux pour une
                dur&eacute;e de 15 jours pour leur usage personnel.
              </p>

              <p>
                Un ch&egrave;que de caution vous sera demand&eacute; lors de
                votre premier emprunt. Vous pouvez retrouver les jeux
                empruntables de l&rsquo;association sur
                <Button href="https://www.myludo.fr/#!/profil/association-animation-loisir-pierroton-section-jeu-18463">
                  MyLudo
                </Button>
              </p>

              <p>Certains jeux comme le zombicide ne sont pas empruntables.</p>
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
              <p>
                Troll Ball : Ce sport, issu du jeu de r&ocirc;le grandeur
                Nature, a pour but d&rsquo;emmener la t&ecirc;te de troll dans
                le tonneau adverse. Pour d&eacute;fendre votre camp, vous
                poss&eacute;dez diff&eacute;rentes armes (&eacute;p&eacute;e,
                dague, hache&#8230;) si vous touchez l'adversaire celui-ci est
                &eacute;limin&eacute; jusqu'&agrave; la fin de la manche ou
                qu&rsquo;un soigneur intervienne. <br />
                Ce sport, qui para&icirc;t &ecirc;tre fait pour des bourrins, se
                r&eacute;v&egrave;le tr&egrave;s tactique. Le plus fort ne
                gagnant, finalement, que rarement.
              </p>

              <p>
                Quidditch : Ce sport, issu de l&rsquo;univers Harry Potter de JK
                Rowling, vous met sur des balais et vous fait jouer avec le
                souafle si vous &ecirc;tes poursuivant ou gardien, avec les
                cognards si vous &ecirc;tes batteur ou avec le vif d&rsquo;or si
                vous &ecirc;tes attrapeur. Dans tous les cas, entre rigolade et
                tactique, ce sport est fait pour vous !
              </p>
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
