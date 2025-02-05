import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SizepickComponent } from './sizepick.component';
import { ProductsService } from 'src/app/data/services/products.service';
import { MockProductsService } from 'src/app/test/mock-products-service';

describe('SizepickComponent', () => {
  let component: SizepickComponent;
  let fixture: ComponentFixture<SizepickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizepickComponent ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizepickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('getSizes should get distinct sizes', () => {
    expect(component.sizes).toEqual(['S', 'L']);
  });

  it('onSizeChange should set selectedSize', () => {
    const productsService = fixture.debugElement.injector.get(ProductsService);
    expect(component.selectedSize).toEqual('S');
    const spyDispatchPickSize = spyOn(productsService, 'dispatchPickSize').and.callThrough();
    component.onSizeChange('L');
    expect(component.selectedSize).toEqual('L', 'selectedSize should equal L');
    expect(spyDispatchPickSize).toHaveBeenCalledTimes(1);
    expect(spyDispatchPickSize).toHaveBeenCalledWith('L');
  });

});