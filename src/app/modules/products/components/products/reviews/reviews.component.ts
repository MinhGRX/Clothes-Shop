import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/models/product.model';

import { ReviewsService } from 'src/app/data/services/reviews.service';
import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {

  public reviews$!: Observable<{ name: string; content: string; }[]>;
  public product$: Observable<Product | undefined> | undefined; 

  constructor(private productsService: ProductsService, private ReviewsService: ReviewsService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProductItem$();
    this.reviews$ = this.ReviewsService.getReviews();
  }
}
