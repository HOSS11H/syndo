import styled from 'styled-components';
import Resala from '../../../images/logos/resala.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContentWrapper = styled.div`

`
const PostHead = styled.div`

`
const PostImage = styled.img`
    display: block;
    box-shadow: 0 8px 10px rgba(0,0,0,0.15);
    width: 110px; 
    height: 90px;
    object-fit: cover;
    background-color: #eeeeee;
    margin-bottom: 15px;
`
const PostTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
    margin-bottom: 10px;
`
const AmountRaised = styled.p`
    font-size: 21px;
    font-weight: 700;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    margin-bottom: 15px;
`
const PostTags = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`
const Tag = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 30px;
    border-radius: 8px;
    background-color: #e3e3e3;
    font-size: 11px;
    font-weight: 400;
    text-transform: capitalize;
    color: ${ ( { theme } ) =>  theme.vars.black };
    margin-right: 4px;
    &:last-child {
        margin-right:0;
    }
`
const PostSocials = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`
const PostSocialLink = styled.a`
    display: flex;
    align-items: center;
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    transition: 0.3s ease;
    margin-right: 5px;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        color: ${ ( { theme } ) =>  theme.vars.primary }
    }
`
const InvestButton = styled.button`
    font-size:20px;
    width: 150px;
    font-weight: 700;
    padding: 0 25px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${ ( { theme } ) => theme.vars.primary  };
    color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
    border:0;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
    &:hover {
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.black : theme.vars.white };
    }
`




const PostContent = ( props ) => {

    const loadedTags = ['loan', 'industry'].map( ( tag , index ) => {
        return <Tag key={index}>{tag}</Tag>
    })

    return (  
        <ContentWrapper>
            <PostHead>
                <PostImage src={Resala} />
                <PostTitle>Post Title</PostTitle>
                <AmountRaised>100,000 EGP raised</AmountRaised>
                <PostTags>
                    {loadedTags}
                </PostTags>
                <PostSocials>
                    <PostSocialLink href='javascribt:void(0)'>
                        <FacebookIcon sx={{ fontSize: 20 }} />
                    </PostSocialLink>
                    <PostSocialLink href='javascribt:void(0)'>
                        <InstagramIcon sx={{ fontSize: 20 }} />
                    </PostSocialLink>
                    <PostSocialLink href='javascribt:void(0)'>
                        <LinkedInIcon sx={{ fontSize: 20 }} />
                    </PostSocialLink>
                </PostSocials>
                <InvestButton>invest now</InvestButton>
            </PostHead>
        </ContentWrapper>
    );
}

export default PostContent;