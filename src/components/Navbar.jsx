import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import Title from "./Title";

function Navbar() {
  return (
    <Stack
     mt="2%"
     direction="row"
     justifyContent="space-around"
     sx={{gap: {sm: '212px', xs:'40px', justifyContent: 'none'}}}
     px="2%"
    >
    <Title/>
      <Stack
       direction="row"
       gap="40px"
       fontSize="1.5rem"
       alignItems="flex-end"
       mb="auto"
       mt="auto"
      >
        <Link to="/" className="nav-home-link">Home</Link>
        <a className="nav-exercise-link" href="#exercises">Exercises</a>
      </Stack>

    </Stack>
  );
}

export default Navbar;
