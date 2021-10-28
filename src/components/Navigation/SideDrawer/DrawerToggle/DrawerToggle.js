import React from 'react';
import styled  from 'styled-components';

const HamburgerButton = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`
const HamburgerLine = styled.div`
    width: 80%;
    height: 2px;
    background-color: white;
`

const DrawerToggle = (props) => (
    <HamburgerButton onClick={props.clicked}>
        <HamburgerLine></HamburgerLine>
        <HamburgerLine></HamburgerLine>
        <HamburgerLine></HamburgerLine>
    </HamburgerButton>
);

export default DrawerToggle;