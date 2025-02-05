import { TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';

import { CompareService } from './compare.service';
import * as fromStore from '../store';
import * as fromCore from '../store/core.reducers';
import * as CompareActions from '../store/compare.actions';
import { MockData } from '../../test/mock-data';

describe('CompareService', () => {
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
    const service: CompareService = TestBed.get(CompareService);
    expect(service).toBeTruthy();
  });

  it('getCompare$ should select fromStore.getCompare', () => {
    const store = TestBed.get(Store);
    const service: CompareService = TestBed.get(CompareService);
    const spyStoreSelect = spyOn(store, 'select').and.callThrough();
    service.getCompare$();
    expect(spyStoreSelect).toHaveBeenCalledWith(fromStore.getCompare);
    expect(service.getCompare$()).toBeTruthy();
  });

  it('dispatchAddToCompare should dispatch CompareActions.AddToCompare(product)', () => {
    const mockData = new MockData();
    const store = TestBed.get(Store);
    const service: CompareService = TestBed.get(CompareService);
    const product = mockData.getProduct();
    const action = new CompareActions.AddToCompare(product);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchAddToCompare(product);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

  it('dispatchRemoveFromCompare should dispatch CompareActions.RemoveFromCompare(id)', () => {
    const store = TestBed.get(Store);
    const service: CompareService = TestBed.get(CompareService);
    const id = 0;
    const action = new CompareActions.RemoveFromCompare(id);
    const spyStoreDispatch = spyOn(store, 'dispatch').and.callThrough();
    service.dispatchRemoveFromCompare(id);
    expect(spyStoreDispatch).toHaveBeenCalledWith(action);
  });

});