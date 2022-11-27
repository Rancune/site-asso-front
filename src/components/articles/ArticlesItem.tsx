import React, { useEffect, useState } from "react";
import { Box, Paper, Stack, Typography, Button } from "@mui/material";
import { Article } from "../../models/articleModel";
import Loading from "../loading/Loading";
import ReactQuill from "react-quill";

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

  return (
    <Stack justifyContent="space-around">
      {articles.map((article) => {
        return (
          <Button key={article.id} href={`/article/${article.id}`}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingTop={5}>
              <Paper
                elevation={3}
                sx={{
                  width: "80%",
                  height: 300,
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}>
                <Typography variant="h4" align="center">
                  {article.title}
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: article.body }} />
              </Paper>
              <Box flexGrow={1} />
              <img
                style={{
                  objectFit: "contain",
                  width: "300px",
                  margin: "auto",
                }}
                src={article.img}
                alt="random"
              />
            </Box>
          </Button>
        );
      })}
    </Stack>
  );
};

// const articleURL = "/article/" + article.id
// return (<Button href=/article/"${article.id}>
//           <Box
//             key={article.id}
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             paddingTop={5}>
//             <Paper
//               elevation={3}
//               sx={{
//                 width: "80%",
//                 height: 300,

//                 padding: 2,
//                 display: "flex",
//                 flexDirection: "column",

//                 overflow: "hidden",
//               }}>
//               <Typography variant="h4" align="center">
//                 {article.title}
//               </Typography>
//               <div dangerouslySetInnerHTML={{ __html: article.body }} />
//             </Paper>
//             <Box flexGrow={1} />
//             <img
//               style={{
//                 objectFit: "contain",
//                 width: "300px",
//                 margin: "auto",
//               }}
//               src={article.img}
//               alt="random"
//             />
//           </Box>
//         </Button>
//       ))}
//     </Stack>
//     </div>
//   );
// };

export default ArticlesItem;
