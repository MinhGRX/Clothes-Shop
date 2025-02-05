import * as fromCore from '../data/store/core.reducers';
import * as fromCart from '../data/store/cart.reducers';
import * as fromCompare from '../data/store/compare.reducers';
import * as fromFavorite from '../data/store/favorite.reducers';
import * as fromProductList from '../data/store/product-list.reducers';
import { Product } from '../data/models/product.model';
import { Review } from '../data/interfaces/review.interface';
import { ProductVariant } from '../data/interfaces/product-variant.interface';
import { ActiveProduct } from '../data/interfaces/active-product.interface';

export class MockData {
  private cartState: fromCart.State = { cart: [] };
  private compareState: fromCompare.State = { compare: [] };
  private favoriteState: fromFavorite.State = { favorite: [] };
  private review: Review = { name: 'Bob', content: 'Lorem ipsum' };
  private reviews: Review[] = [this.review];
  private variant1: ProductVariant = { color: 'blue', size: 'S', code: 'SBLUE', image: 'https://image.jpg' };
  private variant2: ProductVariant = { color: 'blue', size: 'L', code: 'LBLUE', image: 'https://image.jpg' };
  private variant3: ProductVariant = { color: 'purple', size: 'S', code: 'SPURPLE', image: 'https://image.jpg' };
  private variants: ProductVariant[] = [this.variant1, this.variant2, this.variant3];
  private product1: Product = { id: 1, name: 'Product 1', description: 'Lorem ipsum', price: 10.0, url: 'http://product.html', variants: this.variants, reviews: this.reviews };
  private product2: Product = { id: 2, name: 'Product 2', description: 'Lorem ipsum', price: 10.0, url: 'http://product.html', variants: this.variants, reviews: this.reviews };
  private products: Product[] = [this.product1, this.product2];
  private activeProduct: ActiveProduct = { product: this.product1, variant: 0 };
  private emptyActiveProduct: ActiveProduct = {};
  private productlist: fromProductList.ProductList = { activeProduct: this.activeProduct, products: this.products };
  private emptyProductlist: fromProductList.ProductList = { activeProduct: this.emptyActiveProduct, products: this.products };
  private productlistState: fromProductList.State = { productlist: this.emptyProductlist, loaded: true };
  private coreState: fromCore.CoreState = { cart: this.cartState, compare: this.compareState, favorite: this.favoriteState, productlist: this.productlistState };

  getCoreState() { return this.coreState; }
  getCartState() { return this.cartState; }
  getCart() { return this.cartState.cart; }
  getCompareState() { return this.compareState; }
  getCompare() { return this.compareState.compare; }
  getFavoriteState() { return this.favoriteState; }
  getFavorite() { return this.favoriteState.favorite; }
  getProductlistState() { return this.productlistState; }
  getProductlist() { return this.productlist; }
  getProducts() { return this.products; }
  getSimilarProducts() { return this.products; }
  getOtherProducts() { return this.products; }
  getProduct() { return this.product1; }
  getActiveProduct() { return this.activeProduct; }
  getActiveProductItem() { return this.product1; }
  getActiveProductVariant() { return 0; }

}