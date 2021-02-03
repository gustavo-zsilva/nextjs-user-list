import { Container, Text, Date, DeleteButton, Row } from '../styles/card';

import axios from 'axios';

interface CardProps {
    name: string;
    date: string;
    id: string;
    isAdmin: boolean;
    timing: number;
    users: {
        _id: string,
        name: string,
        data: Object,
        date: Date,
    }[];
    setUsers: Function;
}

const Card = ({ name, date, id, isAdmin, timing, users, setUsers }: CardProps) => {

    const handleDeleteUser = async () => {
        await axios.delete(`/api/${id}`);

        let newUsers = [...users];
        newUsers = newUsers.filter(user => user["_id"] !== id);

        setUsers(newUsers);
    }

    return (
        <Container timing={timing}>
            <Text>
                {name}
            </Text>

            <Row>
                <Date>
                    {date}
                </Date>

                {
                    isAdmin && (
                        <DeleteButton onClick={handleDeleteUser}>
                            Del
                        </DeleteButton>
                    )
                }
            </Row>
        </Container>
    );
}

export default Card;