import React from 'react';
import { StyledContainer } from '../Styles/Container.styled.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from 'styled-components';

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    border: 1px solid black;
    border-radius: 5px;
    background: #3578D9;
    color: white;
    width: 100px;
    height: 50px;
    h1 {
        transform: translate(0, -225%);
    }
`;

const Buttons = () => {
    return (
        <div>
            <h3>Basic Buttons</h3>
            <StyledContainer className="center">
                <StyledContainer>
                    <Button><h1>Hello</h1></Button>
                </StyledContainer>
            </StyledContainer>
        </div>
    )
}

export default Buttons
