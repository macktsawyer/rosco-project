import React from 'react';
import { StyledContainer, InlineContainer } from '../Styles/Container.styled.js';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { StyledButton } from '../Styles/Button.styled.js';

const buttonSample = // React Markdown - A \ is needed before any backtick
`
import React from 'react';

const StyledButton = styled.div\`
display: flex;
justify-content: center;
align-content: center;
border: 1px solid black;
border-radius: 2px;
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
    &.redButton {
        background: #e33b3b;
        &:hover {
            background: #fc5b5b;
        }
    }
    &.greenButton {
        background: #57c447;
        &:hover {
            background: #7be06c;
        }
    }
    &.purpleButton {
        background: #a76bdb;
        &:hover {
            background: #b87feb;
        }
    }
    &.yellowButton {
        background: #cdcf38;
        &:hover {
            background: #d9db42;
        }
    }
    &.darkButton {
        background: #313438;
        &:hover {
            background: #1e2124;
        }
    }
\`;

const handleSubmit = () => {
    // Add your submit action here 
    console.log('Hello World');
}

const Nav = () => {
    return (
        <div>
            <buttonSample onClick={handleSubmit}>
                <h1>Button</h1>
            </buttonSample>
        </div>
    )
}

export default Buttons
`

const Buttons = () => {
    return (
        <div>
            <h3>Basic Buttons</h3>
            <StyledContainer className="center">
                <StyledContainer className="center">
                    <InlineContainer>
                        <li><StyledButton><h1>Button</h1></StyledButton></li>
                        <li><StyledButton className="redButton"><h1>Button</h1></StyledButton></li>
                        <li><StyledButton className="greenButton"><h1>Button</h1></StyledButton></li>
                        <li><StyledButton className="purpleButton"><h1>Button</h1></StyledButton></li>
                        <li><StyledButton className="yellowButton"><h1>Button</h1></StyledButton></li>
                        <li><StyledButton className="darkButton"><h1>Button</h1></StyledButton></li>
                    </InlineContainer>
                    <p style={{margin: "5px"}}>These are the basic buttons. If you want a different color you can easily change it with a className on the element and adding the color + Button. For example ' className="greenButton" '</p>
                    <SyntaxHighlighter>{buttonSample}</SyntaxHighlighter>
                </StyledContainer>
            </StyledContainer>
        </div>
    )
}

export default Buttons
