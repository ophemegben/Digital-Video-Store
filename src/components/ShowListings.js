import React, { useEffect, useState } from 'react';
import { Typography, Grid2, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "../css/Listing.css";

const ShowListings = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/tv-shows/${id}`);
  };

  return (
    <div className='header-custom'>
      <Typography variant="h5" gutterBottom sx={{ paddingLeft: "65px" }}>TV Shows</Typography>
      <Grid2 container spacing={1} className="movie-listing">
        {shows.map(show => (
          <Grid2 size xs={12} sm={6} md={4} lg={3} key={show.id}>
            <Card className="listing-card">
              <CardActionArea onClick={() => handleCardClick(show.id)}>
                <CardMedia
                  component="img"
                  image={show.smallPoster}
                  alt={show.title}
                  className="listing-image"
                />
                <CardContent className='listing-card-content'>
                  <Typography variant="body2">
                    {show.title}
                  </Typography>
                  <Typography variant="body2">
                    {show.genre} | {show.year}
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

export default ShowListings;