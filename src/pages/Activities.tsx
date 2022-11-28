import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
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
              <p>
                L&rsquo;activit&eacute; jeux de soci&eacute;t&eacute; est
                l&rsquo;occasion de jouer &agrave; des jeux de
                soci&eacute;t&eacute; modernes. Que ce soit des jeux de
                strat&eacute;gie ou d&rsquo;ambiance, l&rsquo;association
                accueille tout le monde gr&acirc;ce &agrave; une gamme de 450
                jeux. Diff&eacute;rents cr&eacute;neaux sont propos&eacute;s
                dans la semaine.
              </p>
              <p>
                <ul>
                  <li>
                    Tous les jeudis apr&egrave;s-midis de 14h &agrave; 18h
                  </li>
                  <li>Le 2&egrave;me et dernier vendredi du mois&nbsp;</li>
                  <li>
                    Le 1er dimanche et 3&egrave;me dimanche du mois (dimanche
                    suivant l&rsquo;activit&eacute; magic
                    l&rsquo;assembl&eacute;e et l&rsquo;activit&eacute; jeux de
                    soci&eacute;t&eacute; avec figurines)&nbsp;
                  </li>
                </ul>
              </p>
              <>
                Vous pouvez retrouvez tous les jeux de l&rsquo;association sur
                <Button
                  href="https://www.myludo.fr/#!/profil/association-animation-loisir-pierroton-section-jeu-18463"
                  variant="text"
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer">
                  MyLudo
                </Button>
              </>{" "}
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
              <p>
                L&rsquo;association accueille une petite communaut&eacute; de
                joueurs de Magic l&rsquo;assembl&eacute;e qui se
                r&eacute;unissent r&eacute;guli&egrave;rement, et aussi lors des
                avant-premi&egrave;res.
              </p>

              <p>
                Magic l&rsquo;assembl&eacute;e est un jeu de cartes &agrave;
                collectionner cr&eacute;&eacute; en 1993 par Richard Garfield.
                Nous interpr&eacute;tons des planeswalkers qui invoquent des
                cr&eacute;atures, utilisent la magie et des artefacts pour
                vaincre nos adversaires.
              </p>

              <p>
                Sur l&rsquo;association, nous jouons principalement en Commander
                Multi, souvent en troll &agrave; deux t&ecirc;tes ou en
                pentacle. L&rsquo;association poss&egrave;de &eacute;galement
                des decks de l'&eacute;dition fun Unstable, et des cartes de
                l&rsquo;&eacute;dition de Draft Conspiracy.
              </p>

              <p>
                Le 1er vendredi du mois est consacr&eacute; au jeu avec nos
                decks, le dimanche est plus d&eacute;di&eacute; &agrave; jouer
                avec les cartes de l&rsquo;association ou aux Avant
                Premi&egrave;res.
              </p>

              <p>
                Si vous n&rsquo;avez pas de cartes, pas de panique, on peut vous
                pr&ecirc;ter des decks. Si vous ne savez pas jouer, pas de
                soucis, on peut vous apprendre. L&rsquo;association
                poss&egrave;de un stock de communes et unco &agrave; disposition
                des joueurs.
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
            <Typography variant="h2">Jeu de Rôle </Typography>
            <Typography variant="body1" align="justify" paddingTop={3}>
              <p>
                Le but du jeu de r&ocirc;le est de vivre une aventure
                cont&eacute;e par un Ma&icirc;tre de Jeu.
              </p>

              <p>
                L&rsquo;association a la chance de compter plusieurs
                ma&icirc;tres de jeu ayant un panel de jeu disponible assez
                important. Entre autres, ils peuvent vous proposer le
                c&eacute;l&egrave;bre jeu m&eacute;di&eacute;val fantasy,
                Dungeons &amp; Dragons mais aussi le jeu fran&ccedil;ais Knight
                o&ugrave; vous incarnez des chevaliers en m&eacute;ta armure
                devant repousser les t&eacute;n&egrave;bres dans un monde
                futuriste. Il y a aussi l&rsquo;univers de Cthulhu ou de Mad Max
                et bien d&rsquo;autres !
              </p>

              <p>
                Un projet est en train de d&eacute;marrer dans l&rsquo;univers
                Donjons et Dragons. Il s&rsquo;agit d&rsquo;un projet ambitieux
                dans lequel vous incarnez un prisonnier en qu&ecirc;te de
                libert&eacute; qui va participer &agrave; un jeu
                t&eacute;l&eacute;vis&eacute; : The Prisoners Liberty Games ou
                TPLG pour les intimes. Dans ce jeu
                t&eacute;l&eacute;vis&eacute;, vous &ecirc;tes propuls&eacute;,
                gr&acirc;ce &agrave; une machine de simulation haute
                technologie, dans un monde M&eacute;di&eacute;val Fantasy pour y
                incarner un h&eacute;ros qui devra survivre &agrave; 20 Missions
                afin d'&ecirc;tre lib&eacute;r&eacute;.
              </p>

              <p>
                {" "}
                Inscriptions et Renseignement :
                theprisonerslibertygame@gmail.com ou 0627284046 ou Facebook
              </p>
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
              <p>
                Nous organisons r&eacute;guli&egrave;rement des
                apr&egrave;s-midis et soir&eacute;es autour des jeux Zombicide
                (moderne, m&eacute;di&eacute;val, futuriste et bient&ocirc;t Far
                West) et B-Sieged.
              </p>

              <p>
                Jeu de strat&eacute;gie coop&eacute;ratif o&ugrave; l&rsquo;on
                doit survivre &agrave; une invasion de zombies ou de monstres,
                le syst&egrave;me de jeu de Zombicide fait qu&rsquo;il se
                renouvelle sans cesse autour d&rsquo;un tr&egrave;s grand nombre
                de sc&eacute;narios.
              </p>

              <p>
                Dans B-sieged, il faut d&eacute;fendre la ville contre
                l'invasion de monstres tout en prot&eacute;geant le messager qui
                part chercher un puissant artefact et des renforts.
              </p>

              <p>
                Nous pouvons aussi jouer &agrave; d&rsquo;autres jeux
                appartenant &agrave; des membres qu&rsquo;ils soient
                coop&eacute;ratif ou pas (Ankh, The Others &#8230;.)
              </p>

              <p>
                Le 3&egrave;me vendredi du mois est consacr&eacute; aux jeux de
                soci&eacute;t&eacute; avec figurines.
              </p>

              <p></p>
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
              <p>
                Venez apprendre &agrave; ranger vos bo&icirc;tes de jeux
                diff&eacute;remment !
              </p>

              <p>
                Fini les mises en place longues et fastidieuses li&eacute;es au
                d&eacute;sordre mais aussi adieu aux sachets en plastique qui
                polluent et ne font pas forc&eacute;ment gagner du temps.
              </p>

              <p>
                Il existe de nombreuses mani&egrave;res de plier le papier pour
                ranger les diff&eacute;rents &eacute;l&eacute;ments d&rsquo;une
                bo&icirc;te de jeu : bo&icirc;te masu, bo&icirc;te baggi, des
                bo&icirc;tes hexagonales, triangulaires, des pochettes pour les
                cartes, etc.
              </p>

              <p>
                L&rsquo;origami permet d'appr&ecirc;ter les
                &eacute;l&eacute;ments pour qu&rsquo;ils soient dispos&eacute;s
                sur la table sans s&rsquo;&eacute;parpiller ou se
                m&eacute;langer.
              </p>
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
              <p>Il existe plein de jeux avec des figurines.</p>

              <p>
                L&rsquo;association dispose de plusieurs jeux, et d
                &lsquo;autres vont arriver prochainement, les membres de
                l'association en ont aussi &agrave; la maison.
              </p>

              <p>
                Lors de ces s&eacute;ances, le but est d&rsquo;apprendre
                &agrave; peindre sur des figurines que ce soit les siennes ou
                celles de l&rsquo;association car un jeu avec des figurines
                peintes, c&rsquo;est quand m&ecirc;me plus classe et plus
                agr&eacute;able visuellement !
              </p>

              <p>
                Ensemble, nous nous &eacute;changeons des astuces et des
                techniques de peinture afin de progresser tous ensemble. Si vous
                n&rsquo;avez pas de peinture pas de soucis vous pouvez utiliser
                celle de l&rsquo;association.
              </p>
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Activities;
