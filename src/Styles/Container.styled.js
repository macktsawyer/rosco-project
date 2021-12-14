import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1px solid black;
    width: 85%;
    margin: 20px;
    &.center {
        display: flex;
        justify-content: center;
        flex-direction: column;
        h3 {
            width: 100%;
        }
    }
`;

export const InlineContainer = styled.div`
    margin: 5px;
    li {
        display: inline-block;
        margin: 5px;
    }
`;