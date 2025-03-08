import React, { useContext } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardActionArea, CardContent } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";

const FeaturedShows = () => {
  const { shows, loading } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/tv-shows/${id}`);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900, // Medium screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // Small screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <Typography className="loading-text">Loading featured shows...</Typography>;
  }

  return (
    <Box className="featured-movies">
      <Typography variant="h6" marginLeft="10px" className='section-title'>
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
          See more <ArrowForwardIosIcon fontSize="small"/>
        </Link>
      </Typography>
      <Slider {...settings}>
        {shows.slice(0,10).map(show => (
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