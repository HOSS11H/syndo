import React from 'react';

import Hero from "../../components/Hero/Hero";
import ExplorePosts from "../../components/ExplorePosts/ExplorePosts";
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = props => {
    return (
        <React.Fragment>
            <Hero />
            <ExplorePosts />
            <Testimonials />
        </React.Fragment>
    )
}

export default Home;