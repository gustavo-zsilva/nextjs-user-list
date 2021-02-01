import styled from 'styled-components';

import { Button } from '../styles/index';

export const Container = styled.div`
    display: flex;
    border: 1px solid gray;
    padding: .5rem;
    padding-right: 1rem;
    padding-left: 1rem;
    margin-top: 1.6rem;
    border-radius: .2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 8px 1px rgba(0,0,0, 0.1);
    transition: .2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.04);
    }
`;

export const Text = styled.h2`
    font-weight: 400;
`;

export const Date = styled.h3`
    color: gray;
    font-weight: 300;
    font-size: 14px;
`;

export const DeleteButton = styled(Button)`
    background-color: rgb(197, 0, 0);
    color: white;
    margin-left: .6rem;

    &:hover {
        background-color: rgb(197, 0, 0);
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;