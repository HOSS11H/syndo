import { useState , useContext} from 'react';
import ThemeContext from '../../../store/theme-context';

import styled from 'styled-components';

import Resala from '../../../images/logos/resala.jpg';
import ChartImg from '../../../images/charts/chart.png';
import Client from '../../../images/clients/client.jpg';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TabPanel from '../../../components/UI/TabPanel/TabPanel';
import PostModal from './PostModal/PostModal';

const ContentWrapper = styled.div`
    margin-bottom: 10px;
`
const PostHead = styled.div`
    margin-bottom: 11px;
`
const PostImage = styled.img`
    display: block;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    width: 110px; 
    height: 90px;
    object-fit: cover;
    background-color: #eeeeee;
    margin-bottom: 15px;
    border-radius: 8px;
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
    border-radius: 22px;
    transition: 0.3s ease-in-out;
    text-transform: capitalize;
`
const TabContent = styled.div`
    padding-top: 26px;
`

const BlockInfo = styled.div`
    margin-bottom: 27px;
    h3 {
        font-size: 19px;
        font-weight: 900;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 10px;
    }
    h4 {
        font-size: 17px;
        font-weight: 900;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 10px;
    }
    p {
        font-size: 13px;
        font-weight: 400;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0px;
        }
        @media screen and (min-width: 1200px) {
            max-width: 68%
        }
    }
`
const ModelImage = styled.img`
    display: block;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    max-width: 100%; 
    object-fit: cover;
    background-color: #eeeeee;
    margin-bottom: 15px;
    border-radius: 8px;
`
const BlockStats = styled.div`
    h4 {
        font-size: 17px;
        font-weight: 900;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 12px;
    }
`
const Counter = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 27px;
    @media screen and (max-width: 599.98px) {
        margin-bottom: 15px;
    }
    h5 {
        font-size: 26px;
        font-weight: 700;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 8px;
    }
    p {
        font-size: 13px;
        font-weight: 700;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 0px;
    }
`

const BlockCharts = styled.div`
    margin-top: 28px;
    text-align:center;
    margin-bottom: 33px;
`
const Chart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    @media screen and (max-width: 900px) {
        max-width: 250px;
        margin: 0 auto;
    }
    h5 {
        font-size: 14px;
        font-weight: 400;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
    }
`
const ChartImage = styled.img`
    display: block;
    width: 100%; 
    object-fit: cover;
    margin-bottom: 25px;
`

const BlockCards = styled.div`
    text-align: center;
    margin-bottom: 88px;
    @media screen and (max-width: 900px) {
        margin-bottom: 62px;
    }
    &:last-child {
        margin-bottom: 0;
    }
    h4 {
        font-size: 17px;
        font-weight: 900;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 45px;
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 900px) {
        max-width: 370px;
        margin: 0 auto;
    }
    h5 {
        font-size: 14px;
        font-weight: 500;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 19px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    p {
        font-size: 13px;
        font-weight: 400;
        color: ${ ( { theme } ) => theme.palette.mode === 'dark' ? theme.vars.white : theme.vars.black };
        transition: 0.3s ease-in-out;
        text-transform: capitalize;
        margin-bottom: 0;
    }
`
const CardImg = styled.img`
    display: block;
    max-width: 155px; 
    height: 90px;
    object-fit: cover;
    background-color: #eeeeee;
    margin:0 auto 31px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    border-radius: 8px;
`

