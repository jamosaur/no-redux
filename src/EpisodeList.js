import React from 'react';

const EpisodeList = ({
                       episodes,
                       toggleFavAction,
                       favourites,
                       state,
                     }) => {
  return episodes.map(episode => (
    <section key={episode.id}
             className='episode-box'>
      {episode.image && (<img src={episode.image.medium}
                              alt={`Rick and morty ${episode.name}`}
      />)}
      <div>{episode.name}</div>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button type='button'
                onClick={() => toggleFavAction(episode, state.state, state.dispatch)}>
          {favourites.find(fav => fav.id === episode.id) ? 'Unfav' : 'Fav'}
        </button>
      </section>
    </section>
  ));
};

export default EpisodeList;
