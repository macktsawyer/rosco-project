import React from 'react';
import { SideNav, SideUserList, NavList } from '../Styles/SideNav.styled.js';
import { StyledLink } from '../Styles/Nav.styled.js';
import { WholeContainer } from '../Styles/WholeContainer.styled.js';
import { StyledContainer } from '../Styles/Container.styled.js';
import { ContentStyled } from '../Styles/Content.styled.js';

const Github = () => {
    return (
        <WholeContainer>
            <SideNav>
                <SideUserList>
                    <NavList><StyledLink to ="/Documentation">Documentation</StyledLink></NavList>
                    <NavList><StyledLink to ="/About">About The Project</StyledLink></NavList>
                    <NavList><StyledLink to ="/getInvolved">How To Get Involved</StyledLink></NavList>
                    <NavList>Contributors</NavList>
                    <NavList><StyledLink to ="/FAQ">FAQ</StyledLink></NavList>
                    <NavList><StyledLink to ="/Github">Github</StyledLink></NavList>
                    <NavList>Support Us</NavList>
                </SideUserList>
            </SideNav>
            <StyledContainer>
                <ContentStyled>
                    <h2 style={{fontFamily: "'Bebas Neue', cursive"}}>Getting Started</h2>
                    <p>Github</p>
                </ContentStyled>
            </StyledContainer>
        </WholeContainer>
    )
}

export default Github
