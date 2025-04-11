import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage';
import ShowDetailsPage from './components/ShowDetailsPage';
import MovieListings from './components/MovieListings';
import ShowListings from './components/ShowListings';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import NotFound from './components/404';
import Layout from './components/Layout';
import MovieContextProvider from './context/MovieContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Router>
          <Layout>
            {/* Define routes*/}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MovieListings />} />
              <Route path="/tv-shows" element={<ShowListings />} />
              <Route path="/movies/:id" element={<MovieDetailsPage />} />
              <Route path="/tv-shows/:id" element={<ShowDetailsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
          </Layout>
        </Router>
      </MovieContextProvider>
    </div>
  );
}

export default App;
