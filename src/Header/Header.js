import React from 'react';
import './Header.css'

function Header(){
  return(
    <div className='App-header'>Header
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/login'>Sing in</a></li>
          <li><a href='/register'>Sing up</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
