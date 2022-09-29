import { Stack, Box, Tabs, Tab, Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

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
  return (
    // <Box position="relative" minHeight="160px">
    // {/* <Box position="absolute" right={36} pt={6}> */}
    <>
      <Box position="relative">
        <Box position="absolute" top={0} left={0} pt={2} pl={2}>
          <Logo />
        </Box>
      </Box>
      <Stack direction="row" justifyContent="flex-end" alignItems="center">
        <Box display="flex" />
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          textColor="secondary"
          indicatorColor="secondary">
          <LinkTab label="News" href="/news" />
          <LinkTab label="Articles" href="/articles" />
          <LinkTab label="Activitées" href="/activites" />
          <LinkTab label="Agenda" href="/agenda" />
          <LinkTab label="Services" href="/services" />
          <LinkTab label="Contact" href="/contact" />
        </Tabs>
      </Stack>
    </>

    // </Box>
  );
}
