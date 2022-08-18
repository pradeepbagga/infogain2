import React from 'react';
import Header from './Components/Header/Header';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddTransaction from './Components/Transaction/AddTransaction';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/add-transaction" element={<AddTransaction />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}
export default App;
