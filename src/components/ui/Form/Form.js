import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1rem;

    select {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
`;

export const StyledLabel = styled.label`
    color : ${(props) => props.color || props.theme.colors.primary};
    margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

