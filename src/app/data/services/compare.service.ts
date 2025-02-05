import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCore from '../store/core.reducers';
import * as fromStore from '../store';
import * as CompareActions from '../store/compare.actions';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  public compare$!: Observable<Product[]>;

  constructor(private store: Store<fromCore.CoreState>) { }

  // get from state
  getCompare$() {
    return this.compare$ ? this.compare$ : this.compare$ = this.store.select(fromStore.getCompare) as Observable<Product[]>;
  }

  // dispatch actions
  dispatchAddToCompare(product: Product) {
    this.store.dispatch(new CompareActions.AddToCompare(product));
  }

  dispatchRemoveFromCompare(id: number) {
    this.store.dispatch(new CompareActions.RemoveFromCompare(id));
  }

}