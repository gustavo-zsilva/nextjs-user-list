import { Container, Text, Date, DeleteButton, Row } from '../styles/card';

import api from '../services/api';

const Card = ({ name, date, id, isAdmin }) => {

    const handleDeleteUser = async () => {
        await api.delete(`/${id}`);
    }

    return (
        <Container>
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