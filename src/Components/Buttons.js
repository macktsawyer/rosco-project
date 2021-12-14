import React from 'react';
import { StyledContainer } from '../Styles/Container.styled.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Editor from 'react-simple-code-editor';
import Code from './Code.js';
import Prism from 'prismjs';
import styled from 'styled-components';
import { StyledButton } from '../Styles/Button.styled.js';

const buttonSample = 
`

import React from 'react';



const Nav = () => {
    return (
        <div style={{
            display: flex;
            justifyContent: center;
            alignContent: center;
            border: 1px solid black;
            borderRadius: 2px;
            background: #3578D9;
            color: white;
            width: 100px;
            height: 50px;
            cursor: pointer;
                &:hover {
                    background-color: #4288ed;
                }
                h1 {
                    transform: translate(0, -225%);
                }
            }}
        </div>
    )
}

`

const Buttons = () => {
    return (
        <div>
            <h3>Basic Buttons</h3>
            <StyledContainer className="center">
                <StyledContainer className="center">
                    <StyledButton><h1>Hello</h1></StyledButton>
                    <Code code={buttonSample} language="jsx" />
                </StyledContainer>
            </StyledContainer>
        </div>
    )
}

export default Buttons
