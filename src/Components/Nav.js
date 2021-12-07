import React from 'react'
import { List, UserList, NavStyledContainer } from '../Styles/Nav.styled.js';

const Nav = () => {
    return (
        <NavStyledContainer>
            <UserList>
                <List>
                    Home
                </List>
                <List>
                    Navbars
                </List>
                <List>
                    Buttons
                </List>
                <List>
                    Forms
                </List>
            </UserList>
        </NavStyledContainer>
    )
}

export default Nav
