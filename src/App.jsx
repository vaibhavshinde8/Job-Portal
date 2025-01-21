import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'; // Ensure About.jsx exists in /pages folder
import SignInSignUp from "./pages//SignInSignUp";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SignInSignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
