const API_URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export const fetchDataAction = async dispatch => {
  const data = await fetch(API_URL);
  const json = await data.json();

  dispatch({
    type: 'FETCH_DATA',
    payload: json._embedded.episodes
  });
};

export const toggleFavAction = (episode, state, dispatch) => {
  const episodeExists = state.favourites.includes(
    episode
  );

  dispatch({
    type: episodeExists ? 'REMOVE_FAV' : 'ADD_FAV',
    payload: episode,
  });
};
