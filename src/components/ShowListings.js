import React, { useContext } from 'react';
import { Typography, Grid2, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import "../css/Listing.css";

const ShowListings = () => {
  const { shows, loading } = useContext(MovieContext);
  const navigate = useNavigate();


  const handleCardClick = (id) => {
    navigate(`/tv-shows/${id}`);
  };

  if (loading) {
    return <Typography className="loading-text">Loading TV shows...</Typography>;
  }

  return (
    <div className='header-custom'>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', margin: '0 auto' }}>TV Shows</Typography>
      <Grid2 container spacing={2} className="movie-listing">
        {shows.map(show => (
          <Grid2 size={{xs:6, sm:4, md:3, lg:2}} key={show.id}>
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