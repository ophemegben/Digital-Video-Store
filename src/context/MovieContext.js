import React, { createContext, useEffect, useState } from "react";
 
export const MovieContext = createContext();
 
const MovieContextProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseURL = process.env.REACT_APP_API_URL; // Get the base URL from the environment variables

        // Fetch banners
        const bannersResponse = await fetch(`${baseURL}/banners`);
        if (!bannersResponse.ok) {
          throw new Error("Failed to fetch banners");
        }
        const bannersData = await bannersResponse.json();
        setBanners(bannersData);
 
        // Fetch movies
        const moviesResponse = await fetch(`${baseURL}/movies`);
        if (!moviesResponse.ok) {
          throw new Error("Failed to fetch movies");
        }
        const moviesData = await moviesResponse.json();
        setMovies(moviesData);
 
        // Fetch TV shows
        const tvShowsResponse = await fetch(`${baseURL}/tv-shows`);
        if (!tvShowsResponse.ok) {
          throw new Error("Failed to fetch TV shows");
        }
        const tvShowsData = await tvShowsResponse.json();
        setShows(tvShowsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched (or if an error occurs)
      }
    };
 
    fetchData(); // Call the fetchData function
  }, []);
 
  return (
    <MovieContext.Provider value={{ banners, movies, shows, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
 
export default MovieContextProvider;