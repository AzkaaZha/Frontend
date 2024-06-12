import { 
    StyledHero,
    StyledHeroLeft,
    StyledHeroRight
} from '../Hero/Hero.styled';
import { useState, useEffect } from 'react';
import Button from '../ui/Button/Button';
import { Heading, SubHeading, Paragraph } from '../ui/Typography/Typography';
import Image from '../ui/Media/Media';

function Hero() {

    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchMovie() {
            const url= "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

            const response = await fetch(url);
            const data = await response.json();

            setMovie(data);
        }
        fetchMovie();
    } , []);

    return (
        <StyledHero>
            <section>
                <StyledHeroLeft>
                    <Heading>{movie.Title}</Heading>
                    <SubHeading>Genre : {movie.Genre}</SubHeading>
                    <Paragraph>{movie.Plot}
                    </Paragraph>
                    <Button size="md" variant="primary">Watch Now</Button>
                </StyledHeroLeft>
                <StyledHeroRight>
                    <Image
                    src={movie.Poster} alt={movie.Title} />
                </StyledHeroRight>
            </section>
        </StyledHero>
    );
}

export default Hero;

