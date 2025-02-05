import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveProduct } from 'src/app/data/interfaces/active-product.interface';

import { ProductsService } from 'src/app/data/services/products.service';

@Component({
  selector: 'app-sizepick',
  templateUrl: './sizepick.component.html',
  styleUrls: ['./sizepick.component.scss'],
})
export class SizepickComponent implements OnInit {
  public activeProduct$!: Observable<ActiveProduct>;
  public sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];
  public selectedSize: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.activeProduct$ = this.productsService.getActiveProduct$();
    this.getSizes();
  }

  getSizes() {
    this.activeProduct$.subscribe({
      next: activeProduct => {
        const product = activeProduct.product;
        const variant = activeProduct.variant;
        if (product) {
          // get distinct sizes from variants array
          this.sizes = product.variants
            .map(item => item.size)
            .filter((value, index, self) => self.indexOf(value) === index);
          if (variant !== undefined) {
            this.selectedSize = product.variants[variant].size;
          }
        }
      }
    });
  }

  onSizeChange(size: string): void {
    this.productsService.dispatchPickSize(size);
    this.selectedSize = size;
  }
}