import { useRef } from 'react'
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Heading from '../UI/Heading/Heading';
import ClientImg from '../../images//clients/client.jpg';
import Client from './Client/Client';
import { PrevButton, NextButton } from '../UI/Nav/Nav';

// Direct React component imports
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';



// Import Swiper styles
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // Navigation module

const ClientsWrapper = styled.div`
    margin: 70px 0 90px;
    text-align: center;
    @media screen and (max-width: 899.98px) {
        margin-top: 40px;
        margin-bottom: 70px;
    }
`
const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        display: block;
        width: 1px;
        margin:0 10px
    }
`

const Clients = ( ) => {
    
    const swiperRef = useRef();

    const fetchedClients = [ 
        {
            id: Math.random(),
            img: ClientImg,
        },
        {
            id: Math.random(),
            img: ClientImg,
        },
        {
            id: Math.random(),
            img: ClientImg,
        },
        {
            id: Math.random(),
            img: ClientImg,
        },
    ]


    const loadedClients = fetchedClients.map( (client, index) => {
        return <SwiperSlide key={client.id} >
            <Client id={client.id}  img={client.img} />
        </SwiperSlide>
    })


    return (
        <ClientsWrapper>
            <Container maxWidth="lg">
                <Grid container  >
                    <Grid item xs={12}>
                        <Heading margin='52px' >featured by industry leaders</Heading>
                    </Grid>
                </Grid>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        "768": {
                            "slidesPerView": 3,
                            "spaceBetween": 20
                        },
                        "900": {
                            "slidesPerView": 4,
                            "spaceBetween": 30
                        },
                    }}
                    >
                    {loadedClients}
                </Swiper>
                <NavWrapper>
                    <PrevButton onClick={ ( ) => swiperRef.current.swiper.slidePrev() } />
                    <span></span>
                    <NextButton onClick={ ( ) => swiperRef.current.swiper.slideNext() } />
                </NavWrapper>
            </Container>
        </ClientsWrapper>
    )
}
export default Clients;