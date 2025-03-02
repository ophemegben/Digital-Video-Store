import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardActionArea, CardContent } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";

const FeaturedShows = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/featuredShows')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/tv-shows/${id}`);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <div style={{ fontSize: '30px', color: '#fff' }}>›</div>,
    prevArrow: <div style={{ fontSize: '30px', color: '#fff' }}>‹</div>,
  };

  return (
    <Box className="featured-movies">
      <Typography variant="h6" marginLeft="10px">
        Featured Shows
        <Link to="/tv-shows"
          style={{
            marginLeft: "40px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            color: "#fff"
          }}>
          See more <ArrowForwardIosIcon />
        </Link>
      </Typography>
      <Slider {...settings}>
        {shows.map(show => (
          <Card key={show.id} className="movie-card">
            <CardActionArea onClick={() => handleCardClick(show.id)}>
              <CardMedia
                component="img"
                image={show.smallPoster}
                alt={show.title}
                className="movie-image"
              />
              <CardContent className='card-content'>
                <Typography variant="body2">
                  {show.title} 
                </Typography>
                <Typography variant="body2">
                  {show.genre} | {show.year}
                </Typography>
              </CardContent>              
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedShows;