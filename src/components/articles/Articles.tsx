import React, { useEffect, useState } from "react";
import { Box, Pagination, Stack } from "@mui/material";
import ArticlesItem from "./ArticlesItem";
import { useFetchData } from "../../hooks/UseFetchData";
import { Article } from "../../models/articleModel";

const Articles = () => {
  const { isloading, data, error } = useFetchData<Article>();
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    console.log(page);
  }, [page]);

  console.log(data);

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
      <ArticlesItem articles={data} isloading={isloading} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={5}>
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Box>
    </Stack>
  );
};


export default Articles;