// Function To Handle Tabs Index
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const PostContent = ( props ) => {

    const [ currentTab , setCurrentTab ] = useState(1);

    const [ modalOpened , setModalOpened ] = useState(false);

    const themeCtx = useContext(ThemeContext);

    const currentTabHandler = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const openModalHandler = ( e ) => {
        e.preventDefault();
        setModalOpened(true);
    };
    const closeModalHandler = ( ) => {
        setModalOpened(false);
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
                <InvestButton onClick={openModalHandler} >invest now</InvestButton>
            </PostHead>
            <PostModal show={modalOpened} close={closeModalHandler} />
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
                <TabContent>
                    Content Not Available At The Moment
                </TabContent>
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                <TabContent>
                    <BlockInfo>
                        <h3>about the company</h3>
                        <p>Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil standard dummy text ever fugerspiciatis collapsing 1500s.</p>
                    </BlockInfo>
                    <BlockInfo>
                        <h4>products &amp; services</h4>
                        <p>Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil standard dummy text ever fugerspiciatis collapsing 1500s.</p>
                    </BlockInfo>
                    <BlockInfo>
                        <h4>competitive landscape</h4>
                        <p>Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil standard dummy text ever fugerspiciatis collapsing 1500s.</p>
                    </BlockInfo>
                    <BlockInfo>
                        <h4>company size</h4>
                        <p>11-50 employee</p>
                    </BlockInfo>
                    <BlockInfo>
                        <h4>business model</h4>
                        <p>Lorem ipsum dolor sit amet consectetur da Ecperm elit. Iure adipisci nihil standard dummy text ever fugerspiciatis collapsing 1500s.</p>
                        <Grid container >
                            <Grid item xs={12} md={6} >
                                <ModelImage src={Resala} />
                            </Grid>
                        </Grid>
                    </BlockInfo>
                    <BlockStats>
                        <h4>traction</h4>
                        <Grid container >
                            <Grid item xs={6} sm={4} >
                                <Counter>
                                    <h5>0</h5>
                                    <p>number of customers</p>
                                </Counter>
                            </Grid>
                            <Grid item xs={6} sm={4}  >
                                <Counter>
                                    <h5>0</h5>
                                    <p>active users</p>
                                </Counter>
                            </Grid>
                            <Grid item xs={6} sm={4}  >
                                <Counter>
                                    <h5>0</h5>
                                    <p>potential users</p>
                                </Counter>
                            </Grid>
                        </Grid>
                        <h4>financial perfomance</h4>
                        <Grid container >
                            <Grid item xs={6} sm={4}  >
                                <Counter>
                                    <h5>0</h5>
                                    <p>sales turnover</p>
                                </Counter>
                            </Grid>
                            <Grid item xs={6} sm={4} >
                                <Counter>
                                    <h5>0</h5>
                                    <p>gross profit margin</p>
                                </Counter>
                            </Grid>
                            <Grid item xs={6} sm={4} >
                                <Counter>
                                    <h5>0</h5>
                                    <p>company valuation</p>
                                </Counter>
                            </Grid>
                        </Grid>
                    </BlockStats>
                    <BlockCharts>
                        <Grid container spacing={{ xs: 0, sm: 3, md: 4 }} >
                            <Grid item xs={12} sm={6} >
                                <Chart>
                                    <ChartImage src={ChartImg} />
                                    <h5>graph 1</h5>
                                </Chart>
                            </Grid>
                            <Grid item xs={12} sm={6} >
                                <Chart>
                                    <ChartImage src={ChartImg} />
                                    <h5>graph 2</h5>
                                </Chart>
                            </Grid>
                        </Grid>
                    </BlockCharts>
                    <BlockCards >
                        <h4>key clients</h4>
                        <Grid container spacing={4} >
                            <Grid item xs={6} sm={4} >
                                <Card>
                                    <CardImg src={Client} />
                                    <h5>client 1</h5>
                                </Card>
                            </Grid>
                            <Grid item xs={6} sm={4}  >
                                <Card>
                                    <CardImg src={Client} />
                                    <h5>client 2</h5>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}  >
                                <Card>
                                    <CardImg src={Client} />
                                    <h5>client 3</h5>
                                </Card>
                            </Grid>
                        </Grid>
                    </BlockCards>
                    <BlockCards >
                        <h4>founding team</h4>
                        <Grid container spacing={4} >
                            <Grid item xs={6} sm={4} >
                                <Card>
                                    <CardImg src={Client} />
                                    <h5>name</h5>
                                    <p>job title</p>
                                </Card>
                            </Grid>
                            <Grid item xs={6} sm={4}  >
                                <Card>
                                    <CardImg src={Client} />
                                    <h5>name</h5>
                                    <p>job title</p>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={4}  >
                                <Card>
                                    <CardImg src={Client} />
                                    <h5>name</h5>
                                    <p>job title</p>
                                </Card>
                            </Grid>
                        </Grid>
                    </BlockCards>
                </TabContent>
            </TabPanel>
        </ContentWrapper>
    );
}

export default PostContent;