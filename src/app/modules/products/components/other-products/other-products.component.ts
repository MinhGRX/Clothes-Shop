import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherProductsComponent implements OnInit {

  public products$!: Observable<any[]>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getOtherProducts$();
  }

}