import { useContext, useEffect, useState } from 'react';
import ThemeContext from '../../store/theme-context';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CircularProgress from '@mui/material/CircularProgress';

import PostContent from './PostContent/PostContent';
import Sidebar from './Sidebar/Sidebar';
import PostsContext from '../../store/posts-context';

const ComponentWrapper = styled.div`
    padding-top: 170px;
    padding-bottom: 123px;
    min-height: 100vh;
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

    const { match } = props;

    const themeCtx = useContext(ThemeContext);

    const postsCtx = useContext(PostsContext);

    const [ selectedPost , setSelectedPost ] = useState(null);
    const [ selectedPostIndex , setSelectedPostIndex ] = useState(null);

    useEffect(() => {
        const itemIndex =  postsCtx.posts.findIndex( item => item.id === match.params.postId );
        setSelectedPost(postsCtx.posts[itemIndex])
        setSelectedPostIndex(itemIndex)

    }, [postsCtx, match])

    
    return ( 
        <ComponentWrapper>
            {selectedPost ? (
                <Container maxWidth="lg">
                    <BreadcrumbsWrapper>
                        <Breadcrumbs sx={ {'& .MuiBreadcrumbs-separator': { margin: '0', } , } } 
                            separator={<NavigateNextIcon fontSize="small" sx={ { color: themeCtx.theme.vars.primary } } />} 
                            aria-label="breadcrumb">
                                <StyledLink to="/">Home</StyledLink>
                                <StyledLink to="/posts">posts</StyledLink>
                                <CurrentPage>{selectedPost.title}</CurrentPage>
                        </Breadcrumbs>
                    </BreadcrumbsWrapper>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <PostContent fetchedPost={selectedPost} />
                        </Grid>
                        <Grid item xs={12} md={3} />
                        <Grid item xs={12} md={3}>
                            <Sidebar postIndex={selectedPostIndex} />
                        </Grid>
                    </Grid>
                </Container>
                ) : (
                    <CircularProgress />
                ) 
            }
        </ComponentWrapper>
    );
}

export default SinglePost;