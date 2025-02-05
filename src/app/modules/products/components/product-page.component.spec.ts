import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductPageComponent } from './product-page.component';
import { ProductsComponent } from './products/products.component';
import { CarouselComponent } from './products/carousel/carousel.component';
import { DetailsComponent } from './products/details/details.component';
import { ReviewsComponent } from './products/reviews/reviews.component';
import { ColorpickComponent } from './products/colorpick/colorpick.component';
import { SizepickComponent } from './products/sizepick/sizepick.component';
import { AddToCartComponent } from './products/add-to-cart/add-to-cart.component';
import { AddToFavoriteComponent } from './products/add-to-favorite/add-to-favorite.component';
import { AddToCompareComponent } from './products/add-to-compare/add-to-compare.component';
import { OtherProductsComponent } from './other-products/other-products.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { AddReviewComponent } from './products/add-review/add-review.component';
import { ProductsService } from 'src/app/data/services/products.service';

import { Store } from '@ngrx/store';
import { MockStore } from 'src/app/test/mock-store';
import { MockProductsService } from 'src/app/test/mock-products-service';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductPageComponent,
        ProductsComponent,
        CarouselComponent,
        DetailsComponent,
        ReviewsComponent,
        ColorpickComponent,
        SizepickComponent,
        AddToCartComponent,
        AddToFavoriteComponent,
        AddToCompareComponent,
        OtherProductsComponent,
        SimilarProductsComponent,
        AddReviewComponent
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
        { provide: Store, useClass: MockStore }
      ]
    });
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});