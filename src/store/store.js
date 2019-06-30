import React, { createContext, useReducer } from 'react';

export const Store = createContext({});

const initialState = {
  episodes: [],
  favourites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        episodes: action.payload,
      };
    case 'ADD_FAV':
      return {
        ...state,
        favourites: [
          ...state.favourites,
          action.payload,
        ],
      };
    case 'REMOVE_FAV': {
      const filteredFavs = state.favourites.filter(
        i => i.id !== action.payload.id
      );

      return {
        ...state,
        favourites: filteredFavs,
      }
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
    state,
    dispatch
  };
  return (
    <Store.Provider value={value}>
      { props.children }
    </Store.Provider>
  )
};

