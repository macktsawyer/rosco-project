import React from 'react';
import { StyledContainer } from '../Styles/Container.styled.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';
import { StyledButton } from '../Styles/Button.styled.js';


const Buttons = () => {
    return (
        <div>
            <h3>Basic Buttons</h3>
            <StyledContainer className="center">
                <StyledContainer>
                    <StyledButton><h1>Hello</h1></StyledButton>
                </StyledContainer>
            </StyledContainer>
        </div>
    )
}

export default Buttons
