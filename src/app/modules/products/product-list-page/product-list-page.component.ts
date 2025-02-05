import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListPageComponent implements OnInit {

  public products$!: Observable<any[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts$();
  }

}