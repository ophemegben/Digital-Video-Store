import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "../css/Home.css";

const navButtonStyle = { color: "white", marginRight: 2, textTransform: "none" };

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(to right, #00000000 50%, #000000D9)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Left-aligned buttons (Closer to the logo) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link component={Link} to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", marginRight: 2}}>
              VUDU
            </Typography>
          </Link>
          <Button component={Link} to="/movies" sx={navButtonStyle}>Movies</Button>
          <Button component={Link} to="/tv-shows" sx={navButtonStyle}>TV Shows</Button>
          <Button component={Link} to="/my-vudu" sx={navButtonStyle}>Live TV</Button>
          <Button component={Link} to="/free" sx={navButtonStyle}>Subscriptions</Button>
        </Box>

        {/* Right-aligned buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button component={Link} to="/redeem" sx={navButtonStyle}>Redeem</Button>
          <Button component={Link} to="/sign-in" sx={navButtonStyle}>Sign In</Button>
          <IconButton sx={{ color: "white" }}>
            <SearchIcon />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Header;

