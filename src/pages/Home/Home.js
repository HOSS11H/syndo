import React from 'react';

import Hero from "../../components/Hero/Hero";
import ExplorePosts from "../../components/ExplorePosts/ExplorePosts";
import Testimonials from '../../components/Testimonials/Testimonials';
import Clients from '../../components/Clients/Clients';
import Footer from '../../components/Footer/Footer';

const Home = props => {
    return (
        <React.Fragment>
            <Hero />
            <ExplorePosts />
            <Testimonials />
            <Clients />
            <Footer />
        </React.Fragment>
    )
}

export default Home;