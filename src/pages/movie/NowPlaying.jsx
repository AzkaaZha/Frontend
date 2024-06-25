import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovie() {
      const response = await axios(ENDPOINTS.NOWPLAYING);
      setMovies(response.data.results);
    }

    fetchNowPlayingMovie();
  } ,[]);
  return (
    <>
      <Hero />
      <Movies movies={movies}  title="Now Playing Movies"/>
    </>
  )
}

export default NowPlayingMovie;

