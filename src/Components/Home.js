import React from 'react';
import { StyledContainer } from '../Styles/Container.styled.js';
import { SideNav, SideUserList, NavList } from '../Styles/SideNav.styled.js';
import { WholeContainer } from '../Styles/WholeContainer.styled.js';
import { ContentStyled } from '../Styles/Content.styled.js';

const Home = () => {
    return (
        <WholeContainer>
            <SideNav>
                <SideUserList>
                    <NavList>Documentation</NavList>
                    <NavList>About The Project</NavList>
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
                    This library was created with the full intent of allowing copy and paste code. The library itself was created using Styled Components and it is at the recommendation of the creators that Styled Components be used as well. The projects listed will show in-line code for ease of copy and paste usage but consider using your own CSS, SCSS, or Styled Component usage. If the project gains attention and traction it will be our desire to continue working on it full time and look into using NPM for dedicated usage.
                    <br/>
                    <br/>
                    The original contributors have created the base components and site structure but will rely on future contributors to assist in the growth of the site and it's resources. We will apply a general style to the components and look forward to what others will bring to the project.
                    </p>
                </ContentStyled>
            </StyledContainer>
        </WholeContainer>
    )
}

export default Home
