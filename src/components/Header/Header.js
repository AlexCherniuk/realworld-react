import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='App-header'>
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Sing in</NavLink>
          <NavLink to='/register'>Sing up</NavLink>
        </ul>
          </nav>
        </div>
        )
}
        export default Header;
