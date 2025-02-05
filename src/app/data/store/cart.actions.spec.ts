import { AddToCart, RemoveFromCart, ADD_TO_CART, REMOVE_FROM_CART } from './cart.actions';
import { MockData } from '../../test/mock-data';

describe('CartActions', () => {
  describe('AddToCart', () => {
    it('should create an action', () => {
      const mockData = new MockData();
      const payload = mockData.getProduct();
      const action = new AddToCart(payload);
      expect({ ...action }).toEqual({ type: ADD_TO_CART, payload });
    });
  });

  describe('RemoveFromCart', () => {
    it('should create an action', () => {
      const payload = 0;
      const action = new RemoveFromCart(payload);
      expect({ ...action }).toEqual({ type: REMOVE_FROM_CART, payload });
    });
  });

});