import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Card, CardMedia, Tabs, Tab, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Movie from '@mui/icons-material/Movie';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import "../css/Details.css";

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:3001/movies/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Error fetching movie details:', error));
    }, [id]);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    if (!movie) return <div>Loading...</div>;

    return (
        <Box className="movie-details">
            <Box className="large-poster-container">
                <img src={movie.largePoster} alt={movie.title} className="large-poster" />
                <Box className="overlay">
                    <Card className="small-poster-card">
                        <CardMedia
                            component="img"
                            image={movie.smallPoster}
                            alt={movie.title}
                            className="small-poster"
                        />
                    </Card>
                    <Box className="details-content">
                        <Typography variant="h4" gutterBottom>
                            {movie.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {movie.genre} | {movie.year}
                        </Typography>

                        <Box className="play-trailer-buttons">
                            <Button variant="contained" color="inherit">
                                <PlayArrowIcon /> Play
                            </Button>
                            <Button variant="contained" color="inherit" sx={{ ml: 2 }}>
                                <Movie /> Trailer
                            </Button>
                            <Button variant="contained" color="inherit" sx={{ ml: 2 }}>
                                <ControlPointIcon /> List
                            </Button>
                        </Box>

                        <Tabs value={tabValue} onChange={handleTabChange} textColor="inherit">
                            <Tab label="Overview" sx={{textTransform: "none"}}/>
                            <Tab label="Details" sx={{textTransform: "none"}}/>
                        </Tabs>
                        {tabValue === 0 && (
                            <Typography variant="body2" gutterBottom>
                                {movie.overview}
                            </Typography>
                        )}
                        {tabValue === 1 && (
                            <Box>
                                <Typography variant="body2" gutterBottom>
                                    <strong>Cast:</strong> {movie.details.cast}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <strong>Director:</strong> {movie.details.director}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <strong>Release Date:</strong> {movie.details.releaseDate}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <strong>Awards:</strong> {movie.details.awards}
                                </Typography>
                            </Box>
                        )}
                        <Box className="buttons">
                            <Button variant="contained" color="primary">
                                Rent ${movie.rentPrice}
                            </Button>
                            <Button variant="contained" color="success" sx={{ ml: 2 }}>
                                Buy ${movie.buyPrice}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MovieDetailsPage;