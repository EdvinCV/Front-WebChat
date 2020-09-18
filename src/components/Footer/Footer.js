import React from 'react';
// Styled Components
import styled from 'styled-components';

// Component Styled
const Foot = styled.footer`
    background-color: #1C2833;
    bottom: 0px;
    color: white;
    text-align: center;
    width: 100%;
`;

const Footer = () => {
    return (
        <Foot>
            <p>Todos los derechos reservados. &copy; {new Date().getFullYear() } - Edvin Calderón </p>
        </Foot>
    );
}

export default Footer;