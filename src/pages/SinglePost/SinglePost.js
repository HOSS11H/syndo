import { useContext } from 'react';
import ThemeContext from '../../store/theme-context';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import Resala from '../../images/logos/resala.jpg';

import PostContent from './PostContent/PostContent';
import Sidebar from './Sidebar/Sidebar';

const ComponentWrapper = styled.div`
    padding-top: 170px;
    padding-bottom: 123px;
    @media screen and (max-width:900px) {
        padding-bottom: 53px;
    }
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

    const fetchedPost = [
        {   
            id: Math.random() ,
            title: 'post title',
            img: Resala,
            postClass: 'a',
            endDate: '11/10/2021',
            desc: 'Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil fugerspiciatis collapsing 1500s.',
            progress: 60,
            infos: {
                goal: '1,000,000',
                rate: '12%',
                tenor: '12 months',
                invested: '500,000',
                investors: '5',
                skin: '5%'
            },
            tags: ['loan', 'industry'],
        },
    ]

    
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
                    <Grid item xs={12} md={6}>
                        <PostContent />
                    </Grid>
                    <Grid item xs={12} md={3} />
                    <Grid item xs={12} md={3}>
                        <Sidebar />
                    </Grid>
                </Grid>
            </Container>
        </ComponentWrapper>
    );
}

export default SinglePost;