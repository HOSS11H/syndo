import React, { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled from 'styled-components';
import Logo from '../../Logo/Logo';

const SideDrawerWrapper = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
    @media (min-width: 500px) {
        display: none;
    }
    ${ ( { opened } ) => opened ?  'transform: translateX(0);' : 'transform: translateX(-100);' }
`


const SideDrawer = ( props ) => {
    
    const {  event: closeSideDrawer } = props ;

    const authCtx = useContext(AuthContext);


    return (
        <React.Fragment>
            <Backdrop show={props.opened} remove={closeSideDrawer} />
            <SideDrawerWrapper opened={props.opened} >
                <Logo /> 
                <nav onClick={closeSideDrawer}>
                    <NavigationItems isAuth={authCtx.isLoggedIn} />
                </nav>
            </SideDrawerWrapper>

        </React.Fragment>
    );    
};

export default SideDrawer;