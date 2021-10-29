import styled from 'styled-components';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Heading from '../UI/Heading/Heading';
import Review from './Review/Review';
import ClientImg from '../../images/client.png';

// Direct React component imports
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/autoplay/autoplay.min.css'; // Autoplay module


const TestimonialsWrapper = styled.div`
    margin: 80px 0 70px;
    @media screen and (max-width: 899.98px) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    `

const Testimonials = ( ) => {
    
    const fetchedReviews = [ 
        {
            id: Math.random(),
            img: ClientImg,
            desc: ' "Lorem ipsum is simply a dummy text of the printing and typesetting industry" ',
            name: 'jane doe',
            company: 'company XYZ',
            title: 'CEO',
        },
        {
            id: Math.random(),
            img: ClientImg,
            desc: ' "Lorem ipsum is simply a dummy text of the printing and typesetting industry" ',
            name: 'jane doe',
            company: 'company XYZ',
            title: 'CEO',
        },
        {
            id: Math.random(),
            img: ClientImg,
            desc: ' "Lorem ipsum is simply a dummy text of the printing and typesetting industry" ',
            name: 'jane doe',
            company: 'company XYZ',
            title: 'CEO',
        },
    ]


    const loadedReviews = fetchedReviews.map( (review, index) => {
        return <SwiperSlide key={review.id} >
            <Review id={review.id}  desc={review.desc}  name={review.name} company={review.company} title={review.title} img={review.img} />
        </SwiperSlide>
    })


    return (
        <TestimonialsWrapper>
            <Container maxWidth="lg">
                <Grid container  >
                    <Grid item xs={12}  lg={4}>
                        <Heading margin='42px' >hear it from our doers</Heading>
                    </Grid>
                </Grid>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        "768": {
                            "slidesPerView": 2,
                            "spaceBetween": 20
                        },
                        "900": {
                            "slidesPerView": 2,
                            "spaceBetween": 30
                        },
                        "1200": {
                            "slidesPerView": 3,
                            "spaceBetween": 30
                        },
                    }}
                    >
                    {loadedReviews}
                </Swiper>
            </Container>
        </TestimonialsWrapper>
    )
}
export default Testimonials;