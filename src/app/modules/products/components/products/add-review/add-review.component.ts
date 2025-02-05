import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReviewsService } from 'src/app/data/services/reviews.service';
import { ProductsService } from 'src/app/data/services/products.service';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddReviewComponent implements OnInit {

  reviewForm!: FormGroup;

  constructor( private productsService: ProductsService, private reviewsService: ReviewsService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.reviewForm = new FormGroup({
      name: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const review = this.reviewForm.value;
    
    this.reviewsService.addReview(review);
    this.productsService.dispatchAddReview(review);
  
    this.reviewForm.reset();
  }
}