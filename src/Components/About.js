import React from 'react';
import { SideNav, SideUserList, NavList } from '../Styles/SideNav.styled.js';
import { StyledLink } from '../Styles/Nav.styled.js';
import { WholeContainer } from '../Styles/WholeContainer.styled.js';
import { StyledContainer } from '../Styles/Container.styled.js';
import { ContentStyled } from '../Styles/Content.styled.js';

const About = () => {
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
                    <p style={{fontSize: "120%"}}>The React Open Source Components library is a free to use React Component resource collection. You, the user, are free to utilize all components on here in your own projects. In addition, the collection will be open to contributors to add their own components.</p>
                </ContentStyled>
            </StyledContainer>
        </WholeContainer>
    )
}

export default About
