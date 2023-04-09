import React from 'react'
import {Box, Typography} from '@mui/material'

function HeroBanner() {
  return (
    <Box
      sx={{
        // Margin top
        mt: {
          // Large devices
          lg: '13%',
          // Extra small devices
          xs: '7%'
        },
        // Margin left
        ml: {
          // Small devices
          sm: '5%'
        }
      }}
      // Padding
      p="2%"
      position="relative"
    >

      <Typography 
        color="#FF1E56"
        fontWeight="600"
        fontSize="1.5rem"
        sx={{fontSize: { lg:'2rem', md:'1.5rem', xs:'1.2rem'}}}
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{fontSize: { lg:'3.5rem', xs:'2rem'}}}
        mt="2%" mb="3%"
      >
        Sweat, Smile <br/> and Repeat
      </Typography>

      <Typography
        fontSize="1.5rem"
        lineHeight="1"
        mb="1rem"
      >
        All you need to stay fit & healthy!
      </Typography>

      <Typography
        fontWeight={600}
        color="#FF1E56"
        sx={{opacity: '0.4', fontSize:{lg:'11rem', md:'6.5rem', xs:'3rem'}}}
      >
        Fitnessia
      </Typography>

    </Box>
  )
}

export default HeroBanner