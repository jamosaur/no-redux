import React, { createContext, useReducer } from 'react';

export const Store = createContext({});

const initialState = {
  episodes: [],
  favourites: JSON.parse(localStorage.getItem('favourites')) || [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        episodes: action.payload,
      };
    case 'ADD_FAV': {

      localStorage.setItem('favourites', JSON.stringify([
        ...state.favourites,
        action.payload,
      ]));

      return {
        ...state,
        favourites: [
          ...state.favourites,
          action.payload,
        ],
      };
    }
    case 'REMOVE_FAV': {
      const filteredFavs = state.favourites.filter(
        i => i.id !== action.payload.id,
      );

      localStorage.setItem('favourites', JSON.stringify(filteredFavs));

      return {
        ...state,
        favourites: filteredFavs,
      };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch,
  };
  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  );
};

