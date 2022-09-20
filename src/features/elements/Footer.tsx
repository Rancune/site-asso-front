import { Box, Link, Stack } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <Stack spacing={16}>
      <Box>Les meilleurs soirées de ma vie !</Box>
      <Stack
        direction="row"
        spacing={2}
        padding={2}
        justifyContent="space-around"
        color="#ffffff"
        bgcolor="#393939">
        <Box>
          <Link
            href="http://alpsjaa.over-blog.com/"
            sx={{ textDecoration: "none" }}
            color="inherit">
            Copyright 2022
          </Link>
        </Box>
        <Stack direction="row" spacing={1}>
          <Facebook />
          <Link
            href="https://www.facebook.com/lesmeilleurssoireesdemavie"
            sx={{ textDecoration: "none" }}
            color="inherit">
            Facebook
          </Link>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Instagram />
          <Link
            href="https://www.instagram.com/lesmeilleurssoireesdemavie/"
            sx={{ textDecoration: "none" }}
            color="inherit">
            Instagram
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
