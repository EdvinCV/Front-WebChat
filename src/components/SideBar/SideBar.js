import React from 'react';
// Styled components
import styled from 'styled-components';

const Menu = styled.div`
    background-color: #597175;
    width: 10%;
    
    bottom: 0px;
`;


const SideBar = () => {
    return (
        <Menu>
            <ul>
                <li>Perfil</li>
            </ul>
        </Menu>
    );
}

export default SideBar;