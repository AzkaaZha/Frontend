import styled from "styled-components";

const Image = styled.img`
    border-radius: ${(props) => props.borderRadius || "2rem"};
    max-width: 100%;
    height: auto;
    margin : ${(props) => props.margin || "0"};
`;  

export default Image;