import React from "react";
import { Box, Stack, Typography } from "@mui/material";

function ExerciseDetail({ exercise }) {
  return (
    <Box>
      <div style={{ textAlign: "center", marginBottom:'5px' }}>
        <button
          type="button"
          className="btn btn-danger btn-rounded btn-md"
          data-mdb-ripple-color="#ffffff"
          style={{letterSpacing: "0.1rem"}}
        >
          Muscle: {exercise.muscle}
        </button>
        <button
          type="button"
          className="btn btn-primary btn-rounded btn-md"
          data-mdb-ripple-color="#ffffff"
          style={{letterSpacing: "0.1rem", marginLeft:"10px"}}
        >
          Equipment: {exercise.equipment}
        </button>
      </div>
      <Stack alignItems="center" m="auto 20%">
        <Typography
          mt="11px"
          ml="21px"
          pb="10px"
          color="#000"
          fontWeight="bold"
          fontSize="22px"
          textTransform="capitalize"
        >
          {exercise.name}
        </Typography>
        <Typography mt="11px" ml="21px" pb="10px" color="#000"
          style={{lineHeight: '2'}}
          sx={{ fontSize: { lg:'1.3rem', xs: '1rem' }}}
        >
          {exercise.instructions}
        </Typography>
      </Stack>
    </Box>
  );
}

export default ExerciseDetail;
