import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { OtherProductsComponent } from './other-products.component';
import { ProductsService } from 'src/app/data/services/products.service';
import { Store } from '@ngrx/store';
import { MockStore } from 'src/app/test/mock-store';

describe('OtherProductsComponent', () => {
  let component: OtherProductsComponent;
  let fixture: ComponentFixture<OtherProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProductsComponent ],
      imports: [RouterModule],
      providers: [
        ProductsService,
        { provide: Store, useClass: MockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});