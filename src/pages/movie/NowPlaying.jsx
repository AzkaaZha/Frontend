import { useEffect} from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoint";
import { useContext } from "react";
import MoviesContext from "../../context/MoviesContext";

function NowPlayingMovie() {

  const { setMovies } = useContext(MoviesContext);

  useEffect(function () {
    async function fetchNowPlayingMovie() {
      const response = await axios(ENDPOINTS.NOWPLAYING);
      setMovies(response.data.results);
    }

    fetchNowPlayingMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } ,[]);
  return (
    <>
      <Hero />
      <Movies title="Now Playing Movies"/>
    </>
  )
}

export default NowPlayingMovie;

