import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";

const FeaturedShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/featuredShows') 
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <div style={{ fontSize: '30px', color: '#fff' }}>›</div>,
    prevArrow: <div style={{ fontSize: '30px', color: '#fff' }}>‹</div>,
  };

  return (
    <Box className="featured-movies">
      <Typography variant="h5" gutterBottom>Featured Shows</Typography>
      <Slider {...settings}>
        {shows.map(show => (
          <Card key={show.id} className="movie-card">
            <CardMedia
              component="img"
              image={show.image}
              alt={show.title}
              className="movie-image"
            />
            <CardContent className='card-content'>
              <Typography variant="body2">
                {show.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedShows;