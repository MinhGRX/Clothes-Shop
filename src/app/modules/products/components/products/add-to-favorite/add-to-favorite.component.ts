import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/data/models/product.model';

import { FavoriteService } from 'src/app/data/services/favorite.service';
import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.scss']
})
export class AddToFavoriteComponent implements OnInit {

  public product$!: Observable<Product | undefined>;
  public favorite$: Observable<Product[]> | undefined;

  constructor(private productsService: ProductsService, private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProductItem$();
    this.favorite$ = this.favoriteService.getFavorite$();
  }

  onAddToFavorite() {
    this.product$.pipe(take(1)).subscribe(product => {
      if (product) {
        this.favoriteService.dispatchAddToFavorite(product);
      }
    });
  }

  onRemoveFromFavorite(id: number) {
    this.favoriteService.dispatchRemoveFromFavorite(id);
  }
}