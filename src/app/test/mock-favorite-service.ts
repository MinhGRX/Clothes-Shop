import { BehaviorSubject, Observable } from 'rxjs';
import { MockData } from './mock-data';
import { Product } from '../data/models/product.model';

export class MockFavoriteService {
  private mockData = new MockData();

  getFavorite$(): Observable<Product[]> {
    const state: BehaviorSubject<Product[]> = new BehaviorSubject(this.mockData.getFavorite());
    return state.asObservable();
  }

  dispatchAddToFavorite(product: Product) { }

  dispatchRemoveFromFavorite(id: number) { }
}