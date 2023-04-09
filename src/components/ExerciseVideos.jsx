import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

function ExerciseVideos({ youtubeVideos }) {
  return (
    <Box p="2%">
      <Typography variant="h4" mb="4%"
        sx={{ fontSize: { xl:'2.4rem', lg: '3rem', sm:'2rem', xs: '1.5rem' }}}
      >
        Showing Results for Exercise Videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {youtubeVideos.length ? youtubeVideos?.slice(0, 9).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank" // To open in new tab
            rel="noreferrer" // Recommended when using _blank
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant="h5" color="#FF1E56">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#3A1212">
                {item.video.channelName}
              </Typography>
              <Typography variant="body2" color="#000">
                {item.video.description}
              </Typography>
            </Box>
          </a>
        )) : <Loader/>}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
