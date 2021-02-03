import { useEffect, useState } from 'react';
import GlobalStyles from '../styles/globalStyles';
import { Container, List, Button, DeleteAllButton } from '../styles/index';
import Card from '../components/Card';
import Header from '../components/Header';

import Link from 'next/link';
import Head from 'next/head';

import axios from 'axios';

const Index = (props: any) => {

    const [users, setUsers] = useState([]);

    const [isAdmin, setIsAdmin] = useState(false);

    const handleDeleteAll = async () => {
        await axios.delete('/api');

        setUsers([]);
    }

    useEffect(() => {
        setUsers(props.data);

        if (props.ip.query === props.ip.ADMIN_IP) {
            setIsAdmin(true);
        }
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
                                    timing={index}
                                    users={users}
                                    setUsers={setUsers}
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

export async function getServerSideProps() {

    const response = await axios.get('http://localhost:3000/api');
    const data = await response.data.data;

    const ipResponse = await axios.get('http://ip-api.com/json/?fields=query');
    const { query } = await ipResponse.data;

    const ADMIN_IP = process.env.ADMIN_IP;

    return {
        props: {
            data,
            ip: {query, ADMIN_IP}
        }
    }
}

export default Index;