import styled from 'styled-components';

const StyledNavbar = styled.div`
    background-color: rgb(25, 3, 104);
    height: auto;
    background-size: 100%;
    padding: 1rem;
    color: #fff;
    font-size: 14px;

    nav {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 300px;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        font-size: 17px;
    }

    li {
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none; 
        color: white; 
        font-size: 16px; 
    }

    a :hover {
        color: #64748b;
    }

    @media (min-width: 768px) {
        nav {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        img {
            width: 200px;
        }

        ul {
            flex-direction: row;
        }

        li {
            margin-bottom: 0;
            margin-left: 1rem;
        }
    }
`;

export default StyledNavbar;
