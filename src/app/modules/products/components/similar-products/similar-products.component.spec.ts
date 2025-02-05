import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SimilarProductsComponent } from './similar-products.component';
import { ProductsService } from 'src/app/data/services/products.service';
import { Store } from '@ngrx/store';
import { MockStore } from 'src/app/test/mock-store';
import { MockProductsService } from 'src/app/test/mock-products-service';

describe('SimilarProductsComponent', () => {
  let component: SimilarProductsComponent;
  let fixture: ComponentFixture<SimilarProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarProductsComponent ],
      imports: [RouterTestingModule],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});