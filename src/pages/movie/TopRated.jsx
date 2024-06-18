import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function TopRatedMovie() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

      const response = await axios(url);
      setMovies(response.data.results);
    }

    fetchTopRatedMovie();
  } ,[]);
  return (
    <>
      <Hero />
      <Movies movies={movies}  title="Top Rated Movies"/>
    </>
  )
}

export default TopRatedMovie;

