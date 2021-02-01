import Link from 'next/link';

import { Container, Title } from '../styles/header';

const Header = (props: any) => {
    return (
        <Container>
            <Link href="/">
                <Title>User List</Title>
            </Link>

            {props.children}
        </Container>
    );
}

export default Header;