import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

      const response = await axios(url);
      setMovies(response.data.results);
    }

    fetchPopularMovie();
  } ,[]);
  return (
    <>
      <Hero />
      <Movies movies={movies}  title="Popular Movies"/>
    </>
  )
}

export default PopularMovie;

