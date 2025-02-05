import { Product } from '../models/product.model';
import * as FavoriteActions from './favorite.actions';

export interface State {
  favorite: Product[];
}

export const initialState: State = {
  favorite: []
};

export function FavoriteReducer(state = initialState, action: FavoriteActions.FavoriteActions) {
  switch (action.type) {
    case FavoriteActions.ADD_TO_FAVORITE:
      const favorite1 = [...state.favorite];
      if (!favorite1.find(product => product.id === action.payload.id)) {
        favorite1.push(action.payload);
        return { ...state, favorite: favorite1 };
      }
      return state;

    case FavoriteActions.REMOVE_FROM_FAVORITE:
      const favorite2 = [...state.favorite];
      let index = -1;
      index = favorite2.findIndex(product => product.id === action.payload);
      if (index > -1) {
        favorite2.splice(index, 1);
        return {
          ...state,
          favorite: favorite2
        };
      }
      return state;

    default:
      return state;
  }
}

export const getFavorite = (state: State) => state.favorite;