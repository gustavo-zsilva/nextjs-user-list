import { Container, Text, Date, DeleteButton, Row } from '../styles/card';

import api from '../services/api';

interface CardProps {
    name: string;
    date: string;
    id: string;
    isAdmin: boolean;
    timing: number;
}

const Card = ({ name, date, id, isAdmin, timing }: CardProps) => {

    const handleDeleteUser = async () => {
        await api.delete(`/${id}`);
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