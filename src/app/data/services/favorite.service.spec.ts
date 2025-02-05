import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { FavoriteService } from './favorite.service';
import * as fromStore from '../store';
import * as fromCore from '../store/core.reducers';
import * as FavoriteActions from '../store/favorite.actions';
import { MockData } from '../../test/mock-data';

describe('FavoriteService', () => {
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
    const service: FavoriteService = TestBed.get(FavoriteService);
    expect(service).toBeTruthy();
  });

  it('getFavorite$ should select fromStore.getFavorite', () => {
    const store = TestBed.get(Store);
    const service: FavoriteService = TestBed.get(FavoriteService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getFavorite$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getFavorite);
    expect(service.getFavorite$()).toBeTruthy();
  });

  it('dispatchAddToFavorite should dispatch FavoriteActions.AddToFavorite(product)', () => {
    const mockData = new MockData();
    const store = TestBed.get(Store);
    const service: FavoriteService = TestBed.get(FavoriteService);
    const product = mockData.getProduct();
    const action = new FavoriteActions.AddToFavorite(product);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchAddToFavorite(product);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

  it('dispatchRemoveFromFavorite should dispatch FavoriteActions.RemoveFromFavorite(id)', () => {
    const store = TestBed.get(Store);
    const service: FavoriteService = TestBed.get(FavoriteService);
    const id = 0;
    const action = new FavoriteActions.RemoveFromFavorite(id);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchRemoveFromFavorite(id);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

});