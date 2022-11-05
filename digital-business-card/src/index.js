import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function page() {
  return(
    <div className='container'>
      <img src={require('./impression-example-before@3x.jpg')} />
      <h1 className='name'>Laura Smith</h1>
      <h3 className='profession'>Frontend Developer</h3>
      <small className='personal-website'>laurasmith.website</small>
      <ul className='contact-info'>
        <li className='email'>Email</li>
        <li className='linkedin'>Linkedin</li>
      </ul>
      <h2 className='title'>About</h2>
      <p className='text'>Something something something Something something something Something something something Something something something Something something something</p>
      <h2 className='title'>Interests</h2>
      <p className='text'>Something something something Something something something Something something something Something something something Something something something</p>
      <footer className='footer'>
        <ul className='social-media'>
          <li className='twitter'></li>
          <li className='facebook'></li>
          <li className='instagram'></li>
          <li className='github'></li>
        </ul>
      </footer>
    </div>
  )
}

root.render(
  page()
);