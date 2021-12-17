import React from 'react';
import { StyledContainer } from '../Styles/Container.styled.js';
import { List, UserList, NavStyledContainer } from '../Styles/Nav.styled.js';
import SyntaxHighlighter from 'react-syntax-highlighter';

const codeSample = `
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyledContainer = styled.div\`
    display: flex;
    justify-content: right;
    min-width: 100vw;
\`;

const UserList = styled.ul\`
    display: flex;
    margin-right: 40px;
\`;

const List = styled.li\`
    display: flex;
    list-style: none;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    font-family: 'Bebas Neue', cursive;
    font-size: 150%;
        &:link {
            text-decoration: none;
            color: black;
            font-family: 'Bebas Neue', cursive;
        }
        &:visited {
            text-decoration: none;
        }
        &:hover {
            color: darkblue;
        }
\`;

const StyledLink = styled(Link)\`
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
\`;

const Nav = () => {
    return (
        <div>
            <NavStyledContainer>
                <UserList>
                    <List>
                        <StyledLink>Home</StyledLink>
                    </List>
                    <List>
                        <StyledLink>Page 2</StyledLink>
                    </List>
                    <List>
                        <StyledLink>Page 3</StyledLink>
                    </List>
                    <List>
                        Forms
                    </List>
                </UserList>
            </NavStyledContainer>
        </div>
    )
}

export default Nav`

const Navbars = () => {
    return (
        <div>
            <h3>Basic Top Nav Bar</h3>
            <StyledContainer className="center">
                <StyledContainer>
                    <NavStyledContainer className="center">
                        <UserList>
                            <List>
                                Home
                            </List>
                            <List>
                                Page 1
                            </List>
                            <List>
                                Page 2
                            </List>
                            <List>
                                Page 3
                            </List>
                        </UserList>
                    </NavStyledContainer>
                    <p>In order to use the StyledLink you'll need to install and utilize React Router</p>
                    <SyntaxHighlighter>
                        {codeSample}
                    </SyntaxHighlighter>
                </StyledContainer>
            </StyledContainer>
        </div>
    )
}

export default Navbars