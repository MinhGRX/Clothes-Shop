import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/data/models/product.model';

import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  public product$!: Observable<Product>;
  public variant$!: Observable<number>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.product$ = this.productsService.getActiveProductItem$().pipe(
      map(product => {
        if (!product) {
          throw new Error('Active product is undefined');
        }
        return product;
      })
    );

    this.variant$ = this.productsService.getActiveProductVariant$().pipe(
      map(variant => {
        if (variant === undefined) {
          throw new Error('Active product variant is undefined');
        }
        return variant;
      })
    );
  }
}
