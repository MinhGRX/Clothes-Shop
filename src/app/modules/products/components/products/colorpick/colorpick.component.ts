import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActiveProduct } from 'src/app/data/interfaces/active-product.interface';

import { ProductsService } from 'src/app/data/services/products.service';


@Component({
  selector: 'app-colorpick',
  templateUrl: './colorpick.component.html',
  styleUrls: ['./colorpick.component.scss'],
})
export class ColorpickComponent implements OnInit {
  public activeProduct$!: Observable<ActiveProduct>;
  public colors!: string[];
  public selectedColor!: string;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.activeProduct$ = this.productsService.getActiveProduct$();
    this.getColors();
  }

  getColors() {
    this.activeProduct$.subscribe({
      next: activeProduct => {
        const product = activeProduct.product;
        const variant = activeProduct.variant;
        if (product) {
          // get distinct colors from variants array
          this.colors = product.variants
            .map(item => item.color)
            .filter((value, index, self) => self.indexOf(value) === index);
          if (variant !== undefined) {
            this.selectedColor = product.variants[variant].color;
          }
        }
      }
    });
  }

  onColorChange(color: string) {
    this.productsService.dispatchPickColor(color);
    this.selectedColor = color;
  }
}