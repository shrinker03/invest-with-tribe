import React from 'react';
import Index from './Components/Index';
import Container from '@mui/material/Container'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assignment1 from './Components/Assignment1';
import Header from './Components/Header';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <>
      <div style={{background: '#5CDB95', flexGrow: 1}}>
      <Router>
      <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ass" element={<Assignment1 />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </Container>
      </Router>
      </div>
    </>
  )
};

export default App;
