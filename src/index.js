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
        Brand
      </NavLink>
      <NavLink
        to=""
        className="navbar-item"
      >
        Acceuil
      </NavLink>
      <NavLink
        to="/About"
        className="navbar-item"
      >
        À propos
      </NavLink>
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
