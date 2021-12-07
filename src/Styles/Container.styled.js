import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1px solid black;
    width: 85%;
    &.center {
        display: flex;
        justify-content: center;
        flow-direction: column;
        h3 {
            width: 100%;
        }
    }
`;