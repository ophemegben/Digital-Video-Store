import React, { useEffect, useState } from 'react';
import { Typography, Grid2, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "../css/Listing.css";

const MovieListings = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div className='header-custom'>
      <Typography variant="h5" gutterBottom sx={{ paddingLeft: "65px" }}>Movies</Typography>
      <Grid2 container spacing={1} className="movie-listing">
        {movies.map(movie => (
          <Grid2 size xs={12} sm={6} md={4} lg={3} key={movie.id}>
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