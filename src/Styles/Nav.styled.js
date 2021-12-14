import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavStyledContainer = styled.div`
display: flex;
justify-content: right;
min-width: 100vw;
    &.center {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`;

export const UserList = styled.ul`
display: flex;
margin-right: 40px;
`;

export const List = styled.li`
list-style: none;
display: inline-block;
margin: 10px;
cursor: pointer;
font-family: 'Bebas Neue', cursive;
font-size: 150%;
    &:visited {
        text-decoration: none;
    }
    &:hover {
        color: darkblue;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    &:link {
        text-decoration: none;
        color: black;
        font-family: 'Bebas Neue', cursive;
    }
    &:visited {
        text-decoration: none;
        color: black;
        font-family: 'Bebas Neue', cursive;
    }
    &:hover {
        color: darkblue;
        font-family: 'Bebas Neue', cursive;
    }
`;