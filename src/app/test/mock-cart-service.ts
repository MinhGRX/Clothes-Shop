import { BehaviorSubject, Observable } from 'rxjs';
import { MockData } from './mock-data';
import { Product } from '../data/models/product.model';

export class MockCartService {
  private mockData = new MockData();

  getCart$(): Observable<Product[]> {
    const state: BehaviorSubject<Product[]> = new BehaviorSubject(this.mockData.getCart());
    return state.asObservable();
  }

  dispatchAddToCart(product: Product) {}

  dispatchRemoveFromCart(id: number) {}
}