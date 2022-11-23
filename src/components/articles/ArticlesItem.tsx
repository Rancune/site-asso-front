import React, { useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Article } from "../../models/articleModel";
import Loading from "../loading/Loading";

interface Props {
  articles: Article[];
  isloading: boolean;
}

//ArticlesItem  component
const ArticlesItem = (props: Props) => {
  const { articles, isloading } = props;

  if (isloading) {
    return <Loading />;
  }

  console.log(articles);

  //   return (
  //     <Stack direction="column" width={"60%"} margin="auto" spacing={4}>
  //       {articles &&
  //         articles.map((article) => (
  //           <Box key={article.id} padding={2}>
  //             <Paper elevation={3}>
  //               <Box padding={2}>
  //                 <Typography variant="h4">{article.title}</Typography>
  //                 <Typography variant="body1">{article.body}</Typography>
  //               </Box>
  //             </Paper>
  //           </Box>
  //         ))}
  //     </Stack>
  //   );
  // };

  return (
    <Stack>
      {articles.map((article) => (
        <Box
          key={article.id}
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
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography variant="h4" align="center">
              {" "}
              {article.title}
            </Typography>
            <Typography variant="body1" align="center">
              {article.body}
            </Typography>
          </Paper>
          <Box flexGrow={1} />
          <img
            style={{
              objectFit: "scale-down",
              width: "150px",
            }}
            src="https://picsum.photos/200/300"
            alt="random"
          />
        </Box>
      ))}
    </Stack>
  );
};

export default ArticlesItem;

//   return (ection="column" width={"60%"} margin="auto" spacing={4}>
//       {articles.
//     <Stack dirmap((article) => (
//         <Paper key={`article-${article.id}`}>
//           <Stack direction="row" spacing={1}>
//             <Stack spacing={1}>
//               <Typography variant="h6">{article.title}</Typography>
//               <Typography variant="body1">{article.body}</Typography>
//               <Typography variant="subtitle2">{article.id}</Typography>
//             </Stack>
//             <Box flexGrow={1} />
//             <img
//               style={{
//                 objectFit: "scale-down",
//                 width: "150px",
//               }}
//               src="https://picsum.photos/200/300"
//               alt="random"
//             />
//           </Stack>
//         </Paper>
//       ))}
//     </Stack>
//   );
// };

// export default ArticlesItem;
