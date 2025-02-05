import * as fromFavorite from './favorite.reducers';
import * as FavoriteActions from './favorite.actions';
import { MockData } from '../../test/mock-data';

describe('FavoriteReducer', () => {

  describe('ADD_TO_FAVORITE action', () => {
    it('should add product to favorite', () => {
      const { initialState } = fromFavorite;
      const mockData = new MockData();
      const product = mockData.getProduct();
      const action = new FavoriteActions.AddToFavorite(product);
      const state = fromFavorite.FavoriteReducer(initialState, action);
      expect(state.favorite.length).toEqual(1);
      expect(state.favorite[0]).toEqual(product);
    });
  });

  describe('REMOVE_FROM_FAVORITE action', () => {
    it('should remove product from favorite', () => {
      const { initialState } = fromFavorite;
      const mockData = new MockData();
      const product = mockData.getProduct();
      const addAction = new FavoriteActions.AddToFavorite(product);
      let state = fromFavorite.FavoriteReducer(initialState, addAction);
      expect(state.favorite.length).toEqual(1);
      expect(state.favorite[0]).toEqual(product);
      const removeAction = new FavoriteActions.RemoveFromFavorite(1);
      state = fromFavorite.FavoriteReducer(state, removeAction);
      expect(state.favorite.length).toEqual(0);
    });
  });

});