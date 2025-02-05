import * as fromProductList from './product-list.reducers';
import * as ProductListActions from './product-list.actions';
import { MockData } from '../../test/mock-data';

describe('ProductListReducer', () => {

  describe('VIEW_PRODUCT action', () => {
    it('should add activeProduct', () => {
      const mockData = new MockData();
      const initialState = mockData.getProductlistState();
      const productlist = mockData.getProducts();
      const actionInit = new ProductListActions.LoadProducts(productlist);
      let state = fromProductList.ProductListReducer(initialState, actionInit);

      const action = new ProductListActions.ViewProduct(1);
      state = fromProductList.ProductListReducer(state, action);
      expect(state.productlist.activeProduct.product.id).toEqual(1);
      expect(state.productlist.activeProduct.variant).toEqual(0);
    });
  });

  describe('PICK_COLOR action', () => {
    it('should change activeProduct.variant', () => {
      const { initialState } = fromProductList;
      const mockData = new MockData();
      const data = mockData.getProducts();
      const actionInit = new ProductListActions.LoadProducts(data);
      let state = fromProductList.ProductListReducer(initialState, actionInit);

      const action = new ProductListActions.ViewProduct(2);
      state = fromProductList.ProductListReducer(state, action);
      expect(state.productlist.activeProduct.product.id).toEqual(2);
      expect(state.productlist.activeProduct.variant).toEqual(0);
      const action2 = new ProductListActions.PickColor('purple');
      state = fromProductList.ProductListReducer(state, action2);
      expect(state.productlist.activeProduct.variant).toEqual(2);
    });
  });

  describe('PICK_SIZE action', () => {
    it('should change activeProduct.variant', () => {
      const { initialState } = fromProductList;
      const mockData = new MockData();
      const data = mockData.getProducts();
      const actionInit = new ProductListActions.LoadProducts(data);
      let state = fromProductList.ProductListReducer(initialState, actionInit);

      const action = new ProductListActions.ViewProduct(2);
      state = fromProductList.ProductListReducer(state, action);
      expect(state.productlist.activeProduct.product.id).toEqual(2);
      expect(state.productlist.activeProduct.variant).toEqual(0);
      const action2 = new ProductListActions.PickSize('L');
      state = fromProductList.ProductListReducer(state, action2);
      expect(state.productlist.activeProduct.variant).toEqual(1);
    });
  });

  describe('ADD_REVIEW action', () => {
    it('should add review to product and activeProduct', () => {
      const { initialState } = fromProductList;
      const mockData = new MockData();
      const data = mockData.getProducts();
      const actionInit = new ProductListActions.LoadProducts(data);
      let state = fromProductList.ProductListReducer(initialState, actionInit);

      const action = new ProductListActions.ViewProduct(2);
      state = fromProductList.ProductListReducer(state, action);
      expect(state.productlist.activeProduct.product.id).toEqual(2);
      expect(state.productlist.activeProduct.product.reviews.length).toEqual(1);
      const review = { name: 'John Doe', content: 'Dolor sit amet' };
      const action2 = new ProductListActions.AddReview(review);
      state = fromProductList.ProductListReducer(state, action2);
      expect(state.productlist.products[0].reviews.length).toEqual(2);
      expect(state.productlist.products[0].reviews[1]).toEqual(review);
      expect(state.productlist.activeProduct.product.reviews.length).toEqual(2);
      expect(state.productlist.activeProduct.product.reviews[1]).toEqual(review);
    });
  });

});