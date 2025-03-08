import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Card, CardMedia, Tabs, Tab } from '@mui/material';
import { MovieContext } from '../context/MovieContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Movie from '@mui/icons-material/Movie';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import "../css/Details.css";

const ShowDetailsPage = () => {
    const { id } = useParams();
    const { shows, loading } = useContext(MovieContext);
    const [tabValue, setTabValue] = useState(0);

    //Find show with matching id
    const show = shows.find(show => String(show.id) === id);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    if (loading) return <Typography className="loading-text">Loading movie details...</Typography>;

    return (
        <Box className="movie-details">
            <Box className="large-poster-container">
                <img src={show.largePoster} alt={show.title} className="large-poster" />
                <Box className="overlay">
                    <Box className="small-poster-card">
                        <Card>
                            <CardMedia
                                component="img"
                                image={show.smallPoster}
                                alt={show.title}
                                className="small-poster"
                            />
                        </Card>
                    </Box>
                    <Box className="details-content">
                        <Typography variant="h4" gutterBottom>
                            {show.title}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {show.genre} | {show.year}
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
                                {show.overview}
                            </Typography>
                        )}
                        {tabValue === 1 && (
                            <Box>
                                <Typography variant="body2" gutterBottom>
                                    <strong>Cast:</strong> {show.details.cast}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <strong>Director:</strong> {show.details.director}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <strong>Release Date:</strong> {show.details.releaseDate}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <strong>Episodes:</strong> {show.details.episodes}
                                </Typography>
                            </Box>
                        )}
                        <Box className="buttons">
                            <Button variant="contained" color="primary">
                                Rent ${show.rentPrice}
                            </Button>
                            <Button variant="contained" color="success" sx={{ ml: 2 }}>
                                Buy ${show.buyPrice}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ShowDetailsPage;