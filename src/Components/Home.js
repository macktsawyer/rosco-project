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
                    <NavList>Contributors</NavList>
                    <NavList>FAQ</NavList>
                    <NavList>Github</NavList>
                    <NavList>Support Us</NavList>
                </SideUserList>
            </SideNav>
            <StyledContainer>
                <ContentStyled>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget auctor quam. Nullam risus nunc, ornare sit amet magna et, luctus mattis ligula. Cras iaculis auctor libero, sed sodales ipsum hendrerit eget. Nulla tempor rutrum lorem eu bibendum. Morbi a ante consectetur ligula vehicula tristique. Nunc odio ligula, vehicula non euismod ut, interdum sed neque. Fusce eu pulvinar libero. Vestibulum pharetra id tortor in elementum. Sed sit amet lobortis lorem. Pellentesque et ipsum sed tellus volutpat congue ac quis est. Aliquam lacus ligula, cursus vel auctor sit amet, tincidunt fringilla sem.
                    <br/>
                    <br/>
                    Donec placerat egestas varius. Nunc pellentesque rutrum malesuada. Cras feugiat massa sit amet sapien blandit lobortis. In non nibh ut tortor porttitor blandit. Fusce sodales molestie nisl. Nam commodo, lectus vel pellentesque eleifend, neque tellus fringilla elit, sit amet auctor mi purus at lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate mattis cursus. Quisque scelerisque aliquam elit ac placerat. Proin at magna non odio consequat dictum sed ut nisl. Sed maximus rhoncus nisi, quis egestas tortor commodo vel. Nam erat mi, eleifend ac mattis eu, suscipit eget nisl. Vestibulum et placerat eros, ut luctus mauris. Curabitur mauris risus, gravida ac tempor et, volutpat quis sem.
                    <br/>
                    <br/>
                    Ut eros ligula, euismod nec cursus eget, euismod scelerisque leo. Aliquam vel ligula placerat, placerat dui et, facilisis nunc. Vestibulum in arcu ipsum. Aenean tincidunt ex et leo semper tempus. Ut in fringilla tortor, sit amet viverra risus. Pellentesque ipsum ipsum, accumsan imperdiet commodo nec, tincidunt ut est. Suspendisse nec erat ut eros ultrices semper volutpat ut felis.
                    </p>
                </ContentStyled>
            </StyledContainer>
        </WholeContainer>
    )
}

export default Home
