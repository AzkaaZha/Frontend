import { 
    StyledHero,
    StyledHeroLeft,
    StyledHeroRight
} from '../Hero/Hero.styled';
import { useState, useEffect } from 'react';
import Button from '../ui/Button/Button';
import { Heading, SubHeading, Paragraph } from '../ui/Typography/Typography';
import Image from '../ui/Media/Media';
import axios from 'axios';

function Hero() {

    const [movie, setMovie] = useState("");
    const API_KEY = import.meta.env.VITE_API_KEY;
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && movie.videos.results[0].key;

    useEffect(() => {
        async function fetchTrendingMovies() {
            const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
            const response = await axios(url)
            const firstMovie = response.data.results[0];
            return firstMovie;
        }
        fetchTrendingMovies();

        async function fetchDetailMovie() {
            const trendingMovie = await fetchTrendingMovies();
            const id = trendingMovie.id;

            const params = `?api_key=${API_KEY}&append_to_response=videos`;
            const url = `https://api.themoviedb.org/3/movie/${id}${params}`;
            const response = await axios(url);

            setMovie(response.data);
        }

        fetchDetailMovie();
    });

    return (
        <StyledHero>
            <section>
                <StyledHeroLeft>
                    <Heading>{movie.title}</Heading>
                    <SubHeading>Genre : {genres}</SubHeading>
                    <Paragraph>{movie.overview}
                    </Paragraph>
                    <Button size="md" variant="primary" as="a" href={`https://www.youtube.com/watch?v=${idTrailer}`}>Watch Movie</Button>
                </StyledHeroLeft>
                <StyledHeroRight>
                    <Image
                    src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.title} 
                    objectFit="cover"  />
                </StyledHeroRight>
            </section>
        </StyledHero>
    );
}

export default Hero;

