import { useState } from 'react';
import { useEffect } from 'react';
import bankoLogo from '../assets/banko_logo.svg'


const HomePage = ({onPageChange}) => {
    return (
        <section className="section is-large">
        <div className="card">
        <div className="logo-container">
  
          <a href="#" target="_blank">
            <img src={bankoLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="title">Banko</h1>
        <h2 className="subtitle">Some Tagline relating sa upuan</h2>
        <div className="container">
          <p>May account ka na ba?</p>
  
          <div className="level-left">
            <div className="level-item">
              <p className="heading">Meron na</p>
              <button className="button is-primary" onClick={() => onPageChange('login')}>Log In</button>
            </div>
          </div>
  
          <div className="level-right">
            <div className="level-item has-text-centered">
              <p className="heading">Wala pa</p>
              <button className="button is-primary" onClick={() => onPageChange('register')}>Register</button>
            </div>
          </div>
  
        </div>
        </div>
      </section>  
    );
}

export default HomePage;