import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Title from "./Title";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box mt="8%">
    <Stack alignItems="center">
     <Title/>
    </Stack>
      <Stack gap="40px" alignItems="center" px="4%" pt="2%">
        <Typography color="#000" align="center" mb="20px"
          sx={{ fontSize: { xl:'1rem', lg: '1rem', sm:'1rem', xs: 'o.5rem' }}}
        >
          Copyright © {year}
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
