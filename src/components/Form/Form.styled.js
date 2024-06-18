import styled from "styled-components";

export const FormStyled = styled.form`
    margin: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 7rem auto;

        section {
            margin: 0 1rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
        }
    }
`;

export const FormLeft = styled.div`
    img {
        margin-left: 10rem;
        max-width: 50%;
        height: auto;
        border-radius: 25px; 
    }

    @media (min-width: 992px) {
        flex-basis: 60%;
    }
`;

export const FormRight = styled.div`
    margin-bottom: 1rem;
    
    a{
        text-decoration: none;
    }

    @media (min-width: 992px) {
        flex-basis: 60%;
    }
`;

