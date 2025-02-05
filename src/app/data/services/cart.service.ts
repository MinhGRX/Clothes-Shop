import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromCore from '../store/core.reducers';
import * as fromStore from '../store';
import * as CartActions from '../store/cart.actions';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart$!: Observable<Product[]>;

  constructor(private store: Store<fromCore.CoreState>) { }

  // get from state
  getCart$(): Observable<Product[]> {
    return this.cart$ ? this.cart$ : this.cart$ = this.store.select(fromStore.getCart);
  }

  // dispatch actions
  dispatchAddToCart(product: Product) {
    this.store.dispatch(new CartActions.AddToCart(product));
  }

  dispatchRemoveFromCart(id: number) {
    this.store.dispatch(new CartActions.RemoveFromCart(id));
  }

  updateCart(product: Product) {
    this.store.dispatch(new CartActions.UpdateCart(product));
  }
}