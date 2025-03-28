import React, { useContext } from 'react';
import { Typography, Grid2, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import "../css/Listing.css";

const MovieListings = () => {
  const { movies, loading } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/movies/${id}`);
  };

  if (loading) {
    return <Typography className="loading-text">Loading movies...</Typography>;
  }

  return (
    <div className='header-custom'>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', margin: '0 auto' }}>Movies</Typography>
      <Grid2 container spacing={2} className="movie-listing">
        {movies.map(movie => (
          <Grid2 size={{xs:6, sm:4, md:3, lg:2}} key={movie.id}>
            <Card className="listing-card">
              <CardActionArea onClick={() => handleCardClick(movie.id)}>
                <CardMedia
                  component="img"
                  image={movie.smallPoster}
                  alt={movie.title}
                  className="listing-image"
                />
                <CardContent className='listing-card-content'>
                  <Typography variant="body2">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2">
                    {movie.genre} | {movie.year}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default MovieListings;