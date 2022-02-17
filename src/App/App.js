import React from 'react';
import './App.css'
import Footer from '../Footer/Header';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App(){
  return(
    <div className='container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;