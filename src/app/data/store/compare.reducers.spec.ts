import * as fromCompare from './compare.reducers';
import * as CompareActions from './compare.actions';
import { MockData } from '../../test/mock-data';

describe('CompareReducer', () => {

  describe('ADD_TO_COMPARE action', () => {
    it('should add product to compare', () => {
      const { initialState } = fromCompare;
      const mockData = new MockData();
      const product = mockData.getProduct();
      const action = new CompareActions.AddToCompare(product);
      const state = fromCompare.CompareReducer(initialState, action);
      expect(state.compare.length).toEqual(1);
      expect(state.compare[0]).toEqual(product);
    });
  });

  describe('REMOVE_FROM_COMPARE action', () => {
    it('should remove product from compare', () => {
      const { initialState } = fromCompare;
      const mockData = new MockData();
      const product = mockData.getProduct();
      const addAction = new CompareActions.AddToCompare(product);
      let state = fromCompare.CompareReducer(initialState, addAction);
      expect(state.compare.length).toEqual(1);
      expect(state.compare[0]).toEqual(product);
      const removeAction = new CompareActions.RemoveFromCompare(1);
      state = fromCompare.CompareReducer(state, removeAction);
      expect(state.compare.length).toEqual(0);
    });
  });

});