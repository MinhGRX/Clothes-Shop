import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../store';
import * as fromCore from '../store/core.reducers';
import * as fromProductList from '../store/product-list.reducers';
import * as ProductListActions from '../store/product-list.actions';
import { Product } from '../models/product.model';
import { ActiveProduct } from '../interfaces/active-product.interface';
import { Review } from '../interfaces/review.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productList$!: Observable<fromProductList.State>;
  public products$!: Observable<Product[]>;
  public otherProducts$!: Observable<Product[]>;
  public similarProducts$!: Observable<Product[]>;
  public activeProduct$!: Observable<ActiveProduct>;
  public activeProductItem$!: Observable<Product | undefined>;
  public activeProductVariant$!: Observable<number | undefined>;


  constructor(private store: Store<fromCore.CoreState>) {}

  // get from state
  getProductList$() {
    return this.productList$ ? this.productList$ : this.productList$ = this.store.select(fromStore.getProductList);
  }

  getProducts$() {
    return this.products$ ? this.products$ : this.products$ = this.store.select(fromStore.getProducts);
  }

  getOtherProducts$() {
    return this.otherProducts$ ? this.otherProducts$ : this.otherProducts$ = this.store.select(fromStore.getOtherProducts);
  }

  getSimilarProducts$() {
    return this.similarProducts$ ? this.similarProducts$ : this.similarProducts$ = this.store.select(fromStore.getSimilarProducts);
  }

  getActiveProduct$() {
    return this.activeProduct$ ? this.activeProduct$ : this.activeProduct$ = this.store.select(fromStore.getActiveProduct);
  }

  getActiveProductItem$() {
    return this.activeProductItem$ ? this.activeProductItem$ : this.activeProductItem$ = this.store.select(fromStore.getActiveProductItem);
  }

  getActiveProductVariant$() {
    return this.activeProductVariant$ ? this.activeProductVariant$ : this.activeProductVariant$ = this.store.select(fromStore.getActiveProductVariant);
  }

  // dispatch actions
  dispatchLoadProducts(data: Product[]) {
    this.store.dispatch(new ProductListActions.LoadProducts(data));
  }

  dispatchPickColor(color: string) {
    this.store.dispatch(new ProductListActions.PickColor(color));
  }

  dispatchPickSize(size: string) {
    this.store.dispatch(new ProductListActions.PickSize(size));
  }

  dispatchAddReview(review: Review) {
    this.store.dispatch(new ProductListActions.AddReview(review));
  }

  dispatchViewProduct(id: number) {
    this.store.dispatch(new ProductListActions.ViewProduct(id));
  }

}