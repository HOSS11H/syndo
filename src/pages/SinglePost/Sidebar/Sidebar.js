import styled from 'styled-components';
import Post from '../../../components/ExplorePosts/Post/Post';
import AhlMasr from '../../../images/logos/AhlMasr.png';
import Camel from '../../../images/logos/camel.jpg';
import Syndo from '../../../images/logos/syndo.jpg';

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

    const fetchedPosts = [
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
            <Post key={ post.id } id={ post.id } title={ post.title } img={post.img} postClass={post.postClass} endDate={post.endDate} desc={post.desc} progress={post.progress} infos={post.infos} tags={post.tags} />
        )
    })

    return (
        <SidebarWrapper>
            {loadedPosts}
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