import React, { useEffect, useState } from "react";
import { Box, Button, Pagination, Stack } from "@mui/material";

interface Props {
  articles: any;
  loading: boolean;
}

//ArticlesItem  component
const ArticlesItem = (props: Props) => {
  const { articles, loading } = props;

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Stack direction="column">
      {articles.map(
        (article: {
          id: React.Key | null | undefined;
          title:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          body:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
        }) => (
          <Box
            key={article.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              padding: "1rem",
              margin: "1rem",
              border: "1px solid #ccc",
              borderRadius: "1rem",
            }}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </Box>
        )
      )}
    </Stack>
  );
};

export default ArticlesItem;
