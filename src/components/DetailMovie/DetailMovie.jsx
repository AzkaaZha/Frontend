import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Button from "../ui/Button/Button";
import StyledDetailMovie from "./StyledDetailMovie";
import { Heading, Paragraph, SubHeading } from "../ui/Typography/Typography";
import ENDPOINTS from "../../utils/constants/endpoint";

function DetailMovie() {
    const {id} = useParams();
    const [movie, setMovie] = useState("");
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(()=>{
        async function getDetailMovie() {
            const response = await axios (ENDPOINTS.DETAIL(id))
            setMovie(response.data)
        }

        getDetailMovie();
    }, [id]);

    return (
        <>
            <StyledDetailMovie>
                <div className="poster">
                    <img 
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="{movie.title}" />
                </div>
                <div className="info">
                    <Heading>{movie.title}</Heading>
                    <SubHeading>{genres}</SubHeading>
                    <Paragraph>{movie.overview}</Paragraph>
                    <Button as="a" href={trailer}>
                        Watch
                    </Button>
                </div>
            </StyledDetailMovie>
        </>
    )
}

export default DetailMovie