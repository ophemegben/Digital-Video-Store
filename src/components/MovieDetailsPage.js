import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Card, CardMedia, Tabs, Tab } from '@mui/material';
import { MovieContext } from '../context/MovieContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Movie from '@mui/icons-material/Movie';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import "../css/Details.css";

const MovieDetailsPage = () => {
    const { id } = useParams();
    const { movies, loading } = useContext(MovieContext);
    const [tabValue, setTabValue] = useState(0);

    //Find movie with matching id
    const movie = movies.find(movie => String(movie.id) === id);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    if (loading) return <Typography className="loading-text">Loading movie details...</Typography>;

    return (
        <Box className="movie-details">
            <Box className="large-poster-container">
                <img src={movie.largePoster} alt={movie.title} className="large-poster" />
                <Box className="overlay">
                    <Box className="small-poster-card">
                    <Card>
                        <CardMedia
                            component="img"
                            image={movie.smallPoster}
                            alt={movie.title}
                            className="small-poster"
                        />
                    </Card>
                    </Box>
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
                            <Tab label="Overview" sx={{ textTransform: "none" }} />
                            <Tab label="Details" sx={{ textTransform: "none" }} />
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