import React from 'react';

//we gonna use use this to Route between Our Home Page and Excerrsise 
//Details Page
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';

import './App.css'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//react Sinnpit: rafce
//stands for React Arrow Function Expport Component
const App = () => {
  return (
    <Box width = "400px" sx={{width: {xl: '1488px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App