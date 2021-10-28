import React , { useContext } from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem';
import AuthContext from '../../../store/auth-context';

const NavigationItemsWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    @media (min-width: 500px) {
        flex-flow: row;
    }
`

const NavigationItems = ( props ) => {

    const authCtx = useContext(AuthContext);
    
    return (
        <NavigationItemsWrapper >
            <NavigationItem link='/' exact>store</NavigationItem>
            {authCtx.isLoggedIn && <NavigationItem link='/cart' >cart</NavigationItem> }
            {authCtx.isLoggedIn && <NavigationItem link='/orders' >orders</NavigationItem> }
            {!authCtx.isLoggedIn
            ? <NavigationItem link='/auth' >login</NavigationItem>
            : <NavigationItem link='/logout' >logout</NavigationItem> }
        </NavigationItemsWrapper>
    )
};

export default NavigationItems;