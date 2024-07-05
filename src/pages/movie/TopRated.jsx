import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useContext } from "react";
import MoviesContext from "../../context/MoviesContext";

function TopRatedMovie() {

  const { setMovies } = useContext(MoviesContext);

  useEffect(function() {
    async function fetchTopRatedMovie() {

      const response = await axios(ENDPOINTS.TOPRATED);
      setMovies(response.data.results);
    }

    fetchTopRatedMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } ,[]);
  return (
    <>
      <Hero />
      <Movies title="Top Rated Movies"/>
    </>
  )
}

export default TopRatedMovie;

