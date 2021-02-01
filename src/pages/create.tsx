import { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import GlobalStyles from '../styles/globalStyles';
import { Container, Input, Label, Form, SubmitButton } from '../styles/create';

import Header from '../components/Header';

import api from '../services/api';

const Create = () => {

    const router = useRouter();

    const [name, setName] = useState('');

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch('http://ip-api.com/json/?fields=status,country,regionName,city,lat,lon,isp,proxy,query');
        const userData = await response.json();

        await api.post('', {
            name,
            data: {...userData}
        })

        router.push('/');
    }

    return (
        <Container>
            <Head>
                <title>Create User</title>
            </Head>

            <Header />

            <div>
                <Form onSubmit={handleFormSubmit}>
                    <Label>
                        Nome
                    </Label>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <SubmitButton>
                        Submit
                    </SubmitButton>
                </Form>
            </div>

            <GlobalStyles />
        </Container>
    );
}

export default Create;