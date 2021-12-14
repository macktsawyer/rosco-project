import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { StyledContainer } from '../Styles/Container.styled.js';
import { StyledForm, StyledInput, StyledSubmit } from '../Styles/Forms.styled.js';

const sampleNav = 
`
import React from 'react;
import styled from 'styled-components;

const StyledForm = styled.form\`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 5px;
    padding: 5px;
\`;

const StyledInput = styled.input\`
    border: 1px solid #a3c1c4;
    border-radius: 4px;
    margin: 5px;
    padding: 2px;
    width: 75%;
\`;

const StyledSubmit = styled.button\`
    background: #42ccdb;
    border: 0px solid black;
    border-radius: 3px;
    color: white;
    width: 10%;
\`;

const Forms = () => {
    return (
        <div>
            <StyledForm>
                <StyledInput placeholder="blah blah blah">

                </StyledInput>
                <StyledInput placeholder="blah blah blah">

                </StyledInput>
                <StyledInput placeholder="blah blah blah">

                </StyledInput>
                <StyledSubmit>
                    Submit
                </StyledSubmit>
            </StyledForm>
        </div>
        )
    }

export default Forms

`

const Forms = () => {
    return (
        <div>
            <h3>Basic Forms</h3>
            <StyledContainer className="center">
                <StyledContainer className="center">
                    <StyledForm>
                        <StyledInput placeholder="blah blah blah">

                        </StyledInput>
                        <StyledInput placeholder="blah blah blah">

                        </StyledInput>
                        <StyledInput placeholder="blah blah blah">

                        </StyledInput>
                        <StyledSubmit>
                            Submit
                        </StyledSubmit>
                    </StyledForm>
                    <SyntaxHighlighter>
                        {sampleNav}
                    </SyntaxHighlighter>
                </StyledContainer>
            </StyledContainer>
        </div>
    )
}

export default Forms
