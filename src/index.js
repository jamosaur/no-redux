import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './store/store';
import './index.css';
import Home from './Pages/Home';
import Favourites from './Pages/Favourites';
import {Router} from '@reach/router';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <Home path='/' />
        <Favourites path='/faves' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
