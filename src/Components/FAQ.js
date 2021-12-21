import React from 'react';
import { SideNav, SideUserList, NavList } from '../Styles/SideNav.styled.js';
import { StyledLink } from '../Styles/Nav.styled.js';
import { WholeContainer } from '../Styles/WholeContainer.styled.js';
import { StyledContainer } from '../Styles/Container.styled.js';
import { ContentStyled } from '../Styles/Content.styled.js';

const FAQ = () => {
    return (
        <WholeContainer>
            <SideNav>
                <SideUserList>
                    <NavList>Documentation</NavList>
                    <NavList><StyledLink to ="/About">About The Project</StyledLink></NavList>
                    <NavList>How To Get Involved</NavList>
                    <NavList>Contributors</NavList>
                    <NavList>FAQ</NavList>
                    <NavList>Github</NavList>
                    <NavList>Support Us</NavList>
                </SideUserList>
            </SideNav>
            <StyledContainer>
                <ContentStyled>
                    <h2>What is this?</h2>
                    <p>See the about the project page</p>
                    <h2>How do I get involved?</h2>
                    <p>See the How to get involved page</p>
                    <h2>How do I see who has contributed?</h2>
                    <p>See the contributors page</p>
                    <h2>Where can I see some documentation?</h2>
                    <p>See the documentation page</p>
                </ContentStyled>
            </StyledContainer>
        </WholeContainer>
    )
}

export default FAQ
