import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink } from 'react-router-dom';
import MainRoutes from './routes';
import './sass/App.scss';

ReactDOM.render(
  <BrowserRouter>
    <nav className='navbar'>
      <NavLink
        to=""
        className="navbar-brand"
      >
        <img src='./images/logo.svg' alt='' />
      </NavLink>
      <div className='navbar-links'>
        <NavLink
          to=""
          className={({isActive}) => `navbar-link mx-0 ${isActive ? 'navbar-link--active' : ''}`}
        >
          Acceuil
        </NavLink>
        <NavLink
          to="/About"
          className={({isActive}) => `navbar-link mx-0 ${isActive ? 'navbar-link--active' : ''}`}
        >
          À propos
        </NavLink>
      </div>
    </nav>
    
    <main>
      <MainRoutes />
    </main>

    <footer>
      <img src="" alt="" />
      <p>&copy; Kasa, All right reversed</p>
    </footer>
  </BrowserRouter>,
  document.getElementById('root')
);
