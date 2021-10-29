import styled from 'styled-components';
import Resala from '../../../images/logos/resala.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../../../components/UI/TabPanel/TabPanel';
import { useState } from 'react';
import ThemeContext from '../../../store/theme-context';
import { useContext } from 'react';

const ContentWrapper = styled.div`
    margin-bottom: 10px;
`
const PostHead = styled.div`
    margin-bottom: 5px;
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
    width: 120px;
    padding: 0 15px;
    height: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${ ( { theme } ) => theme.vars.primary  };
    color: ${ ( { theme } ) => theme.vars.white };
    font-size: 14px;
    font-weight: 500;
    border:0;
    outline: none;
    cursor: pointer;
    border-radius: 12px;
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
`
// Function To Handle Tabs Index
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const PostContent = ( props ) => {

    const [ currentTab , setCurrentTab ] = useState(0);

    const themeCtx = useContext(ThemeContext);

    const currentTabHandler = (event, newValue) => {
        setCurrentTab(newValue);
    };

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
            <Tabs value={currentTab} onChange={currentTabHandler} aria-label="basic tabs example" 
                sx= { { borderBottom: `1px solid ${themeCtx.theme.palette.mode === 'dark' ? themeCtx.theme.vars.white : themeCtx.theme.vars.black}`, 
                '& .MuiTabs-indicator': { backgroundColor: `${themeCtx.theme.palette.mode === 'dark' ? themeCtx.theme.vars.white : themeCtx.theme.vars.black}` },  }  }>
                <Tab label="pitch" {...a11yProps(0)} 
                    sx={ { 
                        padding: '12px 0 0px', marginRight: '55px', minWidth: 'unset', fontSize: '18px', 
                        fontWeight: 800, textTransform: 'capitalize',
                        color: `${themeCtx.theme.palette.mode === 'dark' ? themeCtx.theme.vars.white : themeCtx.theme.vars.black}` , 
                        '&.Mui-selected': { color: `${themeCtx.theme.palette.mode === 'dark' ? themeCtx.theme.vars.white : themeCtx.theme.vars.black}` } 
                    } } 
                />
                <Tab label="company" {...a11yProps(1)} 
                    sx={ { 
                        padding: '12px 0 0px', marginRight: '55px', minWidth: 'unset', fontSize: '18px', 
                        fontWeight: 800, textTransform: 'capitalize',
                        color: `${themeCtx.theme.palette.mode === 'dark' ? themeCtx.theme.vars.white : themeCtx.theme.vars.black}` , 
                        '&.Mui-selected': { color: `${themeCtx.theme.palette.mode === 'dark' ? themeCtx.theme.vars.white : themeCtx.theme.vars.black}` } 
                    } } 
                />
            </Tabs>
            <TabPanel value={currentTab} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                Item Two
            </TabPanel>
        </ContentWrapper>
    );
}

export default PostContent;