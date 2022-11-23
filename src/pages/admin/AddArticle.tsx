import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useAddArticle } from "../../hooks/UseFetchData";
import { Article } from "../../models/articleModel";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [type, setType] = useState("news");
  const [imageurl, setImageurl] = useState("");
  const { isloading, message, error, addArticle } = useAddArticle();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const article: Article = {
      id: 0,
      title,
      body,
      type,
    };
    addArticle(article);
    console.log(article);
    console.log("New Article added");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "body":
        setBody(value);
        break;
      case "type":
        setType(value);
        break;
      case "imageurl":
        setImageurl(value);
        break;
      default:
        break;
    }
  };

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (message) {
    return <Alert severity="success">{message}</Alert>;
  }

  //Create a page with a form to add new article
  return (
    <FormControl
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}>
      <Stack
        paddingTop={5}
        direction="column"
        margin="auto"
        width={"80%"}
        display="flex"
        height={"auto"}
        justifyContent="space-around"
        alignItems="center">
        <Typography variant="h2" align="center" pb={10}>
          Administration
        </Typography>
        <Box>
          <TextField
            id="title"
            label="Titre"
            variant="outlined"
            margin="normal"
            name="title"
            fullWidth
            required
            value={title}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            id="body"
            label="Contenu"
            variant="outlined"
            margin="normal"
            name="body"
            multiline
            rows={10}
            fullWidth
            required
            value={body}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <TextField
            id="imageurl"
            label="Image"
            variant="outlined"
            margin="normal"
            name="imageurl"
            fullWidth
            required
            value={imageurl}
            onChange={handleChange}
          />
        </Box>
        <Box></Box>
        <FormLabel id="demo-radio-buttons-group-label">Type de news</FormLabel>
        <RadioGroup defaultValue="Actualités" name="radio-buttons-group">
          <FormControlLabel
            value={type}
            name="news"
            control={<Radio />}
            label="Actualités"
          />
          <FormControlLabel
            value={type}
            name="article"
            control={<Radio />}
            label="Articles"
          />
        </RadioGroup>

        <Button variant="contained" type="submit">
          Ajouter
        </Button>
      </Stack>
    </FormControl>
  );
};

export default Admin;
