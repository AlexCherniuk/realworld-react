import React from 'react';
import './Layout.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


function Layout() {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;