/* eslint-disable react/prop-types */
import StyledMovie from "./Movie.styled";
import Image from "../ui/Media/Media";
import { Link } from "react-router-dom";

function Movie(props) {

    const { movie } = props;

    const tmdbImage = `http://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const year = movie.year || movie.release_date;

    return (
        <StyledMovie>
            <Image
                src={movie.poster || tmdbImage} 
                alt={movie.tittle} 
            />
            <Link to={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>
            </Link>
            <p>{movie.genre}</p>
            <p>{year}</p>
        </StyledMovie>
    );
}

export default Movie;