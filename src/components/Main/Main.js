import React from 'react';
import './Main.css'
import articles from '../../data/articles.json'

const listItem = articles.map((item, index) =>
  <section>
    <h2 key={index.toString()}>{item.title}</h2>
    <div key={index.toString()}>{item.body}</div>
  </section>)


function Main() {
    return (
      <div className='App-main'>
        {listItem}
      </div>
    )
  }

export default Main;
