import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private reviewsSubject: BehaviorSubject<{ name: string, content: string }[]> = new BehaviorSubject<{ name: string, content: string }[]>([]);
  private reviews: { name: string, content: string }[] = [];

  getReviews(): Observable<{ name: string, content: string }[]> {
    return this.reviewsSubject.asObservable();
  }

  addReview(review: { name: string, content: string }) {
    this.reviews.push(review);
    this.reviewsSubject.next(this.reviews);
  }
}