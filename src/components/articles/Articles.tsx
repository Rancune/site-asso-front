import React, { useEffect, useState } from "react";
import { Box, Button, Pagination, Stack } from "@mui/material";
import ArticlesItem from "./ArticlesItem";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [articlesPerPage] = useState(10);

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

  // Get current articles
  // const indexOfLastArticle = currentPage * articlesPerPage;
  // const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  // const currentArticles = articles.slice(
  //   indexOfFirstArticle,
  //   indexOfLastArticle
  // );

  // Change page
  // const paginate = (pageNumber : number) => setCurrentPage(pageNumber);

  return (
    <Stack>
      <ArticlesItem articles={articles} loading={loading} />
    </Stack>
  );
};

export default Articles;
