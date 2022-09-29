import React from "react";
import Articles from "../components/articles/Articles";
import Caroussel from "../components/header/Caroussel";
import { Stack } from "@mui/system";

const MainPage = () => {
  return (
    <Stack>
      <Caroussel />
      <Articles />
    </Stack>
  );
};

export default MainPage;
