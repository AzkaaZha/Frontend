/* eslint-disable react/prop-types */
import StyledMovie from "./Movie.styled";
import Image from "../ui/Media/Media";

function Movie(props) {

    const { movie } = props;

    return (
        <StyledMovie>
            <Image
                src={movie.poster} 
                alt={movie.tittle} 
            />
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
            <p>{movie.year}</p>
        </StyledMovie>
    );
}

export default Movie;