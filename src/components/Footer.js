import React from 'react';
import { Box, Grid2, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Link } from 'react-router-dom'; 
import "../App.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Grid2 container spacing={4} justifyContent="space-evenly">
        <Grid2 size= {{xs:"12", sm:"6", md:"3", lg:"1"}}>
          <Typography variant="h6" gutterBottom>
            Watch
          </Typography>
          <Link to="/spotlight" className="footer-link">Spotlight</Link><br />
          <Link to="/movies" className="footer-link">Movies</Link><br />
          <Link to="/tv" className="footer-link">TV</Link><br />
          <Link to="/free" className="footer-link">Free</Link>
        </Grid2>
        <Grid2 size= {{xs:"12", sm:"6", md:"3", lg:"1"}}>
          <Typography variant="h6" gutterBottom>
            My Account
          </Typography>
          <Link to="/my-vudu" className="footer-link">My StreamX</Link><br />
          <Link to="/account" className="footer-link">Account</Link><br />
          <Link to="/settings" className="footer-link">Settings</Link><br />
          <Link to="/manage-devices" className="footer-link">Manage Devices</Link>
        </Grid2>
        <Grid2 size= {{xs:"12", sm:"6", md:"3", lg:"1"}}>
          <Typography variant="h6" gutterBottom>
            Features
          </Typography>
          <Link to="/lists" className="footer-link">Lists</Link><br />
          <Link to="/family" className="footer-link">Family</Link><br />
          <Link to="/disc-to-digital" className="footer-link">Disc to Digital</Link><br />
          <Link to="/instawatch" className="footer-link">InstaWatch</Link><br />
          <Link to="/movies-anywhere" className="footer-link">Movies Anywhere</Link>
        </Grid2>
        <Grid2 size= {{xs:"12", sm:"6", md:"3", lg:"1"}}>
          <Typography variant="h6" gutterBottom>
            Help
          </Typography>
          <Link to="/about-us" className="footer-link">About Us</Link><br />
          <Link to="/devices" className="footer-link">Devices</Link><br />
          <Link to="/support" className="footer-link">Support</Link><br />
          <Link to="/forums" className="footer-link">Forums</Link><br />
          <Link to="/contact-us" className="footer-link">Contact Us</Link><br />
          <Link to="/jobs" className="footer-link">Jobs</Link>
        </Grid2>
      </Grid2>
      <Box className="social-icons">
        <IconButton color="inherit"><LinkedInIcon /></IconButton>
        <IconButton color="inherit"><FacebookIcon /></IconButton>
        <IconButton color="inherit"><TwitterIcon /></IconButton>
        <IconButton color="inherit"><YouTubeIcon /></IconButton>
        <IconButton color="inherit"><RssFeedIcon /></IconButton>
      </Box>
    </Box>
  );
};

export default Footer;