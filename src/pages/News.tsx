import React from "react";
import { Box, Typography } from "@mui/material";
import Articles from "../components/articles/Articles";

const News = () => {
  return (
    <Box>
      <Typography variant="h1" align="center" pb={10}>
        Actualités
      </Typography>
      <Box></Box>
      <Articles />
    </Box>
  );
};

export default News;
