import styled from "styled-components";

const Image = styled.img`
    border-radius: ${(props) => props.borderRadius || "25px"};
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "auto"};
    object-fit: ${(props) => props.objectFit || "cover"};
    margin: ${(props) => props.margin || "0"};
`;

export default Image;
