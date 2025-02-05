import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/models/product.model';

import { ProductsService } from 'src/app/data/services/products.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {

  public product$!: Observable<Product | undefined>;
  public variant$!: Observable<number | undefined>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProductItem$();
    this.variant$ = this.productsService.getActiveProductVariant$();
  }

}