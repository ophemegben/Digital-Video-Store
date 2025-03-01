import React from 'react';
import { Grid2, Typography } from '@mui/material';

const ContentSection = () => {
    return (
        <div className='content-section'>
            <Grid2 container spacing={2}>
                <Grid2 size={{xs:12, sm:4}}>
                    <Typography className='content-text'> $5.99  </Typography>
                    <Typography className='content-text2'> EVERY</Typography>
                    <Typography className='content-text3'> THURSDAY</Typography>
                </Grid2>
                <Grid2 size={{sx:12, sm:8}}>
                <Typography color='white' variant="h3"> This is the second</Typography>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default ContentSection;