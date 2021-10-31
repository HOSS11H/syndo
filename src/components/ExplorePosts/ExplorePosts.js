import { useContext } from 'react';
import PostsContext from '../../store/posts-context';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import Heading from '../UI/Heading/Heading';
import { NextButton } from '../UI/Nav/Nav';
import Post from './Post/Post';

const ExplorePostsWrapper = styled.div`
    margin: 60px 0 80px;
    @media screen and (max-width: 899.98px) {
        margin-bottom: 40px;
    }
`
const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 52px;
`
const NextButtonWrapper = styled.div`
    margin-left: auto;
`

const ExplorePosts = ( ) => {

    const history = useHistory();

    const redirectUserHandler = ( e ) => {
        e.preventDefault();
        history.push('/posts')
    }
    const PostsCtx = useContext(PostsContext);

    const loadedPosts = PostsCtx.posts.map( (post) => {
        return (
            <Grid item key={post.id} xs={12} sm={6} md={3}>
                <Post id={ post.id } title={ post.title } img={post.img} postClass={post.postClass} endDate={post.endDate} desc={post.desc} progress={post.progress} infos={post.infos} tags={post.tags} />
            </Grid>
        )
    })

    return (
        <ExplorePostsWrapper>
            <Container maxWidth="lg">
                <Grid container  >
                    <Grid item xs={12}  lg={4}>
                        <HeadingWrapper>
                            <Heading margin='0px' >explore posts</Heading>
                            <NextButtonWrapper onClick={redirectUserHandler}>
                                <NextButton />
                            </NextButtonWrapper>
                        </HeadingWrapper>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {loadedPosts}
                </Grid>
            </Container>
        </ExplorePostsWrapper>
    )
}
export default ExplorePosts;