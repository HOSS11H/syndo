import styled from 'styled-components';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';



const Header = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #144b5b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`
const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 767.98px) {
        display: none;
    }
`

const Toolbar = (props) => {

    return (
    <Header>
        <Logo />
        <DrawerToggle clicked={props.sideDrawerToggle} />
        <Nav>
            <NavigationItems />
        </Nav>
    </Header>
    )
};

export default Toolbar;