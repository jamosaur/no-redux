import React, { useContext } from 'react';
import { Store } from './store/store';
import { Link } from '@reach/router';

const App = (props) => {
  const { state } = useContext(Store);
  return (
    <>
      <header className='header'>
        <div><h1>Rick and Morty</h1>
          <p>Pick your favorite episodes</p></div>
        <div>
          <Link to='/'>Home</Link>{' '}
          <Link to='/faves'>Favourites: {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </>
  );
};

export default App;
