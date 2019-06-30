import React, { useContext } from 'react';
import { Store } from '../store/store';
import { toggleFavAction } from '../store/actions';

const EpisodeList = React.lazy(() => import('./../EpisodeList'));

const Favourites = () => {
  const { state, dispatch } = useContext(Store);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='episode-layout'>
        <EpisodeList
          episodes={state.favourites}
          toggleFavAction={toggleFavAction}
          favourites={state.favourites}
          state={{ state, dispatch }}
        />
        {!state.favourites.length && (
          <div>No favourites added yet!</div>
        )}
      </div>
    </React.Suspense>
  );
};

export default Favourites;
