import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/data/models/product.model';

import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {

  public product$!: Observable<Product | undefined>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProductItem$();
  }

}