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
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
    @media (min-width: 768px) {
        flex-flow: row;
        margin-bottom: 0px
    }
`

const NavigationItems = ( props ) => {

    const authCtx = useContext(AuthContext);
    
    const userLoginHandler = ( e ) => {
        e.preventDefault();
        authCtx.login(Math.random())
    }
    
    return (
        <NavigationItemsWrapper >
            <NavigationItem link='/posts' exact>posts</NavigationItem>
            <NavigationItem link='/testimonials' exact>testimonials</NavigationItem>
            {!authCtx.isLoggedIn
            ? <NavigationItem link='/auth' clicked={userLoginHandler} >login</NavigationItem>
            : <NavigationItem link='/logout' >logout</NavigationItem> }
        </NavigationItemsWrapper>
    )
};

export default NavigationItems;