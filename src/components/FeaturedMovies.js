import React, { useContext } from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardActionArea, CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MovieContext } from '../context/MovieContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";

const FeaturedMovies = () => {
  const { featuredMovies, loading } = useContext(MovieContext);
  const navigate = useNavigate();

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
      { breakpoint: 1200, settings: { slidesToShow: 5, slidesToScroll: 3 } }, // Large screens
      { breakpoint: 900, settings: { slidesToShow: 4, slidesToScroll: 2 } },// Medium screens
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Small screens
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Extra small screens
    ]
  };

  if (loading) {
    return <Typography className="loading-text">Loading featured movies...</Typography>;
  }

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
          See more <ArrowForwardIosIcon fontSize="small" />
        </Link>
      </Typography>
      <Slider {...settings}>
        {featuredMovies.slice(0, 10).map(movie => (
          <Card key={movie.id} className="movie-card">
            <CardActionArea onClick={() => handleCardClick(movie.id)}>
              <CardMedia
                component="img"
                image={movie.smallPoster}
                alt={movie.title}
                className="movie-image"
              />
              <CardContent className='card-content'>
                <Typography variant="body2" >
                  {movie.title}
                </Typography>
                <Typography variant="body2">
                  {movie.genre} | {movie.releaseYear}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default FeaturedMovies;