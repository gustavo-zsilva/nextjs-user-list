import { keyframes } from 'styled-components';

const slideSide = keyframes`
    from {
        opacity: 0;
        transform: translateX(-5vw);
    } to {
        opacity: 1;
        transform: translateX(0vw);
    }
`;

export default slideSide;