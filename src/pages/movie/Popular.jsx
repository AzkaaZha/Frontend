import { useEffect } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint"
import { useContext } from "react";
import MoviesContext from "../../context/MoviesContext";

function PopularMovie() {

  const { setMovies } = useContext(MoviesContext);

  useEffect(function() {
    async function fetchPopularMovie() {
      try {
        const response = await axios.get(ENDPOINTS.POPULAR);
        console.log("Data dari API:", response.data.results); // Log data dari API
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    }

    fetchPopularMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Hero />
      <Movies title="Popular Movies"/>
    </>
  )
}

export default PopularMovie;

