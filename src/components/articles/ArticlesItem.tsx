import React, { useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";

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
    <Stack direction="column" width={"60%"} margin="auto" spacing={4}>
      {articles.slice(0,5).map(
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
          <Paper>
            <Stack direction="row" spacing={1}>
              <Stack spacing={1}>
                <Typography variant="h6">{article.title}</Typography>
                <Typography variant="body1">{article.body}</Typography>
                <Typography variant="subtitle2">{article.id}</Typography>
              </Stack>
              <Box flexGrow={1} />
              <img
                style={{
                  objectFit: "scale-down",
                  width: "150px",
                }}
                src="https://picsum.photos/200/300"
                alt="random"
              />
            </Stack>
          </Paper>
        )
      )}
    </Stack>
  );
};

export default ArticlesItem;
