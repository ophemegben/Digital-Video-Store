import React, { useState, useContext } from 'react';
import { Typography, TextField, InputAdornment, Grid2, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';
import { Search } from '@mui/icons-material';
import "../css/Listing.css";

const ShowListings = () => {
  const { shows, loading } = useContext(MovieContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();

  // Function to get the show ID from the URL
  const handleCardClick = (id) => {
    navigate(`/tv-shows/${id}`);
  };

    // Function to handle search
    const handleSearch = async (event) => {
      const value = event.target.value;
      setSearchTerm(value);
  
      const baseURL = process.env.REACT_APP_API_URL;
  
      if (value.trim() === "") {
        setSearchResults(null);
        return;
      }
  
      // Fetch search results from the API
      try {
        const results = await fetch(`${baseURL}/tvshows/search?title=${searchTerm}`)
          .then(response => response.json())
          .catch(error => console.error('Error fetching search results:', error));
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

  if (loading) {
    return <Typography className="loading-text">Loading TV shows...</Typography>;
  }

  return (
    <div className='header-custom'>
      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', margin: '0 auto' }}>TV Shows</Typography>
      <div style={{ textAlign: 'center', margin: '1rem 0' }}>
        <TextField
          variant="outlined"
          label="Search for TV shows"
          size='small'
          value={searchTerm}
          onChange={handleSearch}
          InputProps={{
            style: { color: 'white' },
            startAdornment: (
              <InputAdornment position="start">
                <Search style={{ color: 'white'}}/>
              </InputAdornment>
            )
          }}
          InputLabelProps={{ style: { color: 'white' } }}
          sx={{
            width: '80%',
            maxWidth: '500px',
            borderRadius: '5px',
            input: { color: 'white' },
            label: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
            />
      </div>
      <Grid2 container spacing={2} className="movie-listing">
        {(searchResults || shows).map(show => (
          <Grid2 size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={show.id}>
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
                    {show.genre} | {show.releaseYear}
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