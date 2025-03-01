import React, { useEffect, useState } from 'react';
import { Typography, Grid2, Card, CardMedia, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "../css/Listing.css";

const ShowListings = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/tv-shows') 
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  const handleCardClick = (id) => {
    navigate(`/tv-shows/${id}`);
  };

  return (
    <div className='header-custom'>
      <Typography variant="h5" gutterBottom sx={{paddingLeft:"100px"}}>Movies</Typography>
    <Grid2 container spacing={3} className="movie-listing">
      {shows.map(show => (
        <Grid2 item xs={12} sm={6} md={4} lg={3} key={show.id}>
          <Card className="movie-card">
            <CardActionArea onClick={() => handleCardClick(show.id)}>
              <CardMedia
                component="img"
                image={show.smallPoster}
                alt={show.title}
                className="movie-image"
              />
            </CardActionArea>
          </Card>
        </Grid2>
      ))}
    </Grid2>
    </div>
  );
};

export default ShowListings;