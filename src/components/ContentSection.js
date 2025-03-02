import React from 'react';
import { Grid2, Typography } from '@mui/material';
import '../css/Home.css'

const ContentSection = () => {
    return (
        <div className='content-section'>
            <Grid2 container spacing={0.3}>
                <Grid2 size={{xs:12, sm:4}} className="content-text">
                    <Typography className='content-text1'> Live sports  </Typography>
                    <Typography className='content-text2'> COMING SOON</Typography>
                    <Typography className='content-text3'> TO VUDU!!</Typography>
                </Grid2>
                <Grid2 size={{sx:12, sm:2}} className="content-image-container">
                    <img src="\images\hockey.jpg" alt="Hockeys" className="content-image" />
                </Grid2>
                <Grid2 size={{sx:12, sm:2}} className="content-image-container">
                    <img src="\images\basketball.jpg" alt="Basketball" className="content-image" />
                </Grid2>
                <Grid2 size={{sx:12, sm:2}} className="content-image-container">
                    <img src="\images\americanfoot.jpg" alt="American Football" className="content-image" />
                </Grid2>
                <Grid2 size={{sx:12, sm:2}} className="content-image-container">
                    <img src="\images\football.jpg" alt="Soccer" className="content-image" />
                </Grid2>
            </Grid2>
        </div>
    );
};

export default ContentSection;