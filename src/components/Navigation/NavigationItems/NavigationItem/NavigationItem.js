import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationItemWrapper = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    @media (min-width: 500px) {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }
`

const StyledLink = styled(NavLink)`
    color: #145554;
    text-decoration: none;
    text-transform: capitalize;
    width: 100%;
    box-sizing: border-box;
    transition: 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover , &:active , &.active {
        color: #40A4C8;
    }
    @media screen and (min-width: 500px) {
        text-transform: capitalize;
        color: white;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
        transition: 0.3s ease-in-out;
        &:hover , &:active , &.active {
            background-color: #67a9af6b;
            border-bottom: 4px solid #fff;
            color: white;
        }
    }
`;

const NavigationItem = (props) => (
    <NavigationItemWrapper>
        <StyledLink to={props.link} 
            activeClassName='active' exact={props.exact}>{props.children}</StyledLink>
    </NavigationItemWrapper>
);

export default NavigationItem;