import { AddToFavorite, RemoveFromFavorite, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from './favorite.actions';
import { MockData } from '../../test/mock-data';

describe('FavoriteActions', () => {
  describe('AddToFavorite', () => {
    it('should create an action', () => {
      const mockData = new MockData();
      const payload = mockData.getProduct();
      const action = new AddToFavorite(payload);
      expect({ ...action }).toEqual({ type: ADD_TO_FAVORITE, payload });
    });
  });

  describe('RemoveFromFavorite', () => {
    it('should create an action', () => {
      const payload = 0;
      const action = new RemoveFromFavorite(payload);
      expect({ ...action }).toEqual({ type: REMOVE_FROM_FAVORITE, payload });
    });
  });

});