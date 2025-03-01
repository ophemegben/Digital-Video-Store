import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Card, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import "../css/Details.css";

const ShowDetailsPage = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/tv-shows/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched show data:", data); // Debugging
                setShow(data);
            })
            .catch(error => console.error('Error fetching show details:', error));
    }, [id]);

    if (!show) return <div>Loading...</div>;

    return (
        <Box className="movie-details">
            <Box className="large-poster-container">
                <img src={show.largePoster} alt={show.title} className="large-poster" />
                <Box className="overlay">
                    <Grid container spacing={4}>
                        <Grid size={{xs:12, sm:4}}>
                            <Card className="small-poster-card">
                                <CardMedia
                                    component="img"
                                    image={show.smallPoster}
                                    alt={show.title}
                                    className="small-poster"
                                />
                            </Card>
                        </Grid>
                        <Grid size={{xs:12, sm:8}}>
                            <Typography variant="h4" gutterBottom>
                                {show.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {show.genre} | {show.year} | {show.duration} min
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {show.synopsis}
                            </Typography>
                            <Box className="buttons">
                                <Button variant="contained" color="primary">
                                    Rent ${show.rentPrice}
                                </Button>
                                <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
                                    Buy ${show.buyPrice}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default ShowDetailsPage;