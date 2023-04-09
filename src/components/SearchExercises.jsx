import React, { useState } from "react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, youtubeVideosOptions, fetchData } from "../utils/fetchData";

function SearchExercises({setExercises, setYoutubeVideos}) {

  const [search, setSearch] = useState("");

  function handleQuery(query) {
    const searchQuery = query.target.value.toLowerCase();
    setSearch(searchQuery);
  }

  // async = this function will take some
  // time because its fetching data from API
  const handleSearch = async () => {
    // if search exists then fetch data
    if (search ==='abdominals'||search ==='abductors'||search ==='adductors'||search ==='biceps'
        ||search ==='calves'||search ==='chest'||search ==='forearms'||search ==='glutes'
        ||search ==='hamstrings'||search ==='lats'||search ==='lower_back'||search ==='middle_back'
        ||search ==='neck'||search ==='quadriceps'||search ==='traps'||search ==='triceps') 
      {
      const muscleURL = 'https://exercises-by-api-ninjas.p.rapidapi.com';
      const youtubeVideosURL = 'https://youtube-search-and-download.p.rapidapi.com'
      // Search exercises by muscle name
      const exerciseData = await fetchData(`${muscleURL}/v1/exercises?muscle=${search}`, exerciseOptions);
      const youtubeVideosData = await fetchData(`${youtubeVideosURL}/search?query=${search} exercise`, youtubeVideosOptions);

      setSearch("");
      setExercises(exerciseData);
      setYoutubeVideos(youtubeVideosData.contents);
    }else {
      // Do nothing
    }
  };

  return (
    <Stack id="explore-exercises" justifyContent="center" alignItems="center" mt="4%" p="2%"
     sx={{mt:{lg:'0', xs: '55%'}}}
    >
      <Typography
        fontWeight={700}
        textAlign="center"
        sx={{ fontSize: { lg: '3rem', sm:'2rem', xs: '1.5rem' }}}
        mt="5%"
        mb="5%"
      >
        Amazing Exercises You <br /> Should Know
      </Typography>
      <Typography width="45%" mb="10px"
        sx={{ fontSize: { xl:'1rem', lg: '2rem', sm:'1rem', xs: '0.8rem' }}}
      >
        <span
          className="muscle-exercises-font"
          style={{display: 'block', textAlign: 'center', color:'#25D366'}}
        >
        Available Muscle Exercises</span>
        (1) abdominals(2) abductors(3) adductors(4) biceps(5)
        calves(6) chest(7) forearms(8) glutes(9) hamstrings(10) 
        lats(11) lower_back(12) middle_back(13) neck(14) 
        quadriceps(15) traps(16) triceps
      </Typography>
      <Box position="relative" mb="5%">
        <TextField
          text="text"
          value={search}
          placeholder="Search exercises e.g biceps"
          height="7%"
          onChange={handleQuery}
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "10px",
            },
            width: {
              lg: "50rem",
              sm: "30rem",
              xs: "20rem",
              backgroundColor: "#fff",
              borderRadius: "10px",
            },
          }}
        />

        <button
          type="button"
          className="btn btn-danger btn-rounded"
          data-mdb-ripple-color="#ffffff"
          style={{
            margin: "0.5% 0 0 1%",
            letterSpacing: "0.1rem",
          }}
          href="#exercises"
          onClick={handleSearch}
        >
          Search
        </button>
      </Box>
    </Stack>
  );
}

export default SearchExercises;