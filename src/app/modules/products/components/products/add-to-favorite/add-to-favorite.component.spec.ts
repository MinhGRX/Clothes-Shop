import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavoriteComponent } from './add-to-favorite.component';
import { ProductsService } from 'src/app/data/services/products.service';
import { MockProductsService } from 'src/app/test/mock-products-service';
import { FavoriteService } from 'src/app/data/services/favorite.service';
import { MockFavoriteService } from 'src/app/test/mock-favorite-service';

describe('AddToFavoriteComponent', () => {
  let component: AddToFavoriteComponent;
  let fixture: ComponentFixture<AddToFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddToFavoriteComponent],
      providers: [
        { provide: ProductsService, useClass: MockProductsService },
        { provide: FavoriteService, useClass: MockFavoriteService }
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('onAddToFavorite should call dispatchAddToFavorite', () => {
    const favoriteService = fixture.debugElement.injector.get(FavoriteService);
    const spyDispatchAddToFavorite = spyOn(favoriteService, 'dispatchAddToFavorite').and.callThrough();
    component.onAddToFavorite();
    expect(spyDispatchAddToFavorite).toHaveBeenCalledTimes(1);
  });

  it('onRemoveFromFavorite should call dispatchRemoveFromFavorite', () => {
    const favoriteService = fixture.debugElement.injector.get(FavoriteService);
    const spyDispatchRemoveFromFavorite = spyOn(favoriteService, 'dispatchRemoveFromFavorite').and.callThrough();
    component.onRemoveFromFavorite(0);
    expect(spyDispatchRemoveFromFavorite).toHaveBeenCalledTimes(1);
    expect(spyDispatchRemoveFromFavorite).toHaveBeenCalledWith(0);
  });

});