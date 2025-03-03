import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardActionArea, CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";

const FeaturedShows = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/featuredMovies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movies/${id}`);
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

  return (
    <Box className="featured-movies">
      <Typography variant="h6" marginLeft="10px" className='section-title'>
        Featured Movies
        <Link to="/Movies"
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
        {movies.map(movie => (
          <Card key={movie.id} className="movie-card">
            <CardActionArea onClick={() => handleCardClick(movie.id)}>
              <CardMedia
                component="img"
                image={movie.smallPoster}
                alt={movie.title}
                className="movie-image"
              />
              <CardContent className='card-content'>
                <Typography variant="body2">
                  {movie.title} 
                </Typography>
                <Typography variant="body2">
                  {movie.genre} | {movie.year}
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