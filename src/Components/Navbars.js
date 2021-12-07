import React from 'react';
import { StyledContainer } from '../Styles/Container.styled.js';
import SyntaxHighlighter from 'react-syntax-highlighter';

const codeSample = `
const Nav = () => {
    return (
        <div style={{
            display: flex;
            justify-content: right;
            min-width: 100vw;
            }}>
            <ul style={{
            display: flex;
            margin-right: 40px;}}>
                <li style={{
                    display: flex;
                    list-style: none;
                    display: inline-block;
                    margin: 10px;
                    cursor: pointer;}}>
                    Home
                </li>
                <li style={{
                    display: flex;
                    list-style: none;
                    display: inline-block;
                    margin: 10px;
                    cursor: pointer;}}>
                    Link 1
                </li>
                <li style={{
                    display: flex;
                    list-style: none;
                    display: inline-block;
                    margin: 10px;
                    cursor: pointer;}}>
                    Link 2
                </li>
                <li style={{
                    display: flex;
                    list-style: none;
                    display: inline-block;
                    margin: 10px;
                    cursor: pointer;}}>
                    Link 3
                </li>
            </ul>
        </div>
    )
}

export default Nav`

const Navbars = () => {
    return (
        <div>
            <h3>Basic Top Nav Bar</h3>
            <StyledContainer className="center">
                <StyledContainer>
                    <SyntaxHighlighter>
                        {codeSample}
                    </SyntaxHighlighter>
                </StyledContainer>
            </StyledContainer>
        </div>
    )
}

export default Navbars