import React, { useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import useFetchArticle from "../hooks/UseFetchData";
import { Article } from "../models/articleModel";

const ArticleByID = () => {
  const { data, isloading, error } = useFetchArticle();
  //  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Stack
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
            {/* {data.title} */}
            TEST
          </Typography>
          {/* <div dangerouslySetInnerHTML={{ __html: data.body }} /> */}
        </Paper>
        <Box flexGrow={1} />
        <img
          style={{
            objectFit: "contain",
            width: "300px",
            margin: "auto",
          }}
          // src={data.img}
          alt="random"
        />
      </Box>
    </Stack>
  );
};

export default ArticleByID;
