import { Stack, Box, Tabs, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import { ChevronRight } from "@mui/icons-material";

import Logo from "./Logo";

interface LinkTabProps {
  label: string;
  href: string;
}

const LinkTab = (props: LinkTabProps) => {
  const navigate = useNavigate();
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        navigate(props.href);
      }}
      {...props}
    />
  );
};

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ display: { xs: "none", sm: "flex" } }}>
        <Box padding={5} />
        <Logo />
        <Typography variant="h6" sx={{ mr: 2 }}>
          <Box fontWeight="fontWeightBold">ALPSJAA</Box>
        </Typography>

        <Box display="flex" />
        <Box sx={{ flexGrow: 1 }} />

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          textColor="secondary"
          indicatorColor="secondary">
          <LinkTab label="Accueil" href="/" />
          <LinkTab label="Activités" href="/activites" />
          <LinkTab label="Services" href="/services" />
          <LinkTab label="Contact" href="/contact" />
        </Tabs>
      </Stack>

      {/* Mobile menu */}
      <Stack
        direction="row"
        alignItems="center"
        sx={{ display: { xs: "flex", sm: "none" } }}>
        <Logo />
        <Typography variant="h6" sx={{ mr: 2 }} alignContent="center">
          <Box fontWeight="fontWeightBold">ALPSJAA</Box>
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Box justifyContent="flex-end">
          <IconButton aria-label="menu">
            <MenuIcon onClick={() => setOpen(true)} />
          </IconButton>
        </Box>

        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}>
          <IconButton>
            <ChevronRight onClick={() => setOpen(false)} />
          </IconButton>
          <Divider />

          <Box
            sx={{ width: "auto" }}
            role="presentation"
            onClick={() => {}}
            onKeyDown={() => {}}>
            <Tabs
              orientation="vertical"
              sx={{ display: { xs: "flex", sm: "none" } }}
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              textColor="secondary"
              indicatorColor="secondary"
              onClick={() => setOpen(false)}>
              <LinkTab label="Accueil" href="/" />
              <LinkTab label="Activités" href="/activites" />
              <LinkTab label="Services" href="/services" />
              <LinkTab label="Contact" href="/contact" />
            </Tabs>
          </Box>
          <Divider />
          <Logo />
        </SwipeableDrawer>
      </Stack>
    </>

    // </Box>
  );
}
