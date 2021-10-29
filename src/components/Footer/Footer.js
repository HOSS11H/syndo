import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { FooterLogo } from '../Logo/Logo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';

const FooterWrapper = styled.div`

`
const Sympol = styled.h4`
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0px;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
`
const FooterWidget = styled.div`
    @media screen and (max-width: 600px) {
        margin-bottom: 40px;
        text-align: center;
    }
`
const FooterWidgetTitle = styled.h4`
    font-size: 16px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 20px;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
`

const FooterWidgetList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        display: block;
        margin-bottom: 14px;
        &:last-child {
            margin-bottom: 0;
        }
    }
`
const FooterWidgetLink = styled(NavLink)`
    display: inline-block;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    text-transform: capitalize;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    transition: 0.3s ease-in-out;
    &:hover {
        color: ${ ( { theme } ) => theme.vars.primary };
        transform: translateX(5px);
        @media screen and (max-width: 600px) {
            transform: translateX(0px);
        }
    }
`
const FooterCopyright = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    border-top: 1px solid ${ ( { theme } ) => theme.palette.mode === 'dark' ? 'rgba(84,84,84,0.6)' : theme.vars.black };
    margin-top: 62px;
    @media screen and (max-width: 600px) {
        padding-top: 15px;
        margin-top: 0px;
        text-align: center;
        flex-direction: column;
        justify-content: center;
    }
`
const FooterCopyrightLeft = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
        margin-bottom: 13px;
    }
    @media screen and (max-width: 500px) {
        justify-content:center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 0px;
    }
`
const FooterCopyrightRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`
const CopyrightStatus = styled.p`
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    margin-bottom: 0;
    margin-right: 30px;
    @media screen and (max-width: 500px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`
const CopyrightLink = styled(NavLink)`
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    margin-right: 30px;
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        color: ${ ( { theme } ) => theme.vars.primary };
    }
    @media screen and (max-width: 500px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`
const FooterLanguage = styled.div`
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    display: flex;
    align-items: center;
`

const Footer = props => {
    return (
        <FooterWrapper>
            <Container maxWidth="lg">
                <Grid container  >
                    <Grid item xs={12} sm={6}>
                        <FooterWidget>
                            <FooterLogo />
                            <Sympol >by the crowd for the crowd</Sympol>
                        </FooterWidget>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <FooterWidget>
                            <FooterWidgetTitle>products</FooterWidgetTitle>
                        </FooterWidget>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <FooterWidget>
                            <FooterWidgetTitle>company</FooterWidgetTitle>
                            <FooterWidgetList>
                                <li>
                                    <FooterWidgetLink to='/about' >about us</FooterWidgetLink >
                                </li>
                                <li>
                                    <FooterWidgetLink to='/risk' >risk</FooterWidgetLink >
                                </li>
                            </FooterWidgetList>
                        </FooterWidget>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <FooterWidget>
                            <FooterWidgetTitle>resources</FooterWidgetTitle>
                            <FooterWidgetList>
                                <li>
                                    <FooterWidgetLink to='/how-works'>how it works</FooterWidgetLink >
                                </li>
                                <li>
                                    <FooterWidgetLink to='/faq'>FAQ</FooterWidgetLink >
                                </li>
                            </FooterWidgetList>
                        </FooterWidget>
                    </Grid>
                </Grid>
                <FooterCopyright>
                    <FooterCopyrightLeft>
                        <CopyrightStatus>&copy; syndo 2021. All Rights Reserved</CopyrightStatus>
                        <CopyrightLink to='privacy-policy'>privacy policy</CopyrightLink>
                        <CopyrightLink to='legal-terms'>legal terms</CopyrightLink>
                    </FooterCopyrightLeft>
                    <FooterCopyrightRight>
                        <FooterLanguage>
                            Eng
                            <KeyboardArrowDownIcon />
                        </FooterLanguage>
                    </FooterCopyrightRight>
                </FooterCopyright>
            </Container>
        </FooterWrapper>
    )
}
export default Footer;