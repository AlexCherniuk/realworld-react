import React from 'react';
import './App.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Routes , Route , Link ,  } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;