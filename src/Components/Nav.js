import React from 'react'
import { List, UserList, NavStyledContainer, StyledLink } from '../Styles/Nav.styled.js';

const Nav = () => {
    return (
        <NavStyledContainer>
            <UserList>
                <List>
                    <StyledLink to='/'>Home</StyledLink>
                </List>
                <List>
                    <StyledLink to='/Navbars'>Navbars</StyledLink>
                </List>
                <List>
                    <StyledLink to='/Buttons'>Buttons</StyledLink>
                </List>
                <List>
                    <StyledLink to='/Forms'>Forms</StyledLink>
                </List>
            </UserList>
        </NavStyledContainer>
    )
}

export default Nav
