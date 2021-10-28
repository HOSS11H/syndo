import React from 'react';

import Hero from "../../components/Hero/Hero";
import ExplorePosts from "../../components/ExplorePosts/ExplorePosts";

const Home = props => {
    return (
        <React.Fragment>
            <Hero />
            <ExplorePosts />
        </React.Fragment>
    )
}

export default Home;