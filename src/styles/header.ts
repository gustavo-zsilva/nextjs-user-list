import styled from 'styled-components';

import slideDown from '../animations/slideDown';

export const Container = styled.header`
    display: flex;
    border-bottom: 1px solid gray;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2rem;
    animation: ${slideDown} .5s ease-out;
`;

export const Title = styled.h1`
    cursor: pointer;
`;