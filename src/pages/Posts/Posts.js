import { useContext } from 'react';
import PostsContext from '../../store/posts-context';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Post from '../../components/ExplorePosts/Post/Post';
import useForm from '../../hooks/useForm';
import { searchForm } from '../../utils/formConfig';

const ExplorePostsWrapper = styled.div`
    margin: 180px 0 80px;
    @media screen and (max-width: 899.98px) {
        margin-top: 200px;
        margin-bottom: 40px;;
    }
`
const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 45px;
    p {
        font-size: 20px;
        font-weight: 500;
        text-transform: capitalize;
        margin-bottom: 5px;
        color: #9b9b9b;
    }
`
const Heading = styled.h3`
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 6px;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
`

const Posts = ( ) => {

    const PostsCtx = useContext(PostsContext);

    const { renderFormInputs: searchData , isFormValid: isSearchDataValid, form: searchDataValues } = useForm(searchForm)

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
                    <Grid item xs={12} >
                        <HeadingWrapper>
                            <Heading margin='0px' >posts</Heading>
                            <p>scout. invest. repeat.</p>
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
export default Posts;