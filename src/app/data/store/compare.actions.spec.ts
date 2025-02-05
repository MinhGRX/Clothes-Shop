import { AddToCompare, RemoveFromCompare, ADD_TO_COMPARE, REMOVE_FROM_COMPARE } from './compare.actions';
import { MockData } from '../../test/mock-data';

describe('CompareActions', () => {
  describe('AddToCompare', () => {
    it('should create an action', () => {
      const mockData = new MockData();
      const payload = mockData.getProduct();
      const action = new AddToCompare(payload);
      expect({ ...action }).toEqual({ type: ADD_TO_COMPARE, payload });
    });
  });

  describe('RemoveFromCompare', () => {
    it('should create an action', () => {
      const payload = 0;
      const action = new RemoveFromCompare(payload);
      expect({ ...action }).toEqual({ type: REMOVE_FROM_COMPARE, payload });
    });
  });

});