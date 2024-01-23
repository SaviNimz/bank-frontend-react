// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import updated components
import React from "react";
import Home from "./Home";
import Login  from './pages/Login';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
