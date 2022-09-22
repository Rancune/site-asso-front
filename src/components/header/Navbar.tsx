import { Stack, Button, Box } from "@mui/material";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Stack direction="row">
      <Stack
        direction="row"
        spacing={1}
        padding={3}
        color="black"
        bgcolor="white"
        width={"80%"}>
        <Logo />
        <Box display="flex"></Box>
      </Stack>
      <Stack justifyContent="flex-end" alignItems="center" direction="row">
        <Button LinkComponent={Button} href="/news" color="inherit">
          News
        </Button>
        <Button LinkComponent={Button} href="/agenda" color="inherit">
          Agenda
        </Button>
        <Button LinkComponent={Button} href="/services" color="inherit">
          Services
        </Button>
        <Button LinkComponent={Button} href="/contact" color="inherit">
          Contact
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
