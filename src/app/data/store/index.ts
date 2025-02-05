import { createSelector } from '@ngrx/store';

import * as fromCore from './core.reducers';
import * as fromCart from './cart.reducers';
import * as fromCompare from './compare.reducers';
import * as fromFavorite from './favorite.reducers';
import * as fromProductList from './product-list.reducers';

// selector functions for productsList
export const getProductList = createSelector(fromCore.selectCoreState, (state: fromCore.CoreState) => state.productlist);
export const getProducts = createSelector(getProductList, fromProductList.getProducts);
export const getOtherProducts = createSelector(getProductList, fromProductList.getOtherProducts);
export const getSimilarProducts = createSelector(getProductList, fromProductList.getSimilarProducts);
export const getActiveProduct = createSelector(getProductList, fromProductList.getActiveProduct);
export const getActiveProductItem = createSelector(getProductList, fromProductList.getActiveProductItem);
export const getActiveProductVariant = createSelector(getProductList, fromProductList.getActiveProductVariant);

// selector functions for cart
export const getCartState = createSelector(fromCore.selectCoreState, (state: fromCore.CoreState) => state.cart);
export const getCart = createSelector( getCartState, fromCart.getCart );

// selector functions for compare
export const getCompareState = createSelector(fromCore.selectCoreState, (state: fromCore.CoreState) => state.compare);
export const getCompare = createSelector( getCompareState, fromCompare.getCompare );

// selector functions for favorite
export const getFavoriteState = createSelector(fromCore.selectCoreState, (state: fromCore.CoreState) => state.favorite);
export const getFavorite = createSelector( getFavoriteState, fromFavorite.getFavorite );

export function getReviewsForProduct(productId: number): any {
  throw new Error('Function not implemented.');
}
