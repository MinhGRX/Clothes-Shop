import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { StoreModule, Store, select } from '@ngrx/store';

import * as fromStore from './index';
import * as fromCore from './core.reducers';
import * as fromCart from './cart.reducers';
import * as fromCompare from './compare.reducers';
import * as fromFavorite from './favorite.reducers';
import * as fromProductList from './product-list.reducers';
import * as ProductListActions from './product-list.actions';
import { reducers } from './core.reducers';
import { MockData } from '../../test/mock-data';
import { Product } from '../models/product.model';
import { ActiveProduct } from '../interfaces/active-product.interface';

describe('Selectors', () => {

  let store: Store<fromCore.CoreState>;
  const mockData = new MockData();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('core', reducers),
      ],
      providers: [
        { provide: Store, useClass: Store }
      ]
    });
    store = TestBed.get(Store);
    const productlist = mockData.getProducts();
    store.dispatch(new ProductListActions.LoadProducts(productlist));
    store.dispatch(new ProductListActions.ViewProduct(1));
  });

  describe('getProductList', () => {

    it('should return store slice', () => {
      const productlist: fromProductList.State = { productlist: mockData.getProductlist(), loaded: true };
      let result: any;
      store
        .pipe(select(fromStore.getProductList))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(productlist);
    });
  });

  describe('getProducts', () => {
    it('should return store slice', () => {
      const products: Product[] = mockData.getProducts();
      let result: any;
      store
        .pipe(select(fromStore.getProducts))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(products);
    });
  });

  describe('getActiveProduct', () => {
    it('should return store slice', () => {
      const activeProduct: ActiveProduct = mockData.getActiveProduct();
      let result: any;
      store
        .pipe(select(fromStore.getActiveProduct))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(activeProduct);
    });
  });

  describe('getActiveProductItem', () => {
    it('should return store slice', () => {
      const activeProductItem: Product = mockData.getActiveProductItem();
      let result: any;
      store
        .pipe(select(fromStore.getActiveProductItem))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(activeProductItem);
    });
  });

  describe('getActiveProductVariant', () => {
    it('should return store slice', () => {
      const activeProductVariant: number = mockData.getActiveProductVariant();
      let result: any;
      store
        .pipe(select(fromStore.getActiveProductVariant))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(activeProductVariant);
    });
  });

  describe('getCartState', () => {
    it('should return store slice', () => {
      const cartState: fromCart.State = mockData.getCartState();
      let result: any;
      store
        .pipe(select(fromStore.getCartState))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(cartState);
    });
  });

  describe('getCart', () => {
    it('should return store slice', () => {
      const cart: Product[] = mockData.getCart();
      let result: any;
      store
        .pipe(select(fromStore.getCart))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(cart);
    });
  });

  describe('getCompareState', () => {
    it('should return store slice', () => {
      const compareState: fromCompare.State = mockData.getCompareState();
      let result: any;
      store
        .pipe(select(fromStore.getCompareState))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(compareState);
    });
  });

  describe('getCompare', () => {
    it('should return store slice', () => {
      const compare: Product[] = mockData.getCompare();
      let result: any;
      store
        .pipe(select(fromStore.getCompare))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(compare);
    });
  });

  describe('getFavoriteState', () => {
    it('should return store slice', () => {
      const favoriteState: fromFavorite.State = mockData.getFavoriteState();
      let result: any;
      store
        .pipe(select(fromStore.getFavoriteState))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(favoriteState);
    });
  });

  describe('getFavorite', () => {
    it('should return store slice', () => {
      const favorite: Product[] = mockData.getFavorite();
      let result: any;
      store
        .pipe(select(fromStore.getFavorite))
        .subscribe(data => (result = data))
        .unsubscribe();
      expect(result).toEqual(favorite);
    });
  });

});