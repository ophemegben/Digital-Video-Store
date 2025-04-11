import React, { createContext, useEffect, useState } from "react";
 
export const MovieContext = createContext();
 
const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [featuredTVShows, setFeaturedTVShows] = useState([]);
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseURL = process.env.REACT_APP_API_URL;
  
        // Start all requests simultaneously
        const [ moviesData, featuredMoviesData, tvShowsData, featuredTVShowsData ] = await Promise.all([
          fetch(`${baseURL}/movies`).then(res => res.json()),
          fetch(`${baseURL}/movies/featured`).then(res => res.json()),
          fetch(`${baseURL}/tvshows`).then(res => res.json()),
          fetch(`${baseURL}/tvshows/featured`).then(res => res.json()),
        ]);
  
        // Update state once all requests are done
        setMovies(moviesData);
        setShows(tvShowsData);
        setFeaturedMovies(featuredMoviesData);
        setFeaturedTVShows(featuredTVShowsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
 
  return (
    <MovieContext.Provider value={{ movies, featuredMovies, shows, featuredTVShows, loading }}>
      {children}
    </MovieContext.Provider>
  );
};
 
export default MovieContextProvider;