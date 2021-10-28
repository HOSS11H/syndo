import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const LogoWrapper =styled(NavLink)`
    height: 11%;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.dark };
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-bottom: 32px;
    text-decoration: none;
    @media (min-width: 768px) {
        height: 80%;
        margin-bottom: 0px;
    }
`
const LogoSpan =styled.span`
    color: ${ ( { theme} ) => theme.vars.primary };
`

const Logo = ( ) => {
    return (
        <LogoWrapper to='/'> 
            synd <LogoSpan>o</LogoSpan>
        </LogoWrapper>
    )
}
export default Logo;