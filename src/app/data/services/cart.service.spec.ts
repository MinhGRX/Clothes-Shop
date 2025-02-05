import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { CartService } from './cart.service';
import * as fromStore from '../store';
import * as fromCore from '../store/core.reducers';
import * as CartActions from '../store/cart.actions';
import { MockData } from '../../test/mock-data';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({
        ...fromCore.reducers,
      }),
    ],
    providers: [
      { provide: Store, useClass: Store }
    ]
  }));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('getCart$ should select fromStore.getCart', () => {
    const store = TestBed.get(Store);
    const service: CartService = TestBed.get(CartService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getCart$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getCart);
    expect(service.getCart$()).toBeTruthy();
  });

  it('dispatchAddToCart should dispatch CartActions.AddToCart(product)', () => {
    const mockData = new MockData();
    const store = TestBed.get(Store);
    const service: CartService = TestBed.get(CartService);
    const product = mockData.getProduct();
    const action = new CartActions.AddToCart(product);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchAddToCart(product);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

  it('dispatchRemoveFromCart should dispatch CartActions.RemoveFromCart(id)', () => {
    const store = TestBed.get(Store);
    const service: CartService = TestBed.get(CartService);
    const id = 0;
    const action = new CartActions.RemoveFromCart(id);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchRemoveFromCart(id);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

});