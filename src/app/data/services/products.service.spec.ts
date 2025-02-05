import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { ProductsService } from './products.service';
import * as fromStore from '../store';
import * as fromCore from '../store/core.reducers';
import * as ProductListActions from '../store/product-list.actions';
import { ProductListData } from '../store/product-list-data';

describe('ProductsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromCore.reducers,
        }),
      ],
      providers: [
        { provide: Store, useClass: Store }
      ]
    });
  });

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });

  // get - i have no idea how to test it better
  it('getProductList$ should select fromStore.getProductList', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getProductList$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getProductList);
    expect(service.getProductList$()).toBeTruthy();
  });

  it('getProducts$ should select fromStore.getProducts', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getProducts$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getProducts);
    expect(service.getProducts$()).toBeTruthy();
  });

  it('getOtherProducts$ should select fromStore.getOtherProducts', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getOtherProducts$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getOtherProducts);
    expect(service.getOtherProducts$()).toBeTruthy();
  });

  it('getSimilarProducts$ should select fromStore.getSimilarProducts', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getSimilarProducts$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getSimilarProducts);
    expect(service.getSimilarProducts$()).toBeTruthy();
  });

  it('getActiveProduct$ should select fromStore.getActiveProduct', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getActiveProduct$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getActiveProduct);
    expect(service.getActiveProduct$()).toBeTruthy();
  });

  it('getActiveProductItem$ should select fromStore.getActiveProductItem', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getActiveProductItem$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getActiveProductItem);
    expect(service.getActiveProductItem$()).toBeTruthy();
  });

  it('getActiveProductVariant$ should select fromStore.getActiveProductVariant', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getActiveProductVariant$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getActiveProductVariant);
    expect(service.getActiveProductVariant$()).toBeTruthy();
  });

  // dispatch
  it('dispatchLoadProducts should dispatch ProductListActions.LoadProducts(data)', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const data = ProductListData;
    const action = new ProductListActions.LoadProducts(data);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchLoadProducts(data);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

  it('dispatchPickColor should dispatch ProductListActions.PickColor(color)', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const color = 'blue';
    const action = new ProductListActions.PickColor(color);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchPickColor(color);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

  it('dispatchPickSize should dispatch ProductListActions.PickSize(size)', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const size = 'S';
    const action = new ProductListActions.PickSize(size);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchPickSize(size);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

  it('dispatchAddReview should dispatch ProductListActions.AddReview(review)', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const review = { name: 'Bob', content: 'Lorem ipsum' };
    const action = new ProductListActions.AddReview(review);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchAddReview(review);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

  it('dispatchViewProduct should dispatch ProductListActions.ViewProduct(id)', () => {
    const store = TestBed.get(Store);
    const service: ProductsService = TestBed.get(ProductsService);
    const id = 1;
    const action = new ProductListActions.ViewProduct(id);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchViewProduct(id);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

});