import styled, { css } from "styled-components";

const Button = styled.button`
    border: none;
    border-radius: 10px;
    color : #fff;
    cursor: pointer;
    font-family: Montserrat, sans-serif;
    text-decoration: none;

    //Default Padding & Font Size
    font-size: ${(props)=> props.theme.sizes.md.fontSize};
    padding: ${(props)=> props.theme.sizes.md.padding};

    //Props Variant
    background-color: ${(props)=>
        props.theme.colors[props.variant] || props.theme.colors['primary']
    };

    //Props Full
    ${(props)=> props.full && css`
        display: block;
        width: 100%;
    `}

    //Props Size
    ${(props)=> props.size && css`
        font-size: ${props.theme.sizes[props.size].fontSize};
        padding: ${props.theme.sizes[props.size].padding};
    `}
`;

export default Button;



