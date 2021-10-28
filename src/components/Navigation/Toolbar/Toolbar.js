import styled from 'styled-components';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import Container from '@mui/material/Container';

const ContainerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Header = styled.header`
height: 90px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)' } ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    z-index: 90;
    `
const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767.98px) {
        display: none;
    }
`
const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`

const Button = styled.button`
    font-size:14px;
    font-weight: 700;
    padding: 0 20px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.dark };
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.dark : theme.vars.white };;
    border:0;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
    margin-left: 40px;
    &:hover {
        color: ${ ( { theme } ) => theme.vars.primary };;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Toolbar = (props) => {

    return (
    <Header>
        <Container maxWidth="lg">
            <ContainerWrapper>
                <Logo />
                <DrawerToggle clicked={props.sideDrawerToggle} />
                <NavWrapper>
                    <Nav>
                        <NavigationItems />
                    </Nav>
                    <Button>Get started</Button>
                </NavWrapper>
            </ContainerWrapper>
        </Container>
    </Header>
    )
};

export default Toolbar;