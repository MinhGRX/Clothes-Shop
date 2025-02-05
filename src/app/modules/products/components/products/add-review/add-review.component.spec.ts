import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AddReviewComponent } from './add-review.component';
import { ProductsService } from 'src/app/data/services/products.service';
import { MockProductsService } from 'src/app/test/mock-products-service';

describe('AddReviewComponent', () => {
  let component: AddReviewComponent;
  let fixture: ComponentFixture<AddReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReviewComponent ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.reviewForm.valid).toBeFalsy();
  });

  it('form should be valid when full', () => {
    component.reviewForm.controls['name'].setValue('Bob');
    component.reviewForm.controls['content'].setValue('Lorem ipsum');
    fixture.detectChanges();
    expect(component.reviewForm.valid).toBeTruthy();
  });

  it('onSubmit should run dispatchAddReview with Review', () => {
    const productsService = fixture.debugElement.injector.get(ProductsService);
    const spyDispatchAddReview = spyOn(productsService, 'dispatchAddReview').and.callThrough();
    component.reviewForm.controls['name'].setValue('Bob');
    component.reviewForm.controls['content'].setValue('Lorem ipsum');
    fixture.detectChanges();
    component.onSubmit();
    expect(spyDispatchAddReview).toHaveBeenCalledTimes(1);
    expect(spyDispatchAddReview).toHaveBeenCalledWith({ name: 'Bob', content: 'Lorem ipsum' });
  });

});