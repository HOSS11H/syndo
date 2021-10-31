import { useContext } from 'react';
import styled from 'styled-components';
import Post from '../../../components/ExplorePosts/Post/Post';
import Camel from '../../../images/logos/camel.jpg';
import Syndo from '../../../images/logos/syndo.jpg';
import PostsContext from '../../../store/posts-context';

const SidebarWrapper = styled.div`
    @media screen and (max-width:900px) {
        margin: 70px 0 0;
    }
`
const SponsorCard = styled.div`
    min-height:140px;
    background-color: #eaeaea;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    padding: 30px 25px 9px;
    max-width: 330px;
    margin: 35px auto 0;
    @media screen and (min-width:900px) {
        margin: 35px  25px 0;
    }
    @media screen and (min-width:1000px) {
        padding-left: 40px;
        padding-right: 40px;
    }
    img {
        max-width:100%;
        max-height: 80px;
    }
    h5 {
        font-size: 13px;
        font-weight: 700;
        color: ${ ( { theme } ) =>theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: uppercase;
        margin-bottom: 0;
    }
`


const Sidebar = props => {
    
    const postsCtx = useContext(PostsContext)

    let nextPostIndex;

    if ( props.postIndex < ( postsCtx.posts.length - 1 ) ) {
        nextPostIndex = props.postIndex + 1
    } else {
        nextPostIndex = props.postIndex - 1
    }

    const loadedPost = postsCtx.posts[nextPostIndex]

    return (
        <SidebarWrapper>
            <Post key={ loadedPost.id } id={ loadedPost.id } title={ loadedPost.title } img={loadedPost.img} postClass={loadedPost.postClass} 
                endDate={loadedPost.endDate} desc={loadedPost.desc} progress={loadedPost.progress} infos={loadedPost.infos} tags={loadedPost.tags} />
            <SponsorCard>
                <img src={Camel} alt='Sponsor' />
                <h5>lead invsetor</h5>
            </SponsorCard>
            <SponsorCard>
                <img src={Syndo} alt='Sponsor' />
                <h5>skin in the game</h5>
            </SponsorCard>
        </SidebarWrapper>
    )
}
export default Sidebar;