import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import "../css/Home.css";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/featuredShows') 
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <Box className="featured-movies">
      <Typography variant="h5" gutterBottom className="featured-title">
        Featured Movies
      </Typography>
      <Box className="movies-container">
        {movies.map(movie => (
          <Card key={movie.id} className="movie-card">
            <CardMedia
              component="img"
              image={movie.image}
              alt={movie.title}
              className="movie-image"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {movie.label}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedMovies;
