import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {

    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function getRecommendationMovies() {
        
            const response = await axios (ENDPOINTS.RECOMMENDATION(id))
            setMovies(response.data.results)
        }

        getRecommendationMovies();
    }, [id]);
    return(
        <>
            <DetailMovie />
            <Movies movies={movies} title="Recommendation"/> 
        </>
    );
}

export default Detail 