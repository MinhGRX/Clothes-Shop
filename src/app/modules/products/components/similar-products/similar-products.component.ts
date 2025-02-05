import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimilarProductsComponent implements OnInit {

  public products$!: Observable<any[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getSimilarProducts$();
  }

}