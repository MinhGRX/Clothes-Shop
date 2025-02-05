import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCore from '../store/core.reducers';
import * as fromStore from '../store';
import * as FavoriteActions from '../store/favorite.actions';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public favorite$!: Observable<Product[]>;

  constructor(private store: Store<fromCore.CoreState>) { }

  // get from state
  getFavorite$() {
    return this.favorite$ ? this.favorite$ : this.favorite$ = this.store.select(fromStore.getFavorite);
  }

  // dispatch actions
  dispatchAddToFavorite(product: Product) {
    this.store.dispatch(new FavoriteActions.AddToFavorite(product));
  }

  dispatchRemoveFromFavorite(id: number) {
    this.store.dispatch(new FavoriteActions.RemoveFromFavorite(id));
  }

}