import { Tabs, Tab, Stack } from "@mui/material";
import React from "react";
import Logo from "../logo/Logo";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{ width: "100%" }} direction="row">
      <Logo />
      <Stack
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={1}
        padding={3}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example">
          <LinkTab label="News" href="/news" />
          <LinkTab label="Agenda" href="/agenda" />
          <LinkTab label="Services" href="/services" />
          <LinkTab label="Contact" href="/contact" />
        </Tabs>
      </Stack>
    </Stack>
  );
}
