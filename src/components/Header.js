import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import "../css/Home.css";

const navButtonStyle = { color: "white", marginRight: 2, textTransform: "none" };

const Header = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        height: "64px",
        background: "#051C2E"
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Left-aligned buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link component={Link} to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", marginRight: 2 }}>
              StreamX
            </Typography>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Button component={Link} to="/movies" sx={navButtonStyle}>Movies</Button>
              <Button component={Link} to="/tv-shows" sx={navButtonStyle}>TV Shows</Button>
              {!isTablet && (
                <>
                  <Button component={Link} to="/my-streamx" sx={navButtonStyle}>Live TV</Button>
                  <Button component={Link} to="/free" sx={navButtonStyle}>Subscriptions</Button>
                </>
              )}
            </>
          )}
        </Box>

        {/* Right-aligned buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {!isMobile && (
            <>
              <Button component={Link} to="/register" sx={navButtonStyle}>Register</Button>
              <Button component={Link} to="/login" sx={navButtonStyle}>Sign In</Button>
            </>
          )}

          <IconButton sx={{ color: "white" }}>
            <SearchIcon />
          </IconButton>


          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* Mobile menu */}
        <Menu
          anchorEl={mobileMenuAnchor}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem
            onClick={handleMobileMenuClose}
            component={Link}
            to="/movies"
          >
            Movies
          </MenuItem>
          <MenuItem
            onClick={handleMobileMenuClose}
            component={Link}
            to="/tv-shows"
          >
            TV Shows
          </MenuItem>
          <MenuItem
            onClick={handleMobileMenuClose}
            component={Link}
            to="/my-streamx"
          >
            Live TV
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose} component={Link} to="/free">
            Subscriptions
          </MenuItem>
          <MenuItem
            onClick={handleMobileMenuClose}
            component={Link}
            to="/register"
          >
            Register
          </MenuItem>
          <MenuItem
            onClick={handleMobileMenuClose}
            component={Link}
            to="/login"
          >
            Sign In
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

