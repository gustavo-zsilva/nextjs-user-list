import { useEffect, useState } from 'react';
import GlobalStyles from '../styles/globalStyles';
import { Container, List, Button, DeleteAllButton } from '../styles/index';
import Card from '../components/Card';
import Header from '../components/Header';

import Link from 'next/link';
import Head from 'next/head';

import api from '../services/api';
const ADMIN_IP = process.env.ADMIN_IP;

const Index = (props: any) => {

    const [users, setUsers] = useState([]);

    const [isAdmin, setIsAdmin] = useState(false);

    const getIp = async () => {
        const response = await fetch('http://ip-api.com/json/?fields=query');
        const { query } = await response.json();

        if (query === ADMIN_IP) {
            setIsAdmin(true);
        }
    }

    const handleDeleteAll = async () => {
        await api.delete('');
    }

    useEffect(() => {
        setUsers(props.data);

        getIp();
    }, [])

    return (
        <Container>
            <Head>
                <title>User List</title>
            </Head>

            <Header>
                <Link href="/create">
                    <Button>
                        Add Your User
                    </Button>
                </Link>
            </Header>

            <div>
                <List>
                    {
                        users.map((user, index) => {
                            return (
                                <Card
                                    key={index}
                                    isAdmin={isAdmin}
                                    name={user.name}
                                    date={user.date}
                                    id={user['_id']}
                                />
                            )
                        })
                    }
                </List>
            </div>

            {
                isAdmin && (
                    <DeleteAllButton onClick={handleDeleteAll}>
                        Delete All
                    </DeleteAllButton>
                )
            }

            <GlobalStyles />
        </Container>
    );
}

export async function getStaticProps() {

    const response = api.get('');
    const data = (await response).data.data;

    return {
        props: {
            data
        },
        revalidate: 10
    }
}

export default Index;