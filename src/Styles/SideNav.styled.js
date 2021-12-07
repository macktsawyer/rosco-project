import styled from 'styled-components';

export const SideNav = styled.div`
    height: 80%;
    width: 10%;
    border-right: 1px solid black;
    margin-right: 15px;
`;

export const SideUserList = styled.ul`
    text-align: center;
`;

export const NavList = styled.li`
    list-style-type: none;
    font-family: 'Bebas Neue', cursive;
    font-size: 120%;
    padding-top: 15px;
    cursor: pointer;
    &:hover {
        color: darkblue;
    }
`;