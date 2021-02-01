import { keyframes } from 'styled-components';

const slideDown = keyframes`
    from {
        transform: translateY(-30vh);
    }

    to {
        transform: translateY(0vh);
    }
`;

export default slideDown;