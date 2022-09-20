import { Slide, Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
import React from "react";

const Citation = () => {
  return (
    <Slide direction="right" in mountOnEnter>
      <Stack
        direction="column"
        width="80%"
        height={100}
        bgcolor="#EFC049"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={1}
        padding={3}>
        <Box>
          <Typography
            variant="h3"
            component="h2"
            color={"white"}
            fontStyle="italic">
            "Les meilleurs soirées de ma vie !"
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" color={"white"}>
            - Brad Pitt
          </Typography>
        </Box>
      </Stack>
    </Slide>
  );
};

export default Citation;