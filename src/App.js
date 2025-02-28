import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/Homepage';
import ListingPage from './components/ListingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          {/* Define routes*/}
          <Routes>
            <Route path= "/" element={<HomePage />}/>
            <Route path= "/details" element={<DetailsPage />}/>
            <Route path= "/listings" element={<ListingPage />}/>
            <Route path= "/login" element={<LoginPage />}/>
            <Route path= "/register" element={<RegistrationPage />}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
