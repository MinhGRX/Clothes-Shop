import * as ProductListActions from './product-list.actions';
import { ActiveProduct } from '../interfaces/active-product.interface';

export interface ProductList {
  products: any[];
  activeProduct: ActiveProduct;
}
export interface State {
  productlist: ProductList;
  loaded: boolean;
}
export const initialState: State = {
  productlist: {
    products: [],
    activeProduct: {},
  },
  loaded: false
};

export function ProductListReducer(state = initialState, action: ProductListActions.ProductListActions) {
  switch (action.type) {

    case ProductListActions.LOAD_PRODUCTS:
      if (state.loaded === false) {
        return { ...state, productlist: { ...state.productlist, products: action.payload }, loaded: true };
      }
      return state;

    case ProductListActions.VIEW_PRODUCT:
      const product1 = state.productlist.products.find(prod => prod.id === action.payload);
      return { ...state, productlist: { ...state.productlist, activeProduct: { ...state.productlist.activeProduct, product: product1, variant: 0 } } };

      case ProductListActions.PICK_COLOR:
      const activeProduct1 = state.productlist.activeProduct.product;
      const activeVariant1 = state.productlist.activeProduct.variant;
      let activeSize = '';
      if (activeProduct1 && typeof activeVariant1 === 'number') {
        activeSize = activeProduct1.variants[activeVariant1].size;
        const newVariant1 = activeProduct1.variants.findIndex(variant => variant.size === activeSize && variant.color === action.payload);
        return { ...state, productlist: { ...state.productlist, activeProduct: { ...state.productlist.activeProduct, product: activeProduct1, variant: newVariant1 } } };
      }
      return state;

    case ProductListActions.PICK_SIZE:
      const activeProduct2 = state.productlist.activeProduct.product;
      const activeVariant2 = state.productlist.activeProduct.variant;
      let activeColor = '';
      if (activeProduct2 && typeof activeVariant2 === 'number') {
        activeColor = activeProduct2.variants[activeVariant2].color;
        const newVariant2 = activeProduct2.variants.findIndex(variant => variant.color === activeColor && variant.size === action.payload);
        return { ...state, productlist: { ...state.productlist, activeProduct: { ...state.productlist.activeProduct, product: activeProduct2, variant: newVariant2 } } };
      }
      return state;

    case ProductListActions.ADD_REVIEW:
      const activeProduct3 = state.productlist.activeProduct.product;
      if (activeProduct3) {
        const index = state.productlist.products.findIndex(prod => prod.id === activeProduct3.id);
        const product3 = state.productlist.products[index];
        product3.reviews.push(action.payload);
        const products3 = [...state.productlist.products];
        products3[index] = product3;
        return {
          ...state,
          productlist: {
            ...state.productlist, products: products3, activeProduct: {
              ...state.productlist.activeProduct, product: product3 } } };
      }
      return state;

    default:
      return state;
  }
}

export const getProductList = (state: State) => state.productlist;
export const getProducts = (state: State) => state.productlist.products;
export const getSimilarProducts = (state: State) => state.productlist.products.slice(0, 4);
export const getOtherProducts = (state: State) => state.productlist.products.slice(4);
export const getActiveProduct = (state: State) => state.productlist.activeProduct;
export const getActiveProductItem = (state: State) => state.productlist.activeProduct.product;
export const getActiveProductVariant = (state: State) => state.productlist.activeProduct.variant;