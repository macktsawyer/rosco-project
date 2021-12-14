import React from 'react';
import { StyledContainer } from '../Styles/Container.styled.js';
import { SideNav, SideUserList, NavList } from '../Styles/SideNav.styled.js';
import { StyledLink } from '../Styles/Nav.styled.js';
import { WholeContainer } from '../Styles/WholeContainer.styled.js';
import { ContentStyled } from '../Styles/Content.styled.js';

const Home = () => {
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
                    <p style={{fontSize: "120%"}}>
                    The React Open Source Components, ROSCo, is a project undertaken initially by Richard Gonzalez and Mack Sawyer. The hopes of this project was to allow a reusable components library for other developers to reference and use to speedily build their React projects.
                    <br/>
                    <br/>
                    This library was created with the full intent of allowing copy and paste code. The library itself was created using Styled Components and has been made to enable to user to copy the styling with the component itself. The user will need to install <a href="https://styled-components.com/">Styled Components</a> in order to use the styling. Please reference Styled Components if you need to learn more about utilizing it.
                    <br/>
                    <br/>
                    The original contributors have created the base components and site structure but will rely on future contributors to assist in the growth of the site and it's resources. We will apply a general style to the components and look forward to what others will bring to the project. If you'd wish to contribute to the project feel free to reach out on github towards <a href="https://github.com/macktsawyer">Mack Sawyer</a> or <a href="https://github.com/RichardGAnthology">Richard Gonzalez</a>.
                    </p>
                </ContentStyled>
            </StyledContainer>
        </WholeContainer>
    )
}

export default Home
