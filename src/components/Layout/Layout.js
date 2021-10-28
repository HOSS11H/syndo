import { useCallback, useState , Fragment } from "react";
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";



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
                <main>
                    {props.children}
                </main>
            </Fragment>
    )

};


export default Layout;