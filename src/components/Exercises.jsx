import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
// Components
import ExerciseCard from './ExerciseDetail'
import Loader from './Loader'

function Exercises({exercises}) {
  return (
    <Box 
      id="exercises"
      p="2%"
    >
      <Typography
        variant='h4'
        mb='4%'
        sx={{ fontSize: { xl:'2.4rem', lg: '3rem', sm:'2rem', xs: '1.5rem' }}}
      >
        Showing Results for Exercises
      </Typography>
      <Stack
        direction="row"
        sx={{gap:{lg:'110px', xs:'50px'}}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.length ? exercises.map((exercise, index) =>(
           <ExerciseCard
             key={index}
             exercise={exercise}
           />
        )): <Loader/>}
      </Stack>
     
    </Box>
  )
}

export default Exercises