import React, { useContext, useEffect } from 'react';
import { Store } from '../store/store';
import { toggleFavAction, fetchDataAction } from '../store/actions';

const EpisodeList = React.lazy(() => import('./../EpisodeList'));

const Home = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className='episode-layout'>
          <EpisodeList
            episodes={state.episodes}
            toggleFavAction={toggleFavAction}
            favourites={state.favourites}
            state={{ state, dispatch }}
          />
        </section>
      </React.Suspense>
    </>
  );
};

export default Home;
