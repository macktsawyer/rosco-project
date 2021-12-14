import styled from 'styled-components';

export const StyledButton = styled.div`
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
`;