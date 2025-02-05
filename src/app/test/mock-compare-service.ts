import { BehaviorSubject, Observable } from 'rxjs';
import { MockData } from './mock-data';
import { Product } from '../data/models/product.model';

export class MockCompareService {
  private mockData = new MockData();

  getCompare$(): Observable<Product[]> {
    const state: BehaviorSubject<Product[]> = new BehaviorSubject(this.mockData.getCompare());
    return state.asObservable();
  }

  dispatchAddToCompare(product: Product) { }

  dispatchRemoveFromCompare(id: number) { }
}