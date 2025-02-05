import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {
  private discountSubject = new BehaviorSubject<number>(0);
  private totalWithDiscountSubject = new BehaviorSubject<number>(0);
  private totalWithoutDiscountSubject = new BehaviorSubject<number>(0);

  setDiscount(discount: number) {
    this.discountSubject.next(discount);
  }

  getDiscount() {
    return this.discountSubject.asObservable();
  }

  setTotalWithDiscount(totalWithDiscount: number) {
    this.totalWithDiscountSubject.next(totalWithDiscount);
  }

  getTotalWithDiscount() {
    return this.totalWithDiscountSubject.asObservable();
  }

  setTotalWithoutDiscount(totalWithoutDiscount: number) {
    this.totalWithoutDiscountSubject.next(totalWithoutDiscount);
  }

  getTotalWithoutDiscount() {
    return this.totalWithoutDiscountSubject.asObservable();
  }
}