import { Action } from '@ngrx/store';
import { Review } from '../interfaces/review.interface';
import { Product } from '../models/product.model';

export const LOAD_PRODUCTS = '[Product List] Load products';
export const VIEW_PRODUCT = '[Product List] View product';
export const PICK_COLOR = '[Product List] Pick color';
export const PICK_SIZE = '[Product List] Pick size';
export const ADD_REVIEW = '[Product List] Add review';

export class LoadProducts implements Action {
  readonly type: typeof LOAD_PRODUCTS = LOAD_PRODUCTS;
  constructor(public payload: Product[]) {}
}

export class ViewProduct implements Action {
  readonly type: typeof VIEW_PRODUCT = VIEW_PRODUCT;
  constructor(public payload: number) {}
}

export class PickColor implements Action {
  readonly type = PICK_COLOR;
  constructor(public payload: string) {}
}

export class PickSize implements Action {
  readonly type: typeof PICK_SIZE = PICK_SIZE;
  constructor(public payload: string) {}
}

export class AddReview implements Action {
  readonly type: typeof ADD_REVIEW = ADD_REVIEW;
  constructor(public payload: Review) {}
}

export type ProductListActions = LoadProducts | ViewProduct | PickColor | PickSize | AddReview;