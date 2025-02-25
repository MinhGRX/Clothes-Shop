import { BehaviorSubject, Observable } from 'rxjs';

export class MockStore<T> {
  private state: BehaviorSubject<T> = new BehaviorSubject<T>({} as T);

  setState(data: T) {
    this.state.next(data);
  }

  select(selector?: any): Observable<T> {
    return this.state.asObservable();
  }

  dispatch(action: any) { }
}