import { Box, Stack, Typography } from "@mui/material";
import React from "react";

//Importing the images
import JeuSoc from "../images/activities/jeuSociete.jpg";
import Magic from "../images/activities/mtg.jpg";
import JeuDeRole from "../images/activities/jeuDeRole.jpg";
import Figurines from "../images/activities/figurines.jpg";
import Origami from "../images/activities/origami.jpg";
import Peinture from "../images/activities/peinture.jpg";

const Activities = () => {
  return (
    <>
      <Typography variant="h1" align="center">
        Activités
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
            <Typography variant="h2">Jeux de Société</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              L’activité jeux de société est l’occasion de jouer à des jeux de
              société modernes. Que ce soit des jeux de stratégie ou d’ambiance,
              l’association accueille tout le monde grâce à une gamme de 450
              jeux. Différents créneaux sont proposés dans la semaine. Tous les
              jeudis après-midis de 14h à 18h Le 2ème et dernier vendredi du
              mois Le 1er dimanche et 3ème dimanche du mois (dimanche suivant
              l’activité magic l’assemblée et l’activité jeux de société avec
              figurines) Vous pouvez retrouvez tous les jeux de l’association
              sur :
              https://www.myludo.fr/#!/profil/association-animation-loisir-pierroton-section-jeu-18463
            </Typography>
          </Box>
          <Box>
            <Box
              margin={"auto"}
              display="flex"
              component="img"
              src={JeuSoc}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Jeu de société"
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
              src={Magic}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Magic l'Assemblée"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Magic l'Assemblée</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              L’association accueille une petite communauté de joueurs de Magic
              l’assemblée qui se réunissent régulièrement, et aussi lors des
              avant-premières. Magic l’assemblée est un jeu de cartes à
              collectionner créé en 1993 par Richard Garfield. Nous interprétons
              des planeswalkers qui invoquent des créatures, utilisent la magie
              et des artefacts pour vaincre nos adversaires. Sur l’association,
              nous jouons principalement en Commander Multi, souvent en troll à
              deux têtes ou en pentacle. L’association possède également des
              decks de l'édition fun Unstable, et des cartes de l’édition de
              Draft Conspiracy. Le 1er vendredi du mois est consacré au jeu avec
              nos decks, le dimanche est plus dédié à jouer avec les cartes de
              l’association ou aux Avant Premières. Si vous n’avez pas de
              cartes, pas de panique, on peut vous prêter des decks. Si vous ne
              savez pas jouer, pas de soucis, on peut vous apprendre.
              L’association possède un stock de communes et unco à disposition
              des joueurs.
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Jeu de Role </Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              Le but du jeu de rôle est de vivre une aventure contée par un
              Maître de Jeu. L’association a la chance de compter plusieurs
              maîtres de jeu ayant un panel de jeu disponible assez important.
              Entre autres, ils peuvent vous proposer le célèbre jeu médiéval
              fantasy, Dungeons & Dragons mais aussi le jeu français Knight où
              vous incarnez des chevaliers en méta armure devant repousser les
              ténèbres dans un monde futuriste. Il y a aussi l’univers de
              Cthulhu ou de Mad Max et bien d’autres ! Un projet est en train de
              démarrer dans l’univers Donjons et Dragons. Il s’agit d’un projet
              ambitieux dans lequel vous incarnez un prisonnier en quête de
              liberté qui va participer à un jeu télévisé : The Prisoners
              Liberty Games ou TPLG pour les intimes. Dans ce jeu télévisé, vous
              êtes propulsé, grâce à une machine de simulation haute
              technologie, dans un monde Médiéval Fantasy pour y incarner un
              héros qui devra survivre à 20 Missions afin d'être libéré.
              Inscriptions et Renseignement : theprisonerslibertygame@gmail.com
              ou 0627284046 ou Facebook
            </Typography>
          </Box>
          <Box>
            <Box
              margin={"auto"}
              display="flex"
              component="img"
              src={JeuDeRole}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Jeu de role"
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
              src={Figurines}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Jeux de société avec Figurines"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Jeux de société avec Figurines</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              Nous organisons régulièrement des après-midis et soirées autour
              des jeux Zombicide (moderne, médiéval, futuriste et bientôt Far
              West) et B-Sieged. Jeu de stratégie coopératif où l’on doit
              survivre à une invasion de zombies ou de monstres, le système de
              jeu de Zombicide fait qu’il se renouvelle sans cesse autour d’un
              très grand nombre de scénarios. Dans B-sieged, il faut défendre la
              ville contre l'invasion de monstres tout en protégeant le messager
              qui part chercher un puissant artefact et des renforts. Nous
              pouvons aussi jouer à d’autres jeux appartenant à des membres
              qu’ils soient coopératif ou pas (Ankh, The Others ….) Le 3ème
              vendredi du mois est consacré aux jeux de société avec figurines.
            </Typography>
          </Box>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Origami</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              Venez apprendre à ranger vos boîtes de jeux différemment ! Fini
              les mises en place longues et fastidieuses liées au désordre mais
              aussi adieu aux sachets en plastique qui polluent et ne font pas
              forcément gagner du temps. Il existe de nombreuses manières de
              plier le papier pour ranger les différents éléments d’une boîte de
              jeu : boîte masu, boîte baggi, des boîtes hexagonales,
              triangulaires, des pochettes pour les cartes, etc. L’origami
              permet d'apprêter les éléments pour qu’ils soient disposés sur la
              table sans s’éparpiller ou se mélanger.
            </Typography>
          </Box>
          <Box>
            <Box
              margin={"auto"}
              display="flex"
              component="img"
              src={Origami}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Origami"
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
              src={Peinture}
              sx={{
                height: 450,
                width: 450,
                maxHeight: { xs: 200, md: 450 },
                maxWidth: { xs: 200, md: 450 },
              }}
              alt="Peinture Sur Figurines"
              style={{
                objectFit: "cover",
              }}
            />
          </Box>
          <Box sx={{ padding: { xs: 2, sm: 10 } }}>
            <Typography variant="h2">Peinture Sur Figurines</Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              Il existe plein de jeux avec des figurines. L’association dispose
              de plusieurs jeux, et d ‘autres vont arriver prochainement, les
              membres de l'association en ont aussi à la maison. Lors de ces
              séances, le but est d’apprendre à peindre sur des figurines que ce
              soit les siennes ou celles de l’association car un jeu avec des
              figurines peintes, c’est quand même plus classe et plus agréable
              visuellement ! Ensemble, nous nous échangeons des astuces et des
              techniques de peinture afin de progresser tous ensemble. Si vous
              n’avez pas de peinture pas de soucis vous pouvez utiliser celle de
              l’association.
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Activities;
