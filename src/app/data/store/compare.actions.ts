import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ADD_TO_COMPARE = '[Compare] Add to compare';
export const REMOVE_FROM_COMPARE = '[Compare] Remove from compare';

export class AddToCompare implements Action {
  readonly type: typeof ADD_TO_COMPARE = ADD_TO_COMPARE;
  constructor(public payload: Product) { }
}

export class RemoveFromCompare implements Action {
  readonly type: typeof REMOVE_FROM_COMPARE = REMOVE_FROM_COMPARE;
  constructor(public payload: number) { }
}

export type CompareActions = AddToCompare | RemoveFromCompare;