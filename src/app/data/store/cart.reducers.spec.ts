import * as fromCart from './cart.reducers';
import * as CartActions from './cart.actions';
import { MockData } from '../../test/mock-data';

describe('CartReducer', () => {

  describe('ADD_TO_CART action', () => {
    it('should add product to cart', () => {
      const { initialState } = fromCart;
      const mockData = new MockData();
      const product = mockData.getProduct();
      const action = new CartActions.AddToCart(product);
      const state = fromCart.CartReducer(initialState, action);
      expect(state.cart.length).toEqual(1);
      expect(state.cart[0]).toEqual(product);
    });
  });

  describe('REMOVE_FROM_CART action', () => {
    it('should remove product from cart', () => {
      const { initialState } = fromCart;
      const mockData = new MockData();
      const product = mockData.getProduct();
      const addAction = new CartActions.AddToCart(product);
      let state = fromCart.CartReducer(initialState, addAction);
      expect(state.cart.length).toEqual(1);
      expect(state.cart[0]).toEqual(product);
      const removeAction = new CartActions.RemoveFromCart(1);
      state = fromCart.CartReducer(state, removeAction);
      expect(state.cart.length).toEqual(0);
    });
  });

});