import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovie() {

      const response = await axios(ENDPOINTS.TOPRATED);
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

