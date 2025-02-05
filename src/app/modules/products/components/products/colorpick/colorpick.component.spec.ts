import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpickComponent } from './colorpick.component';
import { ProductsService } from 'src/app/data/services/products.service';
import { MockProductsService } from 'src/app/test/mock-products-service';

describe('ColorPickerComponent', () => {
  let component: ColorpickComponent;
  let fixture: ComponentFixture<ColorpickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorpickComponent ],
      providers: [
        { provide: ProductsService, useClass: MockProductsService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('getcolors should get distinct colors', () => {
    expect(component.colors).toEqual(['blue', 'purple']);
  });

  it('onColorChange should set selectedColor', () => {
    const productsService = fixture.debugElement.injector.get(ProductsService);
    expect(component.selectedColor).toEqual('blue');
    const spyDispatchPickColor = spyOn(productsService, 'dispatchPickColor').and.callThrough();
    component.onColorChange('purple');
    expect(component.selectedColor).toEqual('purple', 'selectedColor should be purple');
    expect(spyDispatchPickColor).toHaveBeenCalledTimes(1);
    expect(spyDispatchPickColor).toHaveBeenCalledWith('purple');
  });
});