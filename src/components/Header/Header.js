import React from 'react';
// Styled Components
import styled from 'styled-components';

const Navbar = styled.div`
    background-color: #1C2833;
    color: white;
    text-align: center;
`;

const Header = () => {
    return (
        <Navbar>
            <h3>Web Chat</h3>
        </Navbar>
    );
}

export default Header;