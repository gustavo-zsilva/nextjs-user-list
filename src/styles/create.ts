import styled from 'styled-components';

import { Button } from '../styles/index';

export const Container = styled.div`
    max-width: 50rem;
    margin: auto;
    text-align: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label.attrs({
    htmlFor: 'nameInput'
})`
    font-size: 16px;
    color: gray;
    padding-bottom: .4rem;
    text-align: left;
`;

export const Input = styled.input.attrs({
    type: 'text',
    name: 'nameInput'
})`
    padding: .6rem;
    border-radius: .2rem;
    border: 1px solid gray;
    width: 50%;
    box-shadow: 0px 0px 8px 1px rgba(0,0,0, 0.1);
    transition: .2s;
    outline: none;

    &:focus {
        border: 2px solid rgb(0, 204, 0);
        padding-right: 1rem;
    }
`;

export const SubmitButton = styled(Button).attrs({
    type: 'submit'
})`
    
`;