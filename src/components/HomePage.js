import React from 'react';
/* Import all the components*/
import Hero from './Hero';
import FeaturedMovies from './FeaturedMovies';
import FeaturedShows from './FeaturedShows';
import ContentSection from './ContentSection';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <FeaturedMovies />
            <FeaturedShows />
            <ContentSection />
        </div>
    );
};

export default HomePage;