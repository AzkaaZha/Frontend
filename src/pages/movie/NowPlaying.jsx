import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function NowPlayingMovie() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

      const response = await axios(url);
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

