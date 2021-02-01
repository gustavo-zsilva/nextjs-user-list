import styled from 'styled-components';

export const Container = styled.div`
    margin: auto;
    max-width: 50rem;
    text-align: center;
`;

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: left;
    margin-bottom: 2rem;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    border: 0;
    border-radius: .2rem;
    padding: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: .2s;
    cursor: pointer;

    &:hover {
        background-color: rgb(0, 204, 0);
        color: white;
    }
`;

export const DeleteAllButton = styled(Button)`
    background-color: rgb(197, 0, 0);
    color: white;

    width: 100%;

    &:hover {
        background-color: rgb(197, 0, 0);
    }
`;