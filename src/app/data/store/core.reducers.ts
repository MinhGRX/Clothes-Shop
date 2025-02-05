import {
    ActionReducerMap,
    createFeatureSelector
  } from '@ngrx/store';
  
  import * as fromCart from './cart.reducers';
  import * as fromCompare from './compare.reducers';
  import * as fromFavorite from './favorite.reducers';
  import * as fromProductList from './product-list.reducers';
  
  export interface State {
    core: CoreState;
  }
  
  export interface CoreState {
    cart: fromCart.State;
    compare: fromCompare.State;
    favorite: fromFavorite.State;
    productlist: fromProductList.State;
  }
  
  export const reducers: ActionReducerMap<CoreState, any> = {
    cart: fromCart.CartReducer,
    compare: fromCompare.CompareReducer,
    favorite: fromFavorite.FavoriteReducer,
    productlist: fromProductList.ProductListReducer
  };
  
  export const selectCoreState = createFeatureSelector<CoreState>('core');