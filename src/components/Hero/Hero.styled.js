import styled from "styled-components"; 

export const StyledHero = styled.div`
    margin-bottom: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem 4rem;
        
        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }
    }
`;

export const StyledHeroLeft = styled.div`
    margin-bottom: 1rem;

    @media (min-width: 992px) {
        flex-basis: 80%;
    }
`;

export const StyledHeroRight = styled.div`

    @media (min-width: 992px) {
        flex-basis: 40%;
    }
`;

