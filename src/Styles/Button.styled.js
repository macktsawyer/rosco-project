import styled from 'styled-components';

export const StyledButton = styled.div`
display: flex;
justify-content: center;
align-content: center;
border: 1px solid black;
border-radius: 2px;
background: #6091eb;
color: white;
width: 100px;
height: 50px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
cursor: pointer;
    &:hover {
        background-color: #739ff0;
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
`;