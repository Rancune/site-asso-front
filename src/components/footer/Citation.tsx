import { Slide, Typography } from "@mui/material";
import { Stack, Box } from "@mui/system";
import React from "react";

const Citation = () => {
  return (
    <Slide direction="right" in mountOnEnter>
      <Stack
        direction="column"
        width="80%"
        bgcolor="#EFC049"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={1}
        padding={3}
        paddingTop={5}>
        <Box>
          <Typography variant="h3" color={"white"} fontStyle="italic">
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
