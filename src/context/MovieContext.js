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
        const baseURL = process.env.REACT_APP_API_URL;
  
        // Start all requests simultaneously
        const [bannersData, moviesData, tvShowsData] = await Promise.all([
          fetch(`${baseURL}/banners`).then(res => res.json()),
          fetch(`${baseURL}/movies`).then(res => res.json()),
          fetch(`${baseURL}/tv-shows`).then(res => res.json()),
        ]);
  
        // Update state once all requests are done
        setBanners(bannersData);
        setMovies(moviesData);
        setShows(tvShowsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
 
  return (
    <MovieContext.Provider value={{ banners, movies, shows, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
 
export default MovieContextProvider;