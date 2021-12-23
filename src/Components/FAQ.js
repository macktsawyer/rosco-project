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
                    <NavList><StyledLink to ="/getInvolved">How To Get Involved</StyledLink></NavList>
                    <NavList>Contributors</NavList>
                    <NavList><StyledLink to ="/FAQ">FAQ</StyledLink></NavList>
                    <NavList>Github</NavList>
                    <NavList>Support Us</NavList>
                </SideUserList>
            </SideNav>
            <StyledContainer>
                <ContentStyled>
                    <h2 style={{fontFamily: "'Bebas Neue', cursive"}}>What is this?</h2>
                    <p>The about page has more information but the React Open Source Components project, or ROSCo, is a reusable components library. The purpose is to provide the user with the ability to just copy, paste and go with a React component.</p>
                    <h2 style={{fontFamily: "'Bebas Neue', cursive"}}>How do I get involved?</h2>
                    <p>See the How to get involved page</p>
                    <h2 style={{fontFamily: "'Bebas Neue', cursive"}}>How do I see who has contributed?</h2>
                    <p>See the contributors page</p>
                    <h2 style={{fontFamily: "'Bebas Neue', cursive"}}>Where can I see some documentation?</h2>
                    <p>See the documentation page</p>
                </ContentStyled>
            </StyledContainer>
        </WholeContainer>
    )
}

export default FAQ
