// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import updated components
import React from "react";
import Home from "./pages/Home";
import Login  from './pages/Login';

function App () {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;
