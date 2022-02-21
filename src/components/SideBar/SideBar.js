import React from 'react';
import './SideBar.css';
import articles from '../../data/articles.json'

const keywords = articles.map(item => <div ><a className='tag-default' href="/">{item.keyword}</a> </div>)

function SideBar(){
  return(
    <div className='App-sidebar'>
    <p>Popular Tags</p>
      {keywords}
    </div>
  )
}

export default SideBar;
