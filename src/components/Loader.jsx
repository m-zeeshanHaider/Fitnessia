import React from "react";
import {InfinitySpin} from 'react-loader-spinner'
import { Stack } from "@mui/material";

function Loader() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{width: {lg: '100%', xs: '30%'}}}
    >
      <InfinitySpin color="#25D366" />
    </Stack>
  );
}

export default Loader;
