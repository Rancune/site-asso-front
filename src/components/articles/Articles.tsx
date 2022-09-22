import React, { useEffect, useState } from "react";
import { Box, Button, Pagination, Stack } from "@mui/material";
import ArticlesItem from "./ArticlesItem";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  return (
    <Stack>
      <ArticlesItem articles={articles} loading={loading} />
    </Stack>
  );
};

export default Articles;
