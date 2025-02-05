import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductsService } from 'src/app/data/services/products.service';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './details/details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ColorpickComponent } from './colorpick/colorpick.component';
import { SizepickComponent } from './sizepick/sizepick.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AddToFavoriteComponent } from './add-to-favorite/add-to-favorite.component';
import { AddToCompareComponent } from './add-to-compare/add-to-compare.component';
import { AddReviewComponent } from './add-review/add-review.component';

import { Store } from '@ngrx/store';
import { MockStore } from 'src/app/test/mock-store';
import { MockProductsService } from 'src/app/test/mock-products-service';


describe('ProductComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        ProductsComponent,
        CarouselComponent,
        ColorpickComponent,
        SizepickComponent,
        AddToCartComponent,
        AddToFavoriteComponent,
        AddToCompareComponent,
        DetailsComponent,
        ReviewsComponent,
        AddReviewComponent,
      ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
        { provide: Store, useClass: MockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
