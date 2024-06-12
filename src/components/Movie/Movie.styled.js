import styled from "styled-components";

const StyledMovie = styled.div`
    margin-bottom: 1rem;

    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 0.5rem;
    }

    h3{
        color: rgb(25, 3, 104);
        font-size: 1.3rem;
        margin-bottom: 0rem;
    }

    p{
        color: #64748b;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    @media (min-width: 768px) {
      flex-basis: 50%;
    }

    @media (min-width: 992px) {
      flex-basis: 20%;
      padding: 1rem
    }
`;

export default StyledMovie;
