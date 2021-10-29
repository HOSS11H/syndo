import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useContext } from 'react';
import ThemeContext from '../../store/theme-context';
import PostContent from './PostContent/PostContent';

const ComponentWrapper = styled.div`
    padding-top: 170px;
`
const BreadcrumbsWrapper = styled.div`
    margin-bottom: 22px;
`
const StyledLink = styled(NavLink)`
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
`
const CurrentPage = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
    margin-bottom: 0;
`

const SinglePost =  ( props ) => {

    const themeCtx = useContext(ThemeContext);
    
    return ( 
        <ComponentWrapper>
            <Container maxWidth="lg">
                <BreadcrumbsWrapper>
                    <Breadcrumbs sx={ {'& .MuiBreadcrumbs-separator': { margin: '0', } , } } 
                        separator={<NavigateNextIcon fontSize="small" sx={ { color: themeCtx.theme.vars.primary } } />} 
                        aria-label="breadcrumb">
                            <StyledLink to="/">Home</StyledLink>
                            <StyledLink to="/posts">posts</StyledLink>
                            <CurrentPage>post title</CurrentPage>
                    </Breadcrumbs>
                </BreadcrumbsWrapper>
                <Grid container>
                    <Grid item md={6}>
                        <PostContent />
                    </Grid>
                    <Grid item md={6}>
                    </Grid>
                </Grid>
            </Container>
        </ComponentWrapper>
    );
}

export default SinglePost;