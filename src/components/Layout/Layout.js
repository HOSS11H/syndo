import { useCallback, useState , Fragment } from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import styled from 'styled-components';
import Footer from '../Footer/Footer';

const Main = styled.main`
    overflow-x: hidden;
`

const Layout = props => {
    
    const [ sideDrawerState , setSideDrawerState ] = useState( false );

    const sideDrawertoggleHandler = useCallback( ( ) => {
        setSideDrawerState( prevState => !prevState)
    }, [ ] )
    const sideDrawerCancelHandler = useCallback( ( ) => {
        setSideDrawerState( false )
    } , [ ] )

    return (
            <Fragment>
                <Toolbar sideDrawerToggle={sideDrawertoggleHandler}  />
                <SideDrawer opened={sideDrawerState} 
                    event={sideDrawerCancelHandler} 
                    authentication={props.isAuth} />
                <Main>
                    {props.children}
                    <Footer />
                </Main>
            </Fragment>
    )

};


export default Layout;