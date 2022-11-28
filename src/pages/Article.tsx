import React, { useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import useFetchArticleById from "../hooks/UseFetchData";
import { Article } from "../models/articleModel";
import Loading from "../components/loading/Loading";


//RECUPERATION DE L'ARTICLE PAR SON ID ET AFFICHAGE
const ArticleByID = () => {
  const { data, isloading, error } = useFetchArticleById<Article>();

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isloading) {
    return <Loading />;
  }

  return (
    <Stack
      direction={"column"}
      paddingTop={5}
      spacing={10}
      margin="auto"
      width={"80%"}
      display="flex"
      height={"auto"}
      justifyContent="space-around"
      alignItems="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={5}>
        <Paper
          elevation={3}
          sx={{
            width: "80%",
            height: "auto",
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}>
          <Typography variant="h4" align="center">
            {data[0].title}
          </Typography>
          <div dangerouslySetInnerHTML={{ __html: data[0].body }} />
        </Paper>
      </Box>
      <img
        style={{
          objectFit: "contain",
          width: "80%",
          margin: "40px auto",
        }}
        src={data[0].img}
        alt="random"
      />
    </Stack>
  );
};

export default ArticleByID;
