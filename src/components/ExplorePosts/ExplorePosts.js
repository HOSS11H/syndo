import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import Heading from '../UI/Heading/Heading';
import { NextButton } from '../UI/Nav/Nav';
import Post from './Post/Post';
import Resala from '../../images/logos/resala.jpg';
import AhlMasr from '../../images/logos/AhlMasr.png';

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

    const fetchedPosts = [
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
        {   
            id: Math.random() ,
            title: 'post title',
            img: AhlMasr,
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
        {   
            id: Math.random() ,
            title: 'post title',
            img: AhlMasr,
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

    const loadedPosts = fetchedPosts.map( (post) => {
        return (
            <Grid item key={post.id} sm={6} md={3}>
                <Post id={ post.id } title={ post.title } img={post.img} endDate={post.endDate} desc={post.desc} progress={post.progress} infos={post.infos} tags={post.tags} />
            </Grid>
        )
    })

    return (
        <ExplorePostsWrapper>
            <Container maxWidth="lg">
                <Grid container  >
                    <Grid item  lg={4}>
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