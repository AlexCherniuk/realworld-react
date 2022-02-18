import React from 'react';
import './Main.css'
import articles from '../data/articles.json'

const listItem = articles.map((item) =>
  <section>
    <h2>{item.title}</h2>
    <div>{item.body}</div>
  </section>)


function Main() {
    return (
      <div className='App-main'>
        {listItem}
      </div>
    )
  }

export default Main;
