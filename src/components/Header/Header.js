import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <div className='App-header'>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/login'>Sing in</Link>
          <Link to='/register'>Sing up</Link>
        </ul>
          </nav>
        </div>
        )
}
        export default Header;
