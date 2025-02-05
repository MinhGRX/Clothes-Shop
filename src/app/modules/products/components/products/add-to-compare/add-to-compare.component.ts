import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/data/models/product.model';

import { CompareService } from 'src/app/data/services/compare.service';
import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-add-to-compare',
  templateUrl: './add-to-compare.component.html',
  styleUrls: ['./add-to-compare.component.scss']
})
export class AddToCompareComponent implements OnInit {

  public product$!: Observable<Product | undefined>;
  public compare$: Observable<Product[]> | undefined;

  constructor(private productsService: ProductsService, private compareService: CompareService) { }

  ngOnInit() {
    this.product$ = this.productsService.getActiveProductItem$();
    this.compare$ = this.compareService.getCompare$();
  }

  onAddToCompare() {
    this.product$.pipe(take(1)).subscribe(product => {
      if (product) {
        this.compareService.dispatchAddToCompare(product);
      }
    });
  }

  onRemoveFromCompare(id: number) {
    this.compareService.dispatchRemoveFromCompare(id);
  }
}