import React, {useState} from 'react'
import { Box } from '@mui/system'
import HeroBannerImage from '../assets/images/banner.gif'
// Components
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import ExerciseVideos from '../components/ExerciseVideos'


function Home() {

  // Array to store the results of the search
  const [exercises, setExercises] = useState([]);
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  return (
    <Box>
      <img className="hero-img" src={HeroBannerImage} alt="banner-img"/>
      <HeroBanner/>
      <SearchExercises
        setExercises={setExercises}
        setYoutubeVideos={setYoutubeVideos}
      />
      <Exercises
        exercises={exercises}
      />
      <ExerciseVideos
        youtubeVideos={youtubeVideos}
      />
    </Box>
  )
}

export default Home